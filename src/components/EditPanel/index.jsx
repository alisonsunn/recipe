import React from 'react';
import styles from './index.module.scss';
import buttonstyles from '@/components/Button/index.module.scss';
import { scssConvert } from '@/utils/scssConvert';
import Button from '@/components/Button';
import { v4 as uuidV4 } from 'uuid';

function EditPanel(props) {
  const { className, handleSelectRecipe, recipes, getSelectRecipe, handleEditRecipe, ...rest } = props;

  const selectRecipe = getSelectRecipe();
  const { id, name, cookTime, servings, instructions, ingredients } = selectRecipe;

  const handleChangeRecipe = (changeItem) => {
    console.log();
    handleEditRecipe(id, { ...selectRecipe, ...changeItem });
  }

  // delete the instruction
  const deleteInstruction = (indexInstruction) => {
    const newInstructions = instructions.filter((_, index) => index !== indexInstruction);
    handleChangeRecipe({ instructions: newInstructions });
  }

  // add the instruction
  const addInstruction = () => {
    const newInstructions = [...instructions, ''];
    handleChangeRecipe({ instructions: newInstructions });
  }

  // delete the ingredient
  const deleteIngredient = (indexIngredient) => {
    const newIngredients = ingredients.filter((_, index) => index !== indexIngredient);
    handleChangeRecipe({ ingredients: newIngredients });
  }

  // add the ingredient
  const addIngredient = () => {
    const newIngredients = [...ingredients, { id: uuidV4(), name: '', amount: '' }];
    handleChangeRecipe({ ingredients: newIngredients});
  }
  const classNames = scssConvert('container', styles, className)

  // close the edit panel
  const closeEditPanel = () => {
    handleSelectRecipe(null);
  }
  return (
    <div className={classNames}>
      <div className={scssConvert('container_header', styles)}>
        <span className={scssConvert('container_title', styles)}>Edit Panel</span>
        <Button className={buttonstyles['btn-danger']} onClick={closeEditPanel}>x</Button>
      </div>
      <div className={scssConvert('sample_panel', styles)}>
        <div className={scssConvert('panel_item', styles)}>
          <label>Name</label>
          <input
            type="text"
            id="edit_name"
            value={name}
            onChange={e => handleChangeRecipe({ name: e.target.value })} />
        </div>
        <div className={scssConvert('panel_item', styles)}>
          <label>Cooking Time</label>
          <input
            type="text"
            id="cook_time"
            value={cookTime}
            onChange={e => handleChangeRecipe({ cookTime: e.target.value })} />
        </div>
        <div className={scssConvert('panel_item', styles)}>
          <label>Servings</label>
          <input
            type="text"
            id="servings"
            value={servings}
            onChange={e => handleChangeRecipe({ servings: e.target.value })} />
        </div>
      </div>
      <div>
        {/* instructions */}
        <div className={scssConvert('instructions_panel', styles)}>
          <label className={scssConvert('title', styles)}>Instructions</label>
          {
            instructions.map((instruction, index) => {
              return (
                <div className={scssConvert('panel_item', styles)}>
                  <label
                    className={scssConvert('label', styles)}
                    key={index}
                  >{`step${index + 1}`}</label>
                  <input
                    id={id}
                    value={instruction}
                    onChange={(e) => {
                      const newInstruction = e.target.value;
                      const newInstructions = [...instructions.slice(0, index), newInstruction, ...instructions.slice(index + 1)];
                      handleChangeRecipe({ instructions: newInstructions });
                    }}></input>
                  <Button
                    className={buttonstyles['btn-danger']}
                    onClick={
                      () => deleteInstruction(index)
                    }
                  >x</Button>
                </div>
              )
            })
          }
          <div className={scssConvert('add', styles, 'panel_item')}>
            <Button onClick={addInstruction}>Add Instruction</Button>
          </div>

        </div>
        {/* ingredients */}
        <div className={scssConvert('ingredients_panel', styles)}>
          <label className={scssConvert('title', styles)}>Ingredients</label>
          <div className={scssConvert('panel_item', styles)}>
            <label>Name</label>
            <label>Quantity</label>
          </div>
          <div>
            {
              ingredients.map((Ingredient, index) => {
                return (
                  <div>
                    <div key={index} className={scssConvert('panel_item', styles)}>
                      <input value={Ingredient.name} onChange={(e) => {
                        const newIngredients = [...ingredients];
                        newIngredients[index].name = e.target.value;
                        handleChangeRecipe({ ingredients: newIngredients });
                      }}></input>
                      <input value={Ingredient.amount} onChange={(e) => {
                        const newIngredients = [...ingredients];
                        newIngredients[index].amount = e.target.value;
                        handleChangeRecipe({ ingredients: newIngredients });
                      }}></input>
                      <Button className={buttonstyles['btn-danger']} onClick={
                        () => deleteIngredient(index)
                      }>x</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={scssConvert('add', styles, 'panel_item')}>
            <Button onClick={addIngredient}>Add Ingredient</Button>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  )
}

export default EditPanel;