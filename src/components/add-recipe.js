import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './new-recipe-form';

class AddRecipe extends Component {


	constructor(props) {
		super(props);

		this.openRecipeForm = this.openRecipeForm.bind(this);
		this.keyCounter = 0;
	}

	openRecipeForm() {
		this.keyCounter++;
		ReactDOM.render(<NewRecipeForm key={this.keyCounter} addRecipe={this.props.addRecipe} />, document.getElementById('new-container'));
	}

	render() {
		return <button className="AddRecipe" onClick={this.openRecipeForm}>Add Recipe</button>
	}
}

export default AddRecipe;
