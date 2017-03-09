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
		this.modifyRecipe = this.modifyRecipe.bind(this);
	}

	componentWillMount() {
		// check if localStorage already has an item 'recipes'
		// and if that contains at least one recipe?
		// if so, set the state to that
		var shouldStorageRecipesLoad = JSON.parse(localStorage.getItem('recipes')) ? true : false; // can be changed

		if (shouldStorageRecipesLoad) {
			this.setState({
				recipes: JSON.parse(localStorage.getItem('recipes'))
			});
		} else {
			this.setState({
				recipes: localStorageTest
			})
		}

		// Found out that localStorage only supports strings
		// now I can fix the rest of the app

		// this.setState({
		// 	// recipes: localStorage.getItem('recipes')
		// 	recipes: localStorageTest
		// })
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

	modifyRecipe(recipeInfo, nameBeforeEdit) {
		// var updatedRecipes = this.state.recipes;
		this.setState({
			recipes: this.state.recipes.map((recipe) => {
				if (recipe.name === nameBeforeEdit) {
					return {
						name: recipeInfo.title,
						ingredients: recipeInfo.ingredients
					}
				} else {
					return recipe;
				}
			})
		});
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
				<IndexView
					recipeBank={this.state.recipes}
					modifyRecipe={this.modifyRecipe}
					deleteRecipe={this.deleteRecipe} />
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

// var localStorageTest2 = {
//   1: {
//     name: 'Pumpkin Pie',
//     ingredients: [
//       'Pumpkin Puree',
//       'Sweetened Condensed Milk',
//       'Eggs',
//       'Pumpkin Pie Spice',
//       'Pie Crust'
//     ]
//   },
//   2: {
//     name: 'Spaghetti',
//     ingredients: [
//       'Noodles',
//       'Tomato Sauce',
//       '(Optional) Meatballs'
//     ]
//   },
//   3: {
//     name: 'Onion Pie',
//     ingredients: [
//       'Onion',
//       'Pie Crust',
//       'Sounds Yummy right?'
//     ]
//   }
// };

localStorage.setItem('recipes', JSON.stringify(localStorageTest));

export default App;
