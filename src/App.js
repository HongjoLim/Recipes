import React from 'react';
import {useState, useEffect} from 'react';
import Recipe from './Recipe';

import './App.css';
import SearchIcon from './search.png';

const API_URL = 'http://www.themealdb.com/api/json/v1/1/search.php'
const App = () => {

    const[recipes, setRecipes] = useState([]);
    const searchRecipes = async (title) => {
        fetch(`${API_URL}?s=${title}`).then((res) => { setRecipes(res.json());})
        .catch((err) => console.log(err));
    }

    useEffect(() => {searchRecipes('Arrabiata');}, []);

    return (
        <div className="app">
            <h1>Recipes</h1>
            <div className="search">
                <input placeholder="Search for recipes" onChange={() => {}}></input>
                <img src={SearchIcon} alt="search" onClick={() => {}}/>
            </div>

        </div>
    );
}

export default App;