import Head from 'next/head';
import { APP_DESCRIPTION, APP_FACEBOOK_URL, APP_IMAGE_URL, APP_LINKEDIN_URL, APP_TITLE } from '@/config/index';

type props = {
  siteTitle?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const SEO = ({ siteTitle, description, url, image }: props) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE}</title>
      <meta name="description" content={description || APP_DESCRIPTION} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description || APP_DESCRIPTION} />
      <meta property="og:url" content={url || APP_FACEBOOK_URL} />
      <meta property="og:image" content={image || APP_IMAGE_URL} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={APP_LINKEDIN_URL} />
      <meta property="twitter:title" content={siteTitle ? `${siteTitle} | ${APP_TITLE}` : APP_TITLE} />
      <meta property="twitter:description" content={description || APP_DESCRIPTION} />
      <meta property="twitter:url" content={url || APP_LINKEDIN_URL} />
      <meta property="twitter:image" content={image || APP_IMAGE_URL} />
    </Head>
  );
};

export default SEO;
