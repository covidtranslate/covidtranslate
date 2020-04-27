import React from 'react'

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
