import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-mdl';
import * as actionCreatorBook from '../../Actions/actionCreatorBook';

class BookCollections extends Component {
	handleRemove = (event) => {
		// console.log(event.target.id);
		this.props.actionCreatorBook.removeBook(this.props.addedBooks, event);
	};

	handleView = (event) => {
		// console.log(event.target.id);
		this.props.actionCreatorBook.viewBook(this.props.addedBooks, event);
	};

	render() {
		const productItem = this.props.addedBooks;
		// console.log(productItem);
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<table className="table table-striped">
						<thead style={{ background: 'teal', color: 'white' }}>
							<tr>
								<th>ID</th>
								<th>Book Name</th>
								<th>Author</th>
								<th>Actions</th>
							</tr>
						</thead>
						{productItem.map((item) => {
							return (
								<tbody key={item.id}>
									<tr>
										<td>
											<strong>{item.id}</strong>
										</td>
										<td>
											<strong>{item.title}</strong>
										</td>
										<td>
											<strong>{item.author}</strong>
										</td>
										<td>
											<a href={this.props.bookURL} rel="noopener noreferrer" target="_blank">
												<Button
													style={{
														background: 'teal',
														color: 'white',
														borderRadius: '5px',
														marginRight: '10px',
													}}
													id={item.id}
													onClick={this.handleView}
												>
													View
												</Button>
											</a>
											<Button
												style={{
													background: 'red',
													color: 'white',
													borderRadius: '5px',
													marginRight: '10px',
												}}
												id={item.id}
												onClick={this.handleRemove}
											>
												Remove
											</Button>
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		addedBooks: state.bookReducer.addedBooks,
		bookURL: state.bookReducer.bookURL,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actionCreatorBook: bindActionCreators(actionCreatorBook, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCollections);
