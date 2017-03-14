import React, { Component } from 'react';
import RecipeListing from './recipe-listing';

class IndexView extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		// var localStorageTest = [{ key: "1", name: 'Lala' }];
		if (this.props.recipeBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ul id="IndexViewList">
						{this.props.recipeBank.map((item) =>
							// <li>{item.name}</li>
							<RecipeListing
								modifyRecipe={this.props.modifyRecipe}
								deleteRecipe={this.props.deleteRecipe}
								key={item.name}
								name={item.name}
								ingredients={item.ingredients} />
						)}
					</ul>
				</div>
			)
		}

	}
}

export default IndexView;
