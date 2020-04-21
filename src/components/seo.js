import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * SEO component
 * Content:
 *  - Meta tags
 *    - description
 *    - image
 *    - lang
 *    - site url
 *    - title
 *    - type
 *  - Google Fonts stylesheet link
 */

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin;
  }

  if (defaults.siteUrl === "") {
    console.error("Please set a siteUrl in your site metadata");
    return null;
  }

  return (
    <Helmet>
      <title>{defaults.title}</title>
      <html lang="en-US" />
      <link rel="canonical" href={defaults.siteUrl} />
      <meta name="description" content={defaults.description} />
      <meta name="image" content={defaults.image} />

      <meta property="og:url" content={defaults.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaults.title} />
      <meta property="og:description" content={defaults.description} />
      <meta property="og:image" content={defaults.image} />

      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap"
        media="screen"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
