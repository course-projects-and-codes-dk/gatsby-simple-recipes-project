const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      // create dynamic object properties
      /*
        allTags:{
          food:1,
          dinner:3
        }
      */
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstValue] = a
    const [secondValue] = b

    firstValue.localeCompare(secondValue)
  })

  return newTags
}

export default setupTags
