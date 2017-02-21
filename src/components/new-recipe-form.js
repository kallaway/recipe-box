import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewRecipeForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: '',
			textareaText: ''
		}
	}

	closeNewRecipeForm() {
		ReactDOM.unmountComponentAtNode(document.getElementById('new-container'));
	}

	render() {
		return (
			<div className="new-recipe-form">
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
					<div id="new-recipe-footer">
						<p>Add a Recipe</p>
					</div>
				</div>
			)
		}
	}

export default NewRecipeForm;
