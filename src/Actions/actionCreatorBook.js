import { FETCH_BOOK, ADD_BOOK, REMOVE_BOOK, READ_BOOK } from './ActionTypes';

export const fetchBook = () => (dispatch) => {
	fetch('http://localhost:1000/books')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			dispatch({ type: FETCH_BOOK, payload: data });
		});
};

export const addBook = (books, addedBooks, event) => (dispatch) => {
	// console.log(books);
	let currentId = event.target.id;
	// console.log(currentId);

	let flag = false;
	addedBooks.forEach((element) => {
		if (element.id === currentId) {
			flag = true;
		}
	});
	if (!flag) {
		const currentBook = books.filter((book) => book.id === currentId);
		// console.log(currentBook);
		dispatch({ type: ADD_BOOK, payload: currentBook });
	} else {
		alert('This book is alredy added!');
	}
};

export const removeBook = (books, event) => (dispatch) => {
	// console.log(books);
	let currentId = event.target.id;
	// console.log(currentId);
	const currentBook = books.filter((book) => book.id !== currentId);
	// console.log(currentBook);
	dispatch({ type: REMOVE_BOOK, payload: currentBook });
};

export const viewBook = (books, event) => (dispatch) => {
	let currentId = event.target.id;
	const currentBook = books.filter((book) => book.id === currentId);
	// console.log(currentBook);
	let externalBookURL = currentBook[0].url;
	// console.log(externalBookURL);
	dispatch({ type: READ_BOOK, payload: externalBookURL });
};
