import BookItem from "./bookItem";
const BookList = ({ books, onDelete, onEdit }) => {
	const iteratedBooks = books.map((book) => {
		return (
			<div
				className='mx-auto'
				key={book.id}>
				<BookItem
					book={book}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			</div>
		);
	});

	return (
		<div className=' grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pb-[300px] sm:pb-[180px] text-emerald-500 text-2xl  w-full '>
			{iteratedBooks}
		</div>
	);
};

export default BookList;
