import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../SearchInput/SearchInput.css'

const SearchInput = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!ingredient) {
        return;
      } else {
        const res = await fetch(
          `http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await res.json();
        setRecipes(data.meals);
        setIngredient("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write an ingredient, EX: potato or bacon!"
          className="inputElement"
          value={ingredient}
          onChange={(e) => {
            setIngredient(e.target.value);
          }}
        />
        <button className="btn">Search</button>
      </form>
      <div className="container-recipes">
        {recipes === 0 && <p className="warning">Loading recipes...</p>}
        <div className="recipes">
          {recipes &&
            recipes.map((item) => (
              <div className="recipe-card" key={item.idMeal}>
                <Link to={`/recipe/${item.idMeal}`}>
                  <img src={item.strMealThumb} alt={item.strMeal} />
                  <h3>{item.strMeal}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchInput;
