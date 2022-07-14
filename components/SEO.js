import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="pushsdk" content="0fe612c4ddf57942bb226eecaf09176a"></meta>
    </Head>
  );
}