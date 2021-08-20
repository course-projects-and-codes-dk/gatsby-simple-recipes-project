import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />

      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="hero-image"
            layout="fullWidth"
            className="hero-img"
            placeholder="tracedSVG"
          />

          <article className="hero-container">
            <div className="hero-text">
              <h1>Simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </article>
        </header>

        <AllRecipes />
      </main>
    </Layout>
  )
}
