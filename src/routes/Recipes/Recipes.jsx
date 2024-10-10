import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../Recipes/Recipes.css'
import SearchInput from "../../components/SearchInput/SearchInput";

const Recipes = () => {

  const [recipes, setRecipes] = useState([])
 
  const handleFetch = async () => {
    try {
      const res = await fetch(
        "https:/www.themealdb.com/api/json/v1/1/filter.php?a=chinese"
      );
      const data = await res.json();
      setRecipes(data.meals)
      
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    handleFetch();
  }, []);


  return (
    <div className="container-recipes">
      <SearchInput  />

      <div className="recipes">
        {recipes && recipes.map((item)=>(
            <div className="recipe-card" key={item.idMeal}>
              <Link  to={`/receitas/recipe/${item.idMeal}`}>
                <img className="recipe-img" src={item.strMealThumb} alt="" />
                <h3 className="recipe-h3">{item.strMeal}</h3>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
