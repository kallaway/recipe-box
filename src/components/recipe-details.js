import React, { Component } from 'react';
import ReactDOM from 'react';
import NewRecipeForm from './new-recipe-form';

class RecipeDetails extends Component {
	constructor(props) {
		super(props);

		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit() {
			// also needs a name
			ReactDOM.render(<NewRecipeForm details={this.props.ingredients} />, document.getElementById('new-container'));
	}

	handleDelete() {

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
