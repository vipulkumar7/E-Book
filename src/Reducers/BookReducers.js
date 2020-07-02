import { FETCH_BOOK, ADD_BOOK, REMOVE_BOOK, READ_BOOK } from '../Actions/ActionTypes';

const initialState = {
	books: [],
	addedBooks: [],
	bookURL: '',
};

const BookReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOK:
			return {
				...state,
				books: action.payload,
			};

		case ADD_BOOK:
			console.log(state.addedBooks, 'added book list');
			return {
				...state,
				addedBooks: [...state.addedBooks, ...action.payload],
			};

		case REMOVE_BOOK:
			return {
				...state,
				addedBooks: action.payload,
			};

		case READ_BOOK:
			return {
				...state,
				bookURL: action.payload,
			};

		default:
			return state;
	}
};

export default BookReducer;
