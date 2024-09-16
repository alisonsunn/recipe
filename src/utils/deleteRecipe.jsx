function deleteRecipe(id, recipes, setRecipes) {
  setRecipes(recipes.filter(recipe => recipe.id !== id));
}

export default deleteRecipe;