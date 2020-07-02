import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Main from '../UI/Main';

export default class NavBar extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Header
						style={{ background: 'teal' }}
						title={
							<NavLink
								style={{
									color: 'white',
									fontSize: '20px',
									fontWeight: 'bold',
								}}
								to="/"
							>
								E-Book
							</NavLink>
						}
					>
						<Navigation>
							<NavLink
								style={{
									color: 'white',
									fontSize: '20px',
									fontWeight: 'bold',
								}}
								to="/BookLibrary"
							>
								Book Library
							</NavLink>
							<NavLink
								style={{
									color: 'white',
									fontSize: '20px',
									fontWeight: 'bold',
								}}
								to="/BookCollections"
							>
								Book Collections
							</NavLink>
						</Navigation>
					</Header>
					<Drawer
						style={{ background: 'teal' }}
						title={
							<NavLink
								style={{
									color: 'white',
									fontSize: '20px',
									fontWeight: 'bold',
								}}
								to="/"
							>
								E-Book
							</NavLink>
						}
					>
						<Navigation>
							<NavLink
								style={{
									color: 'white',
									fontSize: '15px',
									fontWeight: 'bold',
								}}
								to="/BookLibrary"
							>
								Book Library
							</NavLink>
							<NavLink
								style={{
									color: 'white',
									fontSize: '15px',
									fontWeight: 'bold',
								}}
								to="/BookCollections"
							>
								Book Collections
							</NavLink>
						</Navigation>
					</Drawer>
					<Content>
						<Main />
					</Content>
				</Layout>
			</BrowserRouter>
		);
	}
}
