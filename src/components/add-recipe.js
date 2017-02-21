import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './new-recipe-form';

class AddRecipe extends Component {
	constructor() {
		super();
	}

	openRecipeForm() {
		ReactDOM.render(<NewRecipeForm  />, document.getElementById('new-container'));
	}

	render() {
		return <button className="AddRecipe" onClick={this.openRecipeForm}>Add Recipe</button>
	}
}

export default AddRecipe;
