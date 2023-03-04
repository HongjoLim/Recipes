import React from 'react';
import {useState, useEffect} from 'react';
import RecipeCard from './Recipe';
import sample from './sample.json';
import './App.css';
import SearchIcon from './search.png';

//const API_URL = 'http://www.themealdb.com/api/json/v1/1/search.php'
const App = () => {
    const data = sample;
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const searchRecipes = (term) => {
        const filtered = data.filter(x => x.strMeal.toLowerCase().includes(term.trim().toLowerCase()));
        setRecipes(filtered);
    }

    useEffect(() => {searchRecipes("");}, []);

    return (
        <div className="app">
            <h1>Recipes</h1>
            <div className="search">
                <input placeholder="Search for recipes" onChange={(e) => { setSearchTerm(e.target.value)}}></input>
                <img src={SearchIcon} alt="search" onClick={ (e) => { searchRecipes(searchTerm)} }/>

            </div>
            <div className="container">
            {recipes.map((r) => (
                <RecipeCard recipe={r} />
            ))}
            </div>

        </div>
    );
}

export default App;