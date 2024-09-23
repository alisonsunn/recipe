import React from 'react';
import styles from './index.module.scss';
import buttonstyles from '@/components/Button/index.module.scss';
import { scssConvert } from '@/utils/scssConvert';
import Button from '@/components/Button';
import { Fragment } from 'react';
function EditPanel(props) {
  const { className, handleSelectRecipe, recipes, getSelectRecipe, handleEditRecipe, ...rest } = props;

  const selectRecipe = getSelectRecipe();
  const { id, name, cookTime, servings, instructions, ingredients } = selectRecipe;

  const handleChangeRecipe = (changeItem) => {
    console.log();
    handleEditRecipe(id, { ...selectRecipe, ...changeItem });
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
        <div className={scssConvert('instructions_panel', styles)}>
          <label className={scssConvert('title', styles)}>Instructions</label>
          {
            instructions.map((instruction, index) => {
              return (
                <div className={scssConvert('panel_item', styles)}>
                  <span key={index}>{`step${index + 1}`}</span>
                  <input id={id} value={instruction} onChange={(e) => {
                    const newInstruction = e.target.value;
                    const newInstructions = [...instructions.slice(0,index), newInstruction, ...instructions.slice(index + 1)];
                    handleChangeRecipe({ instructions: newInstructions });
                  }}></input>
                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default EditPanel;