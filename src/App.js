import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import IndexView from './components/index-view';
import AddRecipe from './components/add-recipe';

import originalRecipes from './data/original-recipes';

// var localStorageTest = originalRecipes;

class App extends Component {
	constructor(props) {
		super(props);
		if (!localStorage.getItem('recipes')) {
			localStorage.setItem('recipes', JSON.stringify(originalRecipes));
			this.state = { recipes: originalRecipes };
		} else {
			this.state = { recipes: JSON.parse(localStorage.getItem('recipes')) };
		}

		this.addRecipe = this.addRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.modifyRecipe = this.modifyRecipe.bind(this);
	}

	componentWillUnmount() {
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
	}

	deleteRecipe(recipeInfo) {
		this.setState({
			recipes: this.state.recipes.filter((recipe) => {
				return recipe.name !== recipeInfo.title;
			})

		});

		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
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
		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
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

		localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
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

export default App;
