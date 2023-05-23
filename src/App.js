import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [dishData, setDishData] = useState([]);

   // Effectue une requête GET vers l'API MealDB pour rechercher des plats contenant "tomato" dans leur nom et affiche les
 
  useEffect(() => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
    .then((res) => console.log(res.data.meals))
  })

  return (
    <div className="app-container">
      <h1>Cooking Application with React</h1>
      {/* input pour la recherche  */}
      <input type="text" placeholder="Search by ingredient" />
      {/* container pour les plats */}
      <div className="dish-container">

      </div>
    </div>
  );
};

export default App;
