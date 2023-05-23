import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [dishesData, setDishesData] = useState([]);

  // Effectue une requête GET vers l'API MealDB pour rechercher des plats contenant "tomato" dans leur nom et met à jour les données des plats
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setDishesData(res.data.meals)) // Met à jour les données des plats avec les résultats de la requête
      .catch((error) => console.error(error)); // Gère les erreurs en les affichant sur la console
  }, []);

  return (
    <div className="app-container">
      <h1>Cooking Application with React</h1>
      {/* input pour la recherche */}
      <input type="text" placeholder="Search by ingredient" />
      {/* container pour les plats */}
      <div className="dish-container">
        {dishesData.map((dish) => (
          <h2 key={dish.idMeal}>{dish.strMeal}</h2> // Affiche les noms des plats en utilisant les données récupérées
        ))}
      </div>
    </div>
  );
};

export default App;
