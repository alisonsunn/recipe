import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import RecipeList from '@/components/RecipeList'
import EditPanel from '@/components/EditPanel'
import addRecipe from '@/utils/addRecipe'
import deleteRecipe from './utils/deleteRecipe'
import { useEffect } from 'react'


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

const recipesKey = import.meta.env.VITE_KEY;
const selectRecipeIdKey = import.meta.env.VITE_SELECT_RECIPE_ID_KEY;
const lastSelectRecipeIdKey = import.meta.env.VITE_LAST_SELECTED_RECIPE_ID_KEY;

export const App = () => {
// get the recipes from the local storage
  const [recipes, setRecipes] = useState(() => {
    const localData = localStorage.getItem(recipesKey)
    return localData ? JSON.parse(localData) : sampleRecipes
  });

// monitor the recipes change, save the recipes to the local storage  
  useEffect(() => {
    localStorage.setItem(recipesKey, JSON.stringify(recipes))
  }, [recipes])

// get the select recipe id from the local storage
  const [selectrecipeid, setSelectRecipeId] = useState(() => {
    const localData = localStorage.getItem(selectRecipeIdKey)
    return localData ? JSON.parse(localData) : null
  });

// set the select recipe id to the local storage
  useEffect(() => {
    localStorage.setItem(selectRecipeIdKey, JSON.stringify(selectrecipeid))
  }, [selectrecipeid])

// get the last select recipe id from the local storage
  const [lastSelectRecipeId, setLastSelectRecipeId] = useState(() => {
    const localData = localStorage.getItem(lastSelectRecipeIdKey)
    return localData ? JSON.parse(localData) : null
  });

// set the last select recipe id to the local storage
  useEffect(() => {
    localStorage.setItem(lastSelectRecipeIdKey, JSON.stringify(lastSelectRecipeId))
  }, [lastSelectRecipeId])

  const handleAddRecipe = () => {
    addRecipe(recipes, setRecipes, handleSelectRecipe);
  }

  const handleDeleteRecipe = (id) => {
    if (selectrecipeid === id) {
      setSelectRecipeId(null);
    }
    deleteRecipe(id, recipes, setRecipes);
  }

  const handleSelectRecipe = (id) => {
    console.log('id:', id);
    console.log('selectrecipeid:', selectrecipeid);
    console.log('lastSelectRecipeId:', lastSelectRecipeId);
    if (!selectrecipeid && id === lastSelectRecipeId) {
      setLastSelectRecipeId(null);
    } else if (selectrecipeid && id != selectrecipeid) {
      setLastSelectRecipeId(selectrecipeid);
    }
    setSelectRecipeId(id);
  }

  const handleEditRecipe = (id, recipe) => {
    const copyRecipes = [...recipes];
    const index = copyRecipes.findIndex(recipe => recipe.id === id);
    copyRecipes[index] = recipe;
    setRecipes(copyRecipes);
  }

  const getSelectRecipe = () => {
    return recipes.find(recipe => recipe.id === selectrecipeid);
  }

  return (
    <>
      <RecipeList
        recipes={recipes}
        selectrecipeid={selectrecipeid}
        handleAddRecipe={handleAddRecipe}
        deleteRecipe={handleDeleteRecipe}
        selectRecipe={handleSelectRecipe}
        lastSelectRecipeId={lastSelectRecipeId} />
      {/* only when you select a receipt, the edit panel will be displayed */}
      { selectrecipeid && <EditPanel 
        handleSelectRecipe={handleSelectRecipe}
        handleEditRecipe={handleEditRecipe}
        getSelectRecipe={getSelectRecipe}
        recipes={recipes}
       />}
    </>
  )
}

export default App;