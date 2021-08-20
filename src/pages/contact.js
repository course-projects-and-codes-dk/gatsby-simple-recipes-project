import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  // jsx
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam nobis nisi in expedita, recusandae vitae ullam animi
              dolorum culpa molestias.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              accusantium vitae, rerum maiores, minus voluptas alias, fuga odio
              nisi quidem voluptatum non! Sequi, nostrum dolorem.
            </p>
          </article>

          <article>
            <form
              action="https://formspree.io/f/mvodvvwq"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" email="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>

        <section className="featured-recipes">
          <h5>Look at this awesomeness!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

export default Contact
