import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './new-recipe-form';

class RecipeDetails extends Component {
	constructor(props) {
		super(props);

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit() {
			// also needs a name
			ReactDOM.render(<NewRecipeForm
				modifyRecipe={this.props.modifyRecipe}
				ingredients={this.props.ingredients}
				name={this.props.name} />,
				document.getElementById('new-container'));
	}

	handleDelete(event) {
		var recipeDetails = {
			title: this.props.name,
			ingredients: this.props.ingredients // might not be needed
		}
		this.props.deleteRecipe(recipeDetails);
	}

	render() {
		return (
			<div className="recipe-details">
				<h3>Ingredients</h3>
				<ul>
					{this.props.ingredients.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<div className='details-footer'>
					<button className="delete-btn" onClick={this.handleDelete}>Delete</button>
					<button className="edit-btn" onClick={this.handleEdit}>Edit</button>
				</div>
			</div>
		)
	}
}

export default RecipeDetails;
