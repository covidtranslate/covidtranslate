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
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Response guidelines',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/CovidPlaybook_KR.pdf',
            },
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
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/CovidPlaybook_ES_v1.0.pdf',
            },
            {
              text: 'Bahasa Indonesia (Indonesian 🇮🇩)',
              link: '/CovidPlaybook_ID_v1.0.pdf',
            },
          ],
        },
        {
          sectionName: 'Appendix to the guidelines',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/CovidPlaybook_Appendix_KR.pdf',
            },
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
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/CovidPlaybook_Appendix_ES_v1.0.pdf',
            },
            {
              text: 'Bahasa Indonesia (Indonesian 🇮🇩)',
              link: '/CovidPlaybook_Appendix_ID_v1.0.pdf',
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
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/CovidPlaybook_EN_v1.0_Amendment_7-4_ES.pdf',
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
      updatedAt: new Date('2020-06-18T20:30:00-04:00'),
      actions: [
        {
          sectionName: 'Drive-through guide',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/COVID19-drive-through-test-site-instruction.pdf',
            },
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/COVID19-drive-through-test-site-instruction_ES.pdf',
            },
          ],
        },
        {
          sectionName: 'Walk-through guide',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/COVID19-walk-through-test-site-instruction.pdf',
            },
            {
              text: 'Русский (Russian 🇷🇺)',
              link: '/COVID19-walk-through-test-site-instruction_RU.pdf',
            },
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/COVID19-walk-through-test-site-instruction_ES.pdf',
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
              text: 'English (English 🇺🇸)',
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
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/Drive-thru_Manual_Sejong_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
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
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/screening-center-operation-guide_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
              link: '/screening-center-operation-guide.pdf',
            },
            {
              text: 'Italiano (Italian 🇮🇹)',
              link: '/screening-center-operation-guide_IT.pdf',
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
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/KCDC-drive-thru-manual_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
              link: '/KCDC-drive-thru-manual.pdf',
            },
            {
              text: 'Русский (Russian 🇷🇺)',
              link: '/KCDC-drive-thru-manual_RU.pdf',
            },
            {
              text: 'Italiano (Italian 🇮🇹)',
              link: '/KCDC-drive-thru-manual_IT.pdf',
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
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link:
                '/management-of-healthcare-facilities-with-confirmed-cases_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
              link:
                '/management-of-healthcare-facilities-with-confirmed-cases.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 8,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'walk-thru-booth-design',
      title: 'Walk-thru booth design for COVID-19 testing',
      author: authors.find((a) => a.id === 2),
      publishedAt: new Date('2020-05-06T23:00:00-04:00'),
      updatedAt: new Date('2020-05-06T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/walk-thru-booth-design.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 9,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'critical-care-guidelines',
      title: 'Critical care guidelines',
      author: authors.find((a) => a.id === 3),
      publishedAt: new Date('2020-05-06T23:00:00-04:00'),
      updatedAt: new Date('2020-05-06T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/critical-care-guidelines.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'hospital-level-healthcare-facilities-guidelines',
      title: 'Hospital-level healthcare facilities guidelines',
      author: authors.find((a) => a.id === 3),
      publishedAt: new Date('2020-05-06T23:00:00-04:00'),
      updatedAt: new Date('2020-05-06T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/hospital-level-healthcare-facilities-guidelines.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 11,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'pediatric-care-guidelines',
      title: 'Pediatric care guidelines',
      author: authors.find((a) => a.id === 3),
      publishedAt: new Date('2020-05-06T23:00:00-04:00'),
      updatedAt: new Date('2020-05-06T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/pediatric-care-guidelines.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 12,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'operation-and-management-guidelines-for-inpatient-beds',
      title:
        'Operation and management guidelines for nationally-designated inpatient beds',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-05-06T23:00:00-04:00'),
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link:
                '/operation-and-management-guidelines-for-nationally-designated-inpatient-beds_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
              link:
                '/operation-and-management-guidelines-for-nationally-designated-inpatient-beds.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 13,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'routine-distancing-guidelines',
      title: 'Detailed guidelines for routine distancing in daily life',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-05-11T09:30:00-04:00'),
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/routine-distancing-guidelines_KR.pdf',
            },
            {
              text: 'English (English 🇺🇸)',
              link: '/routine-distancing-guidelines_EN.pdf',
            },
            {
              text: 'Русский (Russian 🇷🇺)',
              link: '/routine-distancing-guidelines_RU.pdf',
            },
            {
              text: 'Italiano (Italian 🇮🇹)',
              link: '/routine-distancing-guidelines_IT.pdf',
            },
            {
              text: 'Español (Spanish 🇪🇸)',
              link: '/routine-distancing-guidelines_ES.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 14,
      category: DOCUMENT_CATEGORIES.other,
      slug: 'mobile-testing-truck',
      title: 'Mobile testing truck design',
      author: authors.find((a) => a.id === 2),
      publishedAt: new Date('2020-06-07T23:00:00-04:00'),
      updatedAt: new Date('2020-06-07T23:00:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: 'English (English 🇺🇸)',
              link: '/mobile-testing-truck.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 15,
      category: DOCUMENT_CATEGORIES.KCDC,
      slug: 'guidelines-for-school-systems',
      title: 'Guidelines for pre-, elementary, middle, and special schools',
      author: authors.find((a) => a.id === 1),
      publishedAt: new Date('2020-06-28T14:30:00-04:00'),
      updatedAt: new Date('2020-06-28T14:30:00-04:00'),
      actions: [
        {
          sectionName: 'Downloads',
          links: [
            {
              text: '한국어 (Korean 🇰🇷)',
              link: '/guidelines-for-school-systems_KR.pdf',
            },
          ],
        },
      ],
    },
  ],
}
