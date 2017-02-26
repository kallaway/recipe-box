import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewRecipeForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
			textareaText: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	closeNewRecipeForm() {
		ReactDOM.unmountComponentAtNode(document.getElementById('new-container'));
	}

	handleSubmit(event) {
		event.preventDefault(); // making sure it doesn't submit right away
		console.log("Handle Submit runs");
		console.log("EVENT");
		console.log(event);
		// Change local storage to the file that was submitted.

		// use a callback function?
		localStorage.push({
			title: this.state.inputText,
			ingredients: this.getIngredientsFromString(this.state.textareaText)
		});
	}

	getIngredientsFromString(str) {
		return str.split(",").map(ingredient => ingredient.trim());
	}

	render() {
		return (
			<form className="new-recipe-form" onSubmit={this.handleSubmit}>
				<div id="new-recipe-header">
					<p>Add a Recipe</p>
					<i className="fa fa-times close-form" aria-hidden="true" onClick={this.closeNewRecipeForm}></i>
				</div>
				<div>
					<p>Recipe</p>
					<input type="text"
						placeholder="Recipe Name"
						value={this.state.inputText}
						onChange={(event) => this.setState({ inputText: event.target.value })} />
					</div>
					<div>
						<p>Ingredients</p>
						<textarea
							placeholder="Enter ingredients, Separated, By commas"
							value={this.state.textareaText}
							onChange={(event) => this.setState({ textareaText: event.target.value })}></textarea>
					</div>
					<div className="new-recipe-footer">
						<button type="submit" className="add-recipe-button">Add a Recipe</button>
						<button className="close-form-button">Close</button>
					</div>
				</form>
			)
		}
	}

export default NewRecipeForm;
