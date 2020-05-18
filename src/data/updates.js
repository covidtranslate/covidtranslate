/* eslint-env node */
const PropTypes = require('prop-types')
const { oneLine } = require('common-tags')

const { propType: AuthorPropType, data: authors } = require('./authors')

module.exports = {
  propType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: AuthorPropType.isRequired,
    releases: PropTypes.arrayOf(PropTypes.number),
    message: PropTypes.string.isRequired,
  }),
  data: [
    {
      id: 1,
      date: new Date('2020-03-30T14:30:00-04:00'),
      title: 'March 30th, 2020',
      slug: '2020-03-30',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`Today, we're releasing an unofficial translation of a
        document from the Korea Centers for Disease Control and Prevention (KCDC).
        A team of volunteers working around the clock over this past weekend
        (March 27-29, 2020) has translated the document into English, in hopes
        that the information will be useful to governments around the world as
        they devise their battle plans against COVID-19. We are releasing version
        0.9 today even though it may contain inaccuracies because we are all racing
        against time to battle COVID-19. We plan to have more expert eyes scrutinize
        our work and hope to release version 1.0 very soon.`,
      ],
    },
    {
      id: 2,
      date: new Date('2020-04-06T22:00:00-04:00'),
      title: 'April 6th, 2020',
      slug: '2020-04-06',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`Today, we're releasing the English version 1.0
        of Korea CDC’s COVID-19 playbook for local governments, complete
        with appendices. This is the amazing work of global volunteers
        working around the clock since March 28, 2020. This playbook
        contains detailed, updated protocols for healthcare providers,
        government officials and ordinary citizens regarding quarantine,
        treatment, disinfection, funeral arrangements, and more from
        both a policy and a patient care perspective. We hope making
        this document available to a broader audience will save lives
        and help fight this pandemic.`,
      ],
    },
    {
      id: 3,
      date: new Date('2020-04-09T22:30:00-04:00'),
      title: 'April 9th, 2020',
      slug: '2020-04-09',
      author: authors.find((a) => a.id === 1),
      releases: [2],
      message: [
        oneLine`While the COVID Translate Team was focused on getting
        v1.0 out, a graduate student from France reached out to us about a
        test site installation guide that his group of volunteers worked on.
        Thank you for sharing!`,
      ],
    },
    {
      id: 4,
      date: new Date('2020-04-12T23:30:00-04:00'),
      title: 'April 12th, 2020',
      slug: '2020-04-12',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`Korea Centers for Disease Control and Prevention (KCDC) has
        released a series of amendments (7-4) to their COVID-19 playbook. We've
        translated and added the amendment to the list of downloads.`,
      ],
    },
    {
      id: 5,
      date: new Date('2020-04-13T23:30:00-04:00'),
      title: 'April 13th, 2020',
      slug: '2020-04-13',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`This is the second and last part of the series of
        amendments (7-4) to KCDC's COVID-19 playbook for local governments. It is
        an amendment to the Appendix portion of KCDC's response guidelines.`,
      ],
    },
    {
      id: 6,
      date: new Date('2020-04-14T23:00:00-04:00'),
      title: 'April 14th, 2020',
      slug: '2020-04-14',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`We're uploading a glossary of terms that we have been maintaining
        over time as we were translating KCDC's documents. It is still in a rough format,
        but we're planning to polish and clean up the document in the near future.`,
      ],
    },
    {
      id: 7,
      date: new Date('2020-04-15T22:30:00-04:00'),
      title: 'April 15th, 2020',
      slug: '2020-04-15',
      author: authors.find((a) => a.id === 1),
      releases: [3],
      message: [
        oneLine`Contact tracing has been a key component of
        South Korea's strategy to fight COVID-19. Find out how the
        balance between privacy and public health concerns are managed
        through institutional boundaries, strict guidelines around
        sharing information, and legal grounds. You can also learn
        about the role local governments play and how various smartphone
        applications developed by both government agencies and private
        individuals have kept citizens informed.`,
      ],
    },
    {
      id: 8,
      date: new Date('2020-04-17T23:30:00-04:00'),
      title: 'April 17th, 2020',
      slug: '2020-04-17',
      author: authors.find((a) => a.id === 1),
      releases: [4],
      message: [
        oneLine`This one-page manual describes the operational
        steps of drive-thru screening centers installed throughout the city
        of Sejong, South Korea's administrative capital with a population of
        280,000. It lays out in detail the roles of each station at the
        drive-thru site as well as guidance and instructions for site
        administrators from pre-screening preparations to post-screening
        decontamination.`,
      ],
    },
    {
      id: 9,
      date: new Date('2020-04-19T23:30:00-04:00'),
      title: 'April 19th, 2020',
      slug: '2020-04-19/1',
      author: authors.find((a) => a.id === 1),
      releases: [5],
      message: [
        oneLine`This guide from KCDC lays out the specifics of how a
        COVID-19 screening center should be managed and operated. It spells
        out the major requirements on patient classification and management,
        specimen collection and packaging, infection control within the
        screening center, and personal protective equipment (PPE) handling.`,
      ],
    },
    {
      id: 10,
      date: new Date('2020-04-19T23:30:00-04:00'),
      title: 'April 19th, 2020',
      slug: '2020-04-19/2',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`Today, we're excited to announce the next major
        milestone in our mission to spread knowledge worldwide to fight
        COVID-19! Since the release of the first draft ("v0.9") of the KCDC
        COVID-19 Response Guidelines (the "playbook"), volunteers from around
        the world took the initiative even further and started translating into
        their own native languages. The playbook has now been translated or is
        being translated to Romanian, Russian, Italian, and many others. These
        international teams are much smaller in size than the team that produced
        the first English translation, and we deeply appreciate their efforts
        for making it possible. Thank you!`,
      ],
    },
    {
      id: 11,
      date: new Date('2020-04-20T21:30:00-04:00'),
      title: 'April 20th, 2020',
      slug: '2020-04-20',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`Following the release yesterday for the Russian versions,
        the Italian versions are now complete and uploaded. Thank you again for all
        the volunteers!`,
      ],
    },
    {
      id: 12,
      date: new Date('2020-04-26T00:30:00-04:00'),
      title: 'April 26th, 2020',
      slug: '2020-04-26',
      author: authors.find((a) => a.id === 1),
      releases: [6],
      message: [
        oneLine`This drive-thru manual from KCDC covers the basic operating
        components of a drive-thru screening center. These screening centers
        have five "stations"—appointment, registration, screening, specimen collection,
        and patient disinfection and instruction—that can be set up in one of
        two different ways, depending on each agency's situation. Download
        the guide to learn more about the requirements and recommended
        procedures for efficiently operating these screening centers.`,
      ],
    },
    {
      id: 13,
      date: new Date('2020-04-28T01:30:00-04:00'),
      title: 'April 28th, 2020',
      slug: '2020-04-28',
      author: authors.find((a) => a.id === 1),
      releases: [7],
      message: [
        oneLine`How can healthcare facilities adapt when someone within
        the facility is confirmed with a COVID-19 case or comes in close contact
        with one? A lot of decisions have to be made rapidly. Learn more about
        the management procedure guidelines from KCDC, ranging from organizing
        the response team to rules of quarantine and isolation measures in the
        facility.`,
      ],
    },
    {
      id: 14,
      date: new Date('2020-04-30T14:30:00-04:00'),
      title: 'April 30th, 2020',
      slug: '2020-04-30',
      author: authors.find((a) => a.id === 1),
      releases: [1],
      message: [
        oneLine`The Russian version of the Appendix to the KCDC
        "Response Guidelines for Local Governments" has been uploaded.
        Thank you to our Russian volunteers!`,
      ],
    },
    {
      id: 15,
      date: new Date('2020-05-06T23:00:00-04:00'),
      title: 'May 6th, 2020',
      slug: '2020-05-06',
      author: authors.find((a) => a.id === 1),
      releases: [1, 2, 6, 8, 9, 10, 11, 12],
      message: [
        oneLine`Today, we're excited to share a number of new documents that were
        worked on by volunteers around the world! First, our amazing Spanish
        translators have completed their work on the KCDC response guidelines for
        local governments. This is now added to the collection of translations in
        Russian, Romanian, Italian, and English. In addition, our Russian and Italian
        translators have completed their translation of the walk-thru / drive-thru
        installation guides that were posted about a month ago. Once again, thank you for all
        your hard work, and we hope that this knowledge can reach even more people
        around the world.`,
        oneLine`Also, a team of volunteers working with the African Future Foundation
        (AFF) and the Korean Global Health Forum (KGHF) have kindly shared with us the
        translations that they have been working on. These are translations of three
        guidelines published by the KCDC: "Critical care guidelines", "Hospital-level
        healthcare facilities guidelines", and "Pediatric care guidelines". Thank you
        all for sharing, and we deeply appreciate your effort to help spread this
        information to more parts of the world!`,
        oneLine`Next, SeungCheol Ohk and his team shared with us a new document that
        describes how to build a walk-thru booth for COVID-19 testing. This was very
        interesting to see, with focus on making a design that uses readily available
        materials like acrylic and wooden boards. Thank you for sharing this!`,
        oneLine`Lastly, the COVID Translate Team has begun translating KCDC's "Operation
        and management guidelines for nationally-designated inpatient beds". Today, we're
        sharing the first part of this document, and we'll be uploading more in the near
        future.`,
      ],
    },
    {
      id: 16,
      date: new Date('2020-05-11T09:30:00-04:00'),
      title: 'May 11th, 2020',
      slug: '2020-05-11',
      author: authors.find((a) => a.id === 1),
      releases: [13],
      message: [
        oneLine`As some places around the world begin to loosen restrictions, the Korean government
        has released guidelines for Routine Distancing in Daily Life, a guide to maintaining
        certain distancing and hygiene measures while resuming at least a portion of normal
        operations. It includes guidelines for customer-facing businesses, outdoor venues
        like campgrounds and stadiums, public facilities such as libraries and parks, as well
        as other situations in which people normally gather. Each section has a clearly explained
        list of procedures to follow which might prove useful to those resuming some regular
        activities.`,
      ],
    },
    {
      id: 17,
      date: new Date('2020-05-17T20:00:00-04:00'),
      title: 'May 17th, 2020',
      slug: '2020-05-17',
      author: authors.find((a) => a.id === 1),
      releases: [12],
      message: [
        oneLine`In this document put out by the KCDC, you can find out about the ways hospitals
        in South Korea are managed and operated under a national publich health emergency due to
        infectious diseases. The document describes how inpatient beds are isolated from the rest
        of the hosital, how healthcare professionals can protect themselves from getting infected,
        how these efforts are operationalized and managed day-to-day, and many more. Please note
        that we have not decided to translate Part 3 because it contains details that are very
        specific to the Korean healthcare system.`,
      ],
    },
  ],
}
