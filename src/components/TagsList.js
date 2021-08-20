import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes }) => {
  // get tags from utils function
  const newTags = setupTags(recipes)

  // jsx
  return (
    <div className="tags-container">
      <h4>tags</h4>

      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [tagName, value] = tag

          // slugify the tag
          const tagSlug = slugify(tagName, { lower: true })

          return (
            <Link key={index} to={`/tags/${tagSlug}`}>
              {tagName} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
