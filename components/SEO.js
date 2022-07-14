import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <div id="amzn-assoc-ad-2b9156a5-bc0a-4362-8dd0-864b2cf64bd6"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=2b9156a5-bc0a-4362-8dd0-864b2cf64bd6"></script>
    </Head>
  );
}
