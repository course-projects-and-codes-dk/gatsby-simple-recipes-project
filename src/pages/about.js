import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({ data }) => {
  // get data from query
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data

  // jsx
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          {/* info */}
          <article>
            <h2>Lorem, ipsum dolor sit amet </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              adipisci cupiditate, ipsam perspiciatis error minus. Animi, magni
              at sequi eius aperiam vel eaque iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              provident perferendis accusantium?
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>

          {/* image */}
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about-image"
            className="about-img"
            placeholder="blurred"
          />
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

export default About
