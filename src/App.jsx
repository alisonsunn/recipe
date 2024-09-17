import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import RecipeList from '@/components/RecipeList'
import EditPanel from '@/components/EditPanel'
import addRecipe from '@/utils/addRecipe'
import deleteRecipe from './utils/deleteRecipe'

const sampleRecipes = [
  {
    id: uuidV4(),
    name: "Plain Chicken",
    servings: 3,
    cookTime: "2:45",
    instructions: [
      "Put salt on Chicken",
      "Put chicken in oven",
      "Eat chicken"
    ],
    ingredients: [
      {
        id: uuidV4(),
        name: "Chicken",
        amount: "2 Pounds"
      },
      {
        id: uuidV4(),
        name: "Salt",
        amount: "1 Tbs"
      }
    ]
  },
  {
    id: uuidV4(),
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: [
      "Put paprika on Pork",
      "Put pork in oven",
      "Eat pork"
    ],
    ingredients: [
      {
        id: uuidV4(),
        name: "Pork",
        amount: "2 Pounds"
      },
      {
        id: uuidV4(),
        name: "Paprika",
        amount: "2 Tbs"
      }
    ]
  },
  {
    id: uuidV4(),
    name: "Plain Apple Pai",
    servings: 10,
    cookTime: "3:45",
    instructions: [
      "Put apples in pie",
      "Put pie in oven",
      "Eat pie"
    ],
    ingredients: [
      {
        id: uuidV4(),
        name: "Pork",
        amount: "2 Pounds"
      },
      {
        id: uuidV4(),
        name: "Paprika",
        amount: "2 Tbs"
      }
    ]
  }
]

export const App = () => {
  const [selectrecipeid, setSelectRecipeId] = useState();

  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleAddRecipe = () => {
    addRecipe(recipes, setRecipes);
  }

  const handleDeleteRecipe = (id) => {
    deleteRecipe(id, recipes, setRecipes);
  }

  const handleSelectRecipe = (id) => {
    setSelectRecipeId(id);
  }

  return (
    <>
      <RecipeList
        recipes={recipes}
        selectrecipeid={selectrecipeid}
        addRecipe={handleAddRecipe}
        deleteRecipe={handleDeleteRecipe}
        selectRecipe={handleSelectRecipe} />
      {/* only when you select a receipt, the edit panel will be displayed */}
      {/* { selectreceiptid && <EditPanel />} */}
    </>
  )
}

export default App;