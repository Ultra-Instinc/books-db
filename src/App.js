import { useState, useEffect, useCallback } from "react";
import BookAddingForm from "./components/bookAddingForm";
import BookList from "./components/bookList";
import axios from "axios";

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = useCallback(async () => {
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	}, []);

	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);

	const updateBookById = async (title, id) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title: title,
		});
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}
			return book;
		});
		setBooks(updatedBooks);
	};

	const deleteBookById = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);
		const updatedBooks = books.filter((book) => {
			return book.id !== id;
		});
		setBooks(updatedBooks);
	};

	const handleBookAdd = async (title) => {
		const response = await axios.post("http://localhost:3001/books", {
			title: title,
		});
		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
	};

	return (
		<div className=' bg-transparent w-full min-h-screen'>
			<h1 className='  bg-gradient-to-tr from-green-500 to-blue-500 p-3 text-5xl font-bold text-center items-center justify-center  text-transparent bg-clip-text border-b-[1px] border-emerald-500'>
				Reading List
			</h1>
			<BookList
				books={books}
				onDelete={deleteBookById}
				onEdit={updateBookById}
			/>
			<div className='fixed bottom-0 left-0 w-full '>
				<BookAddingForm onCreate={handleBookAdd} />
			</div>
		</div>
	);
}

export default App;
