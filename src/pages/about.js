import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const About = () => {
  return (
    <Layout>
      <main className="page">
        <div className="about-page">
          {/* info */}
          <article>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
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
        </div>
      </main>{" "}
    </Layout>
  )
}

export default About
