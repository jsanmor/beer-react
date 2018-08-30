import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem';

const IngredientsList = ({ ingredients, title, availableCondition, availableField, onclick }) => {
    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>{title}</h4></li>
            {ingredients.map(ingredient => {
                var disable = false;
                if (availableCondition !== undefined &&
                    (availableCondition !== ingredient[availableField]))
                    disable = true;
                return (
                    <ListItem
                        key={ingredient.id}
                        {...ingredient}
                        disable={disable}
                        onClick={() => { onclick(ingredient.id) }}
                    />
                )
            }
            )}
        </ul>
    )
}

IngredientsList.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired,
    availableCondition: PropTypes.string,
    availableField: PropTypes.string
}



export default (IngredientsList)
