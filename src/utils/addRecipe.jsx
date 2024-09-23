import { v4 as uuidV4 } from 'uuid'

function addRecipe(recipes, setRecipes, handleSelectRecipe) {
  const newRecipe = {
    id: uuidV4(),
    name: 'New',
    servings: 1,
    cookTime: '1:00',
    instructions: ["New Instruction 1", "New Instruction 2"],
    ingredients: [
      {
        id: uuidV4(),
        name: 'demo',
        amount: '1 Tbs'
      }
    ]
  }
  handleSelectRecipe(newRecipe.id);
  setRecipes([...recipes, newRecipe]);
}

export default addRecipe;
