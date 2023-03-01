import React from 'react';

const Recipe = ({recipe}) => {
    return (
        <div className="recipe">
            <div>
                <p></p>
            </div>
            <div>
                <img src={recipe['strMealThumb']} alt={recipe['strMeal']} />
            </div>
            <div>
                <h3>{recipe['strMeal']}</h3>
                <span>{recipe['strCategory']} | {recipe['strArea']}</span>
            </div>
        </div>
    )
}

export default Recipe;