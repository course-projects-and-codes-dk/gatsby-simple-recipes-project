import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
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
            <form action="" className="form contact-form">
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
      </main>
    </Layout>
  )
}

export default Contact
