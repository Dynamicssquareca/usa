
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link href="/favicon.png" rel="icon" />
          <link href="/favicon.png" rel="apple-touch-icon" />
          <meta name="theme-color" content="#ee3442" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link href="/css/style.css" rel="stylesheet"></link>
          <meta name="google-site-verification" content="EZ7BsiYpEFL2ut-nfMdCXcrQzf6hVeHRkbXfUvhZnfQ" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HVB71MX4C0"></script>
          <Script id="google-analytics" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             
              gtag('config', 'G-HVB71MX4C0');
                `}
          </Script>
          <Script id="tag-manager" strategy="beforeInteractive">
            {`
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-N6RWJ45N");
                `}
          </Script>
          <Script id="hotjar" strategy="beforeInteractive">
            {`
             (function (h, o, t, j, a, r) {
              h.hj =
                h.hj ||
                function () {
                  (h.hj.q = h.hj.q || []).push(arguments);
                };
              h._hjSettings = { hjid: 2915813, hjsv: 6 };
              a = o.getElementsByTagName("head")[0];
              r = o.createElement("script");
              r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
                `}
          </Script>

          <Script id="apollo" strategy="beforeInteractive">
            {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script"); o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0, o.onload=function(){window.trackingFunctions.onLoad({appId:"6672fc2cc66acb09614fe906"})}, document.head.appendChild(o)}initApollo();
                `}
          </Script>

          {/* <Script id="clarity" strategy="beforeInteractive">
                {`
             (function (c, l, a, r, i, t, y) {
              c[a] =
                c[a] ||
                function () {
                  (c[a].q = c[a].q || []).push(arguments);
                };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "ar1dqt0vhs");
                `}
            </Script> */}

        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
          {/* <script src="//code.jivosite.com/widget/UMeAIYNyyq" async></script> */}

          <script
          dangerouslySetInnerHTML={{
            __html: `window.$zoho=window.$zoho || {};
                     $zoho.salesiq=$zoho.salesiq||{ready:function(){}}`,
          }}
        />
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siqa1d21659128246963b1bfd6729ca7a6ac00f331e21309d928c735dbd0b6596db"
          defer
        ></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument