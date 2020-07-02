import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl';
import * as actionCreatorBook from '../../Actions/actionCreatorBook';

class BookLibrary extends Component {
	componentDidMount() {
		this.props.actionCreatorBook.fetchBook();
	}

	handleBook = (event) => {
		console.log(event.target.id);
		this.props.actionCreatorBook.addBook(this.props.books, this.props.addedBooks, event);
	};

	render() {
		// console.log(this.props.books);
		// console.log(this.props.addedBooks);
		return (
			<Grid>
				{this.props.books.map((item) => {
					return (
						<Cell col={3} key={item.id} style={{ display: 'flex', flexWrap: 'wrap' }}>
							<Card>
								<CardTitle
									style={{
										color: 'teal',
										height: '400px',
										background: `url(${item.coverImage}) left top / cover`,
									}}
								>
									{item.title}
								</CardTitle>
								<CardText>
									{/* <strong>{item.bookName}</strong> */}
									<Grid style={{ display: 'flex', flexWrap: 'nowrap' }}>
										<Cell col={4}>
											<label style={{ color: 'black', fontWeight: 'bold' }}>Author</label>
											<label style={{ color: 'black', fontWeight: 'bold' }}>Price</label>
											<label style={{ color: 'black', fontWeight: 'bold' }}>Category</label>
											<label style={{ color: 'black', fontWeight: 'bold' }}>Rating</label>
										</Cell>
										<Cell col={8}>
											<label>{item.author}</label>
											<br />
											<label>{item.price} Rs</label>
											<br />
											<label>{item.category}</label>
											<br />
											<label>{item.rating}</label>
										</Cell>
									</Grid>
								</CardText>
								<CardActions style={{ textAlign: 'center' }}>
									<Button
										style={{ background: 'teal', color: 'white', borderRadius: '5px' }}
										id={item.id}
										onClick={this.handleBook}
									>
										Add Book
									</Button>
								</CardActions>
							</Card>
						</Cell>
					);
				})}
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.bookReducer.books,
		addedBooks: state.bookReducer.addedBooks,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actionCreatorBook: bindActionCreators(actionCreatorBook, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookLibrary);
