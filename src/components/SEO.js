import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  // get data from query
  const { site } = useStaticQuery(query)

  // get desc from us, if not then gatsvy-config
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: "description", content: metaDescription }]}
    ></Helmet>
  )
}

export default SEO
