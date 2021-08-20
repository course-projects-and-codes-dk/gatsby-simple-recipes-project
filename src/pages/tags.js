import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"

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
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            // destrcuture tag array
            const [text, value] = tag

            return (
              <Link key={index} to={`/${text}`} className="tag">
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
