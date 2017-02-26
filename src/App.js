import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import IndexView from './components/index-view';
import AddRecipe from './components/add-recipe';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { recipes: '' };
	}

	// componentWillMount() {
	// 	this.setState({
	// 		recipes: localStorage.getItem('recipes')
	// 	})
	// 	console.log("component Will Mount runs for app, and recipes is:");
	// 	console.log(this.state.recipes);
	// 	console.log(localStorage.getItem('recipes'));
	// }

	componentWillUnmount() {
		localStorage.
		localStorage.setItem('recipes', this.state.recipes);
		console.log("component Will UNMount runs for app, and recipes is:");
		console.log(this.state.recipes);
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


// var localStorageTest = localStorage;

var localStorageTest = [
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

localStorage.setItem('recipes', localStorageTest);

export default App;
