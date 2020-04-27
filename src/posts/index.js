import PropTypes from 'prop-types'
import { oneLine } from 'common-tags'

export const POST_PROP_TYPE = PropTypes.shape({
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
})

export const COVID_TRANSLATE_TEAM = {
  name: 'COVID Translate Team',
  slug: 'about',
}

export const KCDC_RESPONSE_GUIDELINES_TAG = {
  name: 'COVID-19 Response Guidelines',
  slug: 'kcdc-covid-19-response-guidelines',
}

export const KCDC_RESPONSE_GUIDELINES = {
  id: 1,
  slug: 'kcdc-covid-19-response-guidelines',
  title: 'KCDC COVID-19 Response Guidelines translation v1.0 released',
  excerpt: oneLine`Today, we're releasing the English version 1.0
    of Korea CDC’s COVID-19 playbook for local governments, complete
    with appendices. This is the amazing work of global volunteers
    working around the clock since March 28, 2020. This playbook
    contains detailed, updated protocols for healthcare providers,
    government officials and ordinary citizens regarding quarantine,
    treatment, disinfection, funeral arrangements, and more from
    both a policy and a patient care perspective. We hope making
    this document available to a broader audience will save lives
    and help fight this pandemic.`,
  author: COVID_TRANSLATE_TEAM,
  tag: KCDC_RESPONSE_GUIDELINES_TAG,
  publishedAt: new Date('2020-04-06T22:00:00-04:00'),
  updatedAt: new Date('2020-04-14T23:00:00-04:00'),
}

export const COVID_19_RESOURCES_TAG = {
  name: 'COVID-19 Resources',
  slug: 'covid-19-resources',
  description: oneLine`Collection of external resources
    in English curated by the COVID Translate Team`,
}

export const TEST_SITE_INSTALLATION_GUIDE = {
  id: 2,
  slug: 'covid-19-test-site-installation-guide',
  title: 'COVID-19 test site installation guide',
  excerpt: oneLine`While we were focused on getting v1.0 out, a
    graduate student from France reached out to us about a test site
    installation guide that his group of volunteers worked on. Thank
    you for sharing!`,
  author: COVID_TRANSLATE_TEAM,
  tag: COVID_19_RESOURCES_TAG,
  publishedAt: new Date('2020-04-09T22:30:00-04:00'),
  updatedAt: new Date('2020-04-09T22:30:00-04:00'),
}

export const CONTACT_TRACING_STRATEGY = {
  id: 3,
  slug: 'contact-tracing-strategy-in-south-korea',
  title: 'Contact tracing strategy in South Korea',
  excerpt: oneLine`Contact tracing has been a key component of
    South Korea's strategy to fight COVID-19. Find out how the
    balance between privacy and public health concerns are managed
    through institutional boundaries, strict guidelines around
    sharing information, and legal grounds. You can also learn
    about the role local governments play and how various smartphone
    applications developed by both government agencies and private
    individuals have kept citizens informed.`,
  author: COVID_TRANSLATE_TEAM,
  tag: COVID_19_RESOURCES_TAG,
  publishedAt: new Date('2020-04-15T22:30:00-04:00'),
  updatedAt: new Date('2020-04-15T22:30:00-04:00'),
}

export const SCREENING_CENTER_OPERATION_TAG = {
  name: 'COVID-19 Screening Center Guidelines',
  slug: 'screening-center-guidelines',
  description: oneLine`Collection of guidelines for operating
    COVID-19 screening centers`,
}

export const SEJONG_CITY_DRIVE_THRU_MANUAL = {
  id: 4,
  slug: 'drive-thru-manuals',
  title: 'Drive-thru screening center operation manual in Sejong City',
  excerpt: oneLine`This one-page manual describes the operational
    steps of drive-thru screening centers installed throughout the
    city of Sejong, South Korea's administrative capital with a
    population of 280,000. It lays out in detail the roles of each
    station at the drive-thru site as well as guidance and instructions
    for site administrators from pre-screening preparations to
    post-screening decontamination.`,
  author: COVID_TRANSLATE_TEAM,
  tag: SCREENING_CENTER_OPERATION_TAG,
  publishedAt: new Date('2020-04-17T23:30:00-04:00'),
  updatedAt: new Date('2020-04-17T23:30:00-04:00'),
}

export const KCDC_SCREENING_CENTER_GUIDE = {
  id: 5,
  slug: 'screening-center-operation-guide',
  title: 'KCDC screening center operation guide',
  excerpt: oneLine`This guide from KCDC lays out the specifics of how a
    COVID-19 screening center should be managed and operated. It spells
    out the major requirements on patient classification and management,
    specimen collection and packaging, infection control within the
    screening center, and personal protective equipment (PPE) handling.`,
  author: COVID_TRANSLATE_TEAM,
  tag: SCREENING_CENTER_OPERATION_TAG,
  publishedAt: new Date('2020-04-19T23:30:00-04:00'),
  updatedAt: new Date('2020-04-19T23:30:00-04:00'),
}

export const KCDC_RESPONSE_GUIDELINES_MORE_LANGUAGES = {
  id: 6,
  slug: 'kcdc-covid-19-response-guidelines/more-languages',
  title: 'KCDC COVID-19 Response Guidelines translated into more languages',
  excerpt: oneLine`Today, we're excited to announce the next major
    milestone in our mission to spread knowledge worldwide to fight
    COVID-19! Since the release of the first draft ("v0.9") of the KCDC
    COVID-19 Response Guidelines (the "playbook"), volunteers from around
    the world took the initiative even further and started translating into
    their own native languages. The playbook has now been translated or is
    being translated to Romanian, Russian, Italian, and many others. These
    international teams are much smaller in size than the team that produced
    the first English translation, and we deeply appreciate their efforts
    for making it possible. Thank you!`,
  author: COVID_TRANSLATE_TEAM,
  // Temp override
  tag: {
    ...KCDC_RESPONSE_GUIDELINES_TAG,
    slug: 'kcdc-covid-19-response-guidelines/more-languages',
  },
  publishedAt: new Date('2020-04-19T23:30:00-04:00'),
  updatedAt: new Date('2020-04-20T22:00:00-04:00'),
}

export const KCDC_DRIVE_THRU_MANUAL = {
  id: 7,
  slug: 'kcdc-drive-thru-manual',
  title: 'KCDC drive-thru manual',
  excerpt: oneLine`This document from KCDC covers the basic operating
    components of a drive-thru screening center. These screening centers
    have five "stations"—appointment, registration, screening, specimen
    collection, and patient disinfection and instruction—that can be set
    up in one of two different ways, depending on each agency's situation.
    Download the guide to learn more about the requirements and recommended
    procedures for efficiently operating these screening centers.`,
  author: COVID_TRANSLATE_TEAM,
  tag: SCREENING_CENTER_OPERATION_TAG,
  publishedAt: new Date('2020-04-26T00:30:00-04:00'),
  updatedAt: new Date('2020-04-26T00:30:00-04:00'),
}
