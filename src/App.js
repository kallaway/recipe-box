import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import IndexView from './components/index-view';
import AddRecipe from './components/add-recipe';

import originalRecipes from './data/original-recipes';

var localStorageTest = originalRecipes;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: '' };

		this.addRecipe = this.addRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
	}

	componentWillMount() {
		this.setState({
			// recipes: localStorage.getItem('recipes')
			recipes: localStorageTest
		})
		console.log("component Will Mount runs for app, and recipes is:");
		console.log(this.state.recipes);
		console.log(localStorage.getItem('recipes'));
	}

	componentWillUnmount() {
		// localStorage.
		localStorage.setItem('recipes', this.state.recipes);
		console.log("component Will UNMount runs for app, and recipes is:");
		console.log(this.state.recipes);
	}

	deleteRecipe(recipeInfo) {
		this.setState({
			recipes: this.state.recipes.filter((recipe) => {
				return recipe.name !== recipeInfo.title;
			})
		});


		// how to take out an item from an array - filter?
	}

	addRecipe(recipeInfo) {
		var updatedRecipes = this.state.recipes;
		updatedRecipes.push({
	    name: recipeInfo.title,
	    ingredients: recipeInfo.ingredients
	  });

		this.setState({
			recipes: updatedRecipes
		})

		// After it adds a recipe it should also close the form down
	}

  render() {
    return (
      <div className="App">
				<div id="new-container"></div>
				<div className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h2>Recipe Box App</h2>
			</div>
				<div id="root"></div>
				<IndexView recipeBank={this.state.recipes} deleteRecipe={this.deleteRecipe} />
				<AddRecipe addRecipe={this.addRecipe} />
      </div>
    );
  }
}

// <div className="App-header">
// 	<img src={logo} className="App-logo" alt="logo" />
// 	<h2>Recipe Box App</h2>
// </div>


// var localStorageTest = localStorage;

// var localStorageTest = [
//   {
//     name: 'Pumpkin Pie',
//     ingredients: [
//       'Pumpkin Puree',
//       'Sweetened Condensed Milk',
//       'Eggs',
//       'Pumpkin Pie Spice',
//       'Pie Crust'
//     ]
//   },
//   {
//     name: 'Spaghetti',
//     ingredients: [
//       'Noodles',
//       'Tomato Sauce',
//       '(Optional) Meatballs'
//     ]
//   },
//   {
//     name: 'Onion Pie',
//     ingredients: [
//       'Onion',
//       'Pie Crust',
//       'Sounds Yummy right?'
//     ]
//   }
// ];

localStorage.setItem('recipes', localStorageTest);

export default App;
