import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../RecipeDetails/RecipeDetails.css";

const RecipeDetails = () => {
  let { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="single-recipe">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h1>{recipe.strMeal}</h1>
      <div className="hashtags">
        <p>
          <strong>#{recipe.strIngredient1}</strong>
        </p>
        <p>
          <strong>#{recipe.strIngredient2}</strong>
        </p>
        <p>
          <strong>#{recipe.strIngredient3}</strong>
        </p>
        <p>
          <strong>#{recipe.strIngredient4}</strong>
        </p>
        <p>
          <strong>#{recipe.strIngredient5}</strong>
        </p>
      </div>
      <div>
        <h3>Instructions:</h3>
        <p className="description">{recipe.strInstructions}</p>
      </div>
      <Link to={recipe.strYoutube} target="blank">
      <div className="play-img">
        <img src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-play-video-icon-graphic-design-template-vector-png-image_530837.jpg" alt="imagem de play" />
        <strong>Whatch the instructions!</strong>
        </div>
      </Link>
    </main>
  );
};

export default RecipeDetails;
