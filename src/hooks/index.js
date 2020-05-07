import React from 'react'
import throttle from 'lodash.throttle'

const API_URL = 'https://sheets.googleapis.com/v4/spreadsheets'
const API_KEY = 'AIzaSyADMD4DdpEg7fY4qp6mHDvYCJWxLSf8Ohg'
const SHEET_ID = '18s1tHFbnzrweiFvds2xIWdqtjoAHaCCiCOls2It7JL0'
const DATA_RANGE = 'A2:A'

const CONTRIBUTOR_LIST_DATA_KEY = 'CONTRIBUTORS:DATA'
const CONTRIBUTOR_LIST_TTL_KEY = 'CONTRIBUTORS:TTL'

function divideData(data) {
  const midpoint = Math.ceil(data.length / 2)
  return [data.slice(0, midpoint), data.slice(midpoint, data.length)]
}

export const useContributorSheet = () => {
  const [namesFirstColumn, setFirstColumnNames] = React.useState([])
  const [namesSecondColumn, setSecondColumnNames] = React.useState([])

  React.useEffect(() => {
    const now = new Date()
    const ttl = new Date(
      JSON.parse(window.localStorage.getItem(CONTRIBUTOR_LIST_TTL_KEY))
    )
    const cachedData = JSON.parse(
      window.localStorage.getItem(CONTRIBUTOR_LIST_DATA_KEY)
    )

    if (!cachedData || !ttl || ttl < now) {
      fetch(`${API_URL}/${SHEET_ID}/values/${DATA_RANGE}?key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            throw new Error(`[${data.error.code}] ${data.error.message}`)
          }
          const { values } = data
          const names = values.map((v) => v[0])

          window.localStorage.setItem(
            CONTRIBUTOR_LIST_DATA_KEY,
            JSON.stringify(names)
          )

          const fifteenMinutesInMS = 15 * 60 * 1000
          const newTTL = new Date(now.getTime() + fifteenMinutesInMS)
          window.localStorage.setItem(
            CONTRIBUTOR_LIST_TTL_KEY,
            JSON.stringify(newTTL)
          )

          const [firstColumn, secondColumn] = divideData(names)
          setFirstColumnNames(firstColumn)
          setSecondColumnNames(secondColumn)
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (cachedData && ttl && ttl >= now) {
      const [firstColumn, secondColumn] = divideData(cachedData)
      setFirstColumnNames(firstColumn)
      setSecondColumnNames(secondColumn)
    }
  }, [])

  return [namesFirstColumn, namesSecondColumn]
}

export const useAnchorObservers = (anchors, deps = []) => {
  const [currentFocus, setCurrentFocus] = React.useState('')

  const refList = React.useRef(
    anchors.map(() => {
      return React.createRef()
    })
  )

  React.useLayoutEffect(() => {
    const handleScroll = throttle(
      () => {
        let idx = 0
        while (idx < refList.current.length) {
          const { id } = anchors[idx]

          const ref = refList.current[idx]

          if (!ref.current) {
            idx += 1
            continue
          }

          const nextRef = refList.current[idx + 1] || {
            current: { offsetTop: document.body.scrollHeight },
          }

          const buffer = 4

          if (window.scrollY < ref.current.offsetTop - buffer) {
            setCurrentFocus('')
            break
          }

          if (
            window.scrollY >= ref.current.offsetTop - buffer &&
            window.scrollY < nextRef.current.offsetTop - buffer
          ) {
            setCurrentFocus(id)
            break
          }

          idx += 1
        }
      },
      250,
      { leading: true }
    )

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [anchors, ...deps])

  return [refList.current, currentFocus]
}
