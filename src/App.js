import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Card from './components/Card';

const App = () => {
  const [dishesData, setDishesData] = useState([]);
  const searchInputRef = useRef(null);

  // Effectue une requête GET vers l'API MealDB pour rechercher des plats contenant le terme de recherche dans leur nom et met à jour les données des plats
  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value;
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm)
      .then((res) => setDishesData(res.data.meals)) // Met à jour les données des plats avec les résultats de la requête
      .catch((error) => console.error(error)); // Gère les erreurs en les affichant sur la console
  };

  return (
    <div className="app-container">
      <h1>Cooking Application with React</h1>
      {/* input pour la recherche */}
      <input
        type="text"
        placeholder="Search by ingredient"
        ref={searchInputRef}
      />
      {/* Bouton pour déclencher la recherche */}
      <button onClick={handleSearch}>Search</button>
      {/* container pour les plats */}
      <div className="dish-container">
        {/* Boucle sur les données des plats pour afficher chaque plat */}
        {dishesData &&
          // Afficher les cards de 0 à 24 
          dishesData.slice(0, 24).map((dish) => (
            // Rendu d'un composant "Card" pour afficher les détails d'un plat
            // La clé unique "key" est définie sur "dish.idMeal" pour optimiser le rendu des éléments
            // Les données du plat sont passées au composant "Card" via la prop "dish"
            <Card key={dish.idMeal} dish={dish} />
          ))}
      </div>
    </div>
  );
};

export default App;
