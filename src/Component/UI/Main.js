import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookLibrary from './BookLibrary';
import BookCollections from './BookCollections';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/BookLibrary" component={BookLibrary} />
				<Route path="/BookCollections" component={BookCollections} />
			</Switch>
		);
	}
}
