import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=G-N5H2ZVHKEG`}
    />


    <Script> strategy="lazyOnload">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-N5H2ZVHKEG');
      `}
    </Script>

      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
