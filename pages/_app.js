import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))