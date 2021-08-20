import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  // destructuring data
  const {
    title,
    cookTime,
    prepTime,
    servings,
    description: { description },
    content: { ingredients, instructions, tags, tools },
    image,
  } = data.contentfulRecipe

  // helper function for gatsby image
  const pathToImage = getImage(image)

  // jsx
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />

            <article className="recipe-info">
              <h2>{title}</h2>

              <p>{description}</p>

              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>

              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  // slugify the tag
                  const tagSlug = slugify(tag, { lower: true })

                  return (
                    <Link to={`/tags/${tagSlug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>

          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>

            <article className="second-cloumn">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>

              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      description {
        description
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
