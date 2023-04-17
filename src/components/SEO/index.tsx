import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image_url?: string;
}

export const SEO = (props: SEOProps) => {
  const {
    title = "Tamunobelema William",
    description = "I'm committed to a lifetime of creating new and incredible spatial stories that redefine user experiences.",
    image_url = `www.tamunobelemawilliam.com/logo.png`,
  } = props;

  const website = "www.tamunobelemawilliam.com";

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="twitter:url" content={website} />
      <meta property="og:url" content={website} />

      <meta property="twitter:image" content={image_url} />
      <meta property="og:image" content={image_url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};
