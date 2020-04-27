import React from 'react'
import { css } from '@emotion/core'

import { AboutLayout } from '@components/layouts'
import { useContributorSheet } from '@hooks'

const AboutPage = () => {
  const [namesFirstColumn, namesSecondColumn] = useContributorSheet()

  return (
    <AboutLayout pageTitle="About us">
      <p>
        The<b> COVID Translate Project</b> is led by many volunteers from around
        the world to translate the documents published by Korea Centers for
        Disease Control and Prevention (
        <a href="https://twitter.com/KoreaCDC">@KoreaCDC</a>) to English and
        various other languages, with the mission of spreading the knowledge
        worldwide to fight COVID-19.
      </p>
      <h2>Our story</h2>
      <p>
        Late in the evening on <b>Friday, March 27th</b>, Professor Sebastian
        Seung tweeted a call for volunteers to crowdsource a translation of a
        KCDC COVID-19 protocol for local governments and public health
        officials:
      </p>
      <blockquote>
        <a href="https://twitter.com/SebastianSeung/status/1243753450074181637?s=20">
          1/ SAVE LIVES by translating Korean→English! 75 page playbook for
          @KoreaCDC’s fight against #Covid19. Let’s translate into English by
          Monday morning. No time to lose! Please share the link.
        </a>
      </blockquote>
      <p>
        Within hours, a global team of people had jumped in.{' '}
        <b>Over 50 people</b> in the Google Doc editing together often caused
        the page to freeze, as we translated at speed from a (very rough) draft
        seeded from machine translation.
      </p>
      <p>
        We created teams for every major task and got to know each other as we
        worked furiously day and night. <b>Two days later</b>, we had a complete
        and technically accurate—if not perfectly polished—document, and we
        released it as &quot;v0.9&quot; so that we could get the information out
        to people as quickly as possible (click{' '}
        <a href="https://twitter.com/SebastianSeung/status/1245012707549548544">
          here
        </a>{' '}
        for more about the crowdsourcing process).
      </p>
      <p>
        Over the next week, we worked on translating the appendices to that
        document and proofreading thoroughly, and we released final versions of
        those two documents on April 6 as &quot;v1.0&quot;. The document is
        comprehensive, detailed, and practical and covers everything from
        quarantine protocols to how to deal with the deceased.
      </p>
      <p>
        While every country&apos;s situation is unique, our hope is that by
        translating some of Korea&apos;s protocols into English, we can put that
        information in front of more eyes and increase our collective global
        know-how about how to fight this disease. And others seem to agree: we
        now have international teams translating the protocol from English into
        other languages!
      </p>
      <h2>Join us</h2>
      <p>
        We&apos;re still translating more KCDC protocols, though not at the same
        mad pace. <a href="https://forms.gle/9yakwuCyC6GNCbNF9">Join us</a> if
        you&apos;d like to help, even if you can only spare a few hours a week.
        We&apos;re now working on some more detailed and specific protocols for
        hospitals, testing centers, etc.
      </p>
      <p>
        Keep checking back here for new documents, or follow us on social media
        to stay up to date. For general inquiries, please contact us at{' '}
        <a href="mailto:covidtranslate@gmail.com">covidtranslate@gmail.com</a>.
        For more information on translating into other languages, please contact{' '}
        <a href="mailto:covidtranslate.international@gmail.com">
          covidtranslate.international@gmail.com
        </a>
        .
      </p>
      {namesFirstColumn.length > 0 && (
        <>
          <h2>Our volunteers</h2>
          <div
            css={css`
              width: 100%;
              display: flex;
              & ul {
                flex: 1;
                min-width: unset;
                padding-left: 0;
              }
              & ul li {
                list-style: none;
              }
            `}
          >
            <ul>
              {namesFirstColumn.map((name, idx) => (
                <li key={`${idx}-${name}`}>{name}</li>
              ))}
            </ul>
            <ul>
              {namesSecondColumn.map((name, idx) => (
                <li key={`${idx}-${name}`}>{name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </AboutLayout>
  )
}

export default AboutPage
