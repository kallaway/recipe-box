import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import IndexView from './components/index-view';
import AddRecipe from './components/add-recipe';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: localStorageTest };
	}

	deleteRecipe() {

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
				<IndexView recipeBank={this.state.recipes}/>
				<AddRecipe />
      </div>
    );
  }
}

// <div className="App-header">
// 	<img src={logo} className="App-logo" alt="logo" />
// 	<h2>Recipe Box App</h2>
// </div>


var localStorageTest = localStorage;

localStorageTest = [
  {
    name: 'Pumpkin Pie',
    ingredients: [
      'Pumpkin Puree',
      'Sweetened Condensed Milk',
      'Eggs',
      'Pumpkin Pie Spice',
      'Pie Crust'
    ]
  },
  {
    name: 'Spaghetti',
    ingredients: [
      'Noodles',
      'Tomato Sauce',
      '(Optional) Meatballs'
    ]
  },
  {
    name: 'Onion Pie',
    ingredients: [
      'Onion',
      'Pie Crust',
      'Sounds Yummy right?'
    ]
  }
];

export default App;
