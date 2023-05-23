import React from 'react';

const Card = ( { dish }) => {

    return (
        <div className="dish-card">
            {/* Affiche les noms des plats en utilisant les données récupérées */}
            <h2 >{dish.strMeal}</h2> 

            {/* Affiche l'origine du plat en utilisant la propriété "strArea" de l'objet "dish"
            La valeur de "strArea" représente la région d'origine du plat */}

            <p className="origin">Origin : {dish.strArea}</p>

            {/* Affiche une image du plat en utilisant la propriété "strMealThumb" de l'objet "dish"
            La valeur de "strMealThumb" est l'URL de l'image du plat
            L'attribut "alt" de l'image est défini comme "photo de [nom du plat]" pour une alternative textuelle */}

            <img src={dish.strMealThumb} alt={"photo de " + dish.strMeal} />

            <p className="instruction">{dish.strInstructions}</p>
        </div>
    );
};

export default Card;