import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import SEO from "../components/SEO"

const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  // get unique tags from utils
  const newTags = setupTags(nodes)

  // jsx
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            // destrcuture tag array
            const [text, value] = tag

            // slugify the tag
            const tagSlug = slugify(text, { lower: true })

            return (
              <Link key={index} to={`/tags/${tagSlug}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
