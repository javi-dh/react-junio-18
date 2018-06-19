import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Titular from './Titular';
import Frutas from './Frutas';
import Formulario from './Formulario';

class App extends Component {
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Titular titleH1="Lorem ipsum dolor sit amet" textP="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
				<Frutas />
				<Formulario />
			</div>
		);
	}
}

export default App;
