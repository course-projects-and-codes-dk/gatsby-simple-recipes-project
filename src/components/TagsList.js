import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  // get tags from utils function
  const newTags = setupTags(recipes)

  // jsx
  return <div>this is list of tags</div>
}

export default TagsList
