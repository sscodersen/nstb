import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useAmp } from 'next/amp'

import { GA_TRACKING_ID } from '../lib/gtag'
import AmpAnalytics from '../components/amp/AmpAnalytics'

function AmpWrap({ ampOnly, nonAmp }) {
  const isAmp = useAmp()
  if (ampOnly) return isAmp && ampOnly
  return !isAmp && nonAmp
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >

          <Main />
          <NextScript />
          <div data-zone="f41e39e66579408eba7b855b3843b499" style="width:320px;height:100px;display: inline-block;margin: 0 auto"></div>
          {/* AMP - Google Analytics */}
          <AmpWrap
            ampOnly={
              <AmpAnalytics
                type="googleanalytics"
                script={{
                  vars: {
                    account: GA_TRACKING_ID,
                    gtag_id: GA_TRACKING_ID,
                    config: {
                      [GA_TRACKING_ID]: { groups: 'default' },
                    },
                  },
                  triggers: {
                    trackPageview: {
                      on: 'visible',
                      request: 'pageview',
                    },
                  },
                }}
              />
            }
          />
<div data-options="count=3,interval=1,burst=4" data-zone="0c68e4d052934c34bfd428e0db2534a1" style="display: none"></div>
          {/* Non-AMP - Google Analytics */}
          <AmpWrap
            nonAmp={
              <>
<div data-options="count=3,interval=1,burst=4" data-zone="2250bc54f5444def8812d19fbee45522" style="display: none"></div>
<script type="text/javascript" src="https://app.web3ads.net/main.js" async></script>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6096745235213194"></script>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', '${GA_TRACKING_ID}');
                    `,
                  }}
                />
              </>
            }
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument;