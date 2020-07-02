import React, { Component } from 'react';
import HomePic from '../UI/Images/E-Book.jpg';

export default class Home extends Component {
	render() {
		return (
			<div>
				<img src={HomePic} style={{ height: '571px', width: '1366px' }} alt="E_Book" />
			</div>
		);
	}
}
