import React from 'react';

const Card = ( { dish }) => {

    return (
        <div className="dish-card">
            <h2 >{dish.strMeal}</h2> // Affiche les noms des plats en utilisant les données récupérées
        </div>
    );
};

export default Card;