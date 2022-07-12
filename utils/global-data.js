export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Social Tribe - Reach your Full earning potential';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Saving money and being frugal only goes so far. Side hustles, advancing your career, starting a business, or investing will get you further.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2014 - 2022, SPHREX Capital, LLC. All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
