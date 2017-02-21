import React, { Component } from 'react';
import RecipeListing from './recipe-listing';

class IndexView extends Component {

	render() {
		var localStorageTest = [{ key: "1", name: 'Lala' }];

		return (
			<div className="IndexView">
				<ul id="IndexViewList">
					{this.props.recipeBank.map((item) =>
						// <li>{item.name}</li>
						<RecipeListing key={item.name} name={item.name} ingredients={item.ingredients} />

					)}
				</ul>
			</div>
		)
	}
}

export default IndexView;
