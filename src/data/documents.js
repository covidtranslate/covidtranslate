/* eslint-env node */
const PropTypes = require('prop-types')

const { propType: AuthorPropType, data: authors } = require('./authors')

const DOCUMENT_CATEGORIES = {
  KCDC: 'kcdc-guidelines',
  other: 'more-resources',
}

module.exports = {
  propType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.oneOf(Object.values(DOCUMENT_CATEGORIES)).isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: AuthorPropType.isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    updatedAt: PropTypes.instanceOf(Date).isRequired,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        sectionName: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired
    ).isRequired,
  }),
  categories: DOCUMENT_CATEGORIES,
  data: [
    {
      id: 1,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'response-guidelines-for-local-governments',
      title: 'Response guidelines for local governments',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-04-06T22:00:00-04:00'),
      updatedAt: new Date('2020-04-14T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Response guidelines',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/CovidPlaybook_EN_v1.0.pdf',
            },
            {
              text: 'Română (Romanian 🇷🇴)',
              link: 'https://www.proiectecovid.org/',
            },
            {
              text: 'Русский (Russian 🇷🇺)',
              link: '/CovidPlaybook_RU_v1.0.pdf',
            },
            {
              text: 'Italiano (Italian 🇮🇹)',
              link: '/CovidPlaybook_IT_v1.0.pdf',
            },
          ],
        },
        {
          sectionName: 'Appendix to the guidelines',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/CovidPlaybook_Appendix_EN_v1.0.pdf',
            },
            {
              text: 'Русский (Russian 🇷🇺)',
              link: '/CovidPlaybook_Appendix_RU_v1.0.pdf',
            },
            {
              text: 'Italiano (Italian 🇮🇹)',
              link: '/CovidPlaybook_Appendix_IT_v1.0.pdf',
            },
          ],
        },
        {
          sectionName: 'Amendments (7-4)',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/CovidPlaybook_EN_v1.0_Amendment_7-4.pdf',
            },
            {
              text: 'English (English 🇺🇸) - Appendix',
              link: '/CovidPlaybook_Appendix_EN_v1.0_Amendment_7-4.pdf',
            },
          ],
        },
        {
          sectionName: 'Glossary',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/Glossary.xlsx',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'test-site-installation-guide',
      title: 'COVID-19 test site installation guide',
      author: authors.find((a) => a.id === 2),
      publishedAt: new Date('2020-04-09T22:30:00-04:00'),
      updatedAt: new Date('2020-04-09T22:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'Drive-through guide',
              link: '/COVID19-drive-through-test-site-instruction.pdf',
            },
            {
              text: 'Walk-through guide',
              link: '/COVID19-walk-through-test-site-instruction.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'contact-tracing-strategy',
      title: 'Contact tracing strategy in South Korea',
      author: authors.find((a) => a.id === 2),
      publishedAt: new Date('2020-04-15T22:30:00-04:00'),
      updatedAt: new Date('2020-04-15T22:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'Contact tracing strategy in South Korea',
              link: '/tracking-strategy-in-Korea.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'sejong-city-drive-thru-manual',
      title: 'Drive-thru manual for Sejong City',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-04-17T23:30:00-04:00'),
      updatedAt: new Date('2020-04-17T23:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'Sejong City drive-thru manual',
              link: '/Drive-thru_Manual_Sejong.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'screening-center-operation-guide',
      title: 'Screening center operation guide',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-04-19T23:30:00-04:00'),
      updatedAt: new Date('2020-04-19T23:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'Screening center operation guidelines',
              link: '/screening-center-operation-guide.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'drive-thru-manual',
      title: 'Drive-thru manual',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-04-26T00:30:00-04:00'),
      updatedAt: new Date('2020-04-26T00:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'KCDC drive-thru manual',
              link: '/KCDC-drive-thru-manual.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'management-of-healthcare-facilities-with-confirmed-cases',
      title: 'Management of healthcare facilities with confirmed cases',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-04-28T01:30:00-04:00'),
      updatedAt: new Date('2020-04-28T01:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'Management of healthcare facilities with confirmed cases',
              link:
                '/management-of-healthcare-facilities-with-confirmed-cases.pdf',
            },
          ],
        },
      ],
    },
  ],
}
