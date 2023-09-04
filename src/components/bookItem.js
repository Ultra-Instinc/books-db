import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import BookEdit from "./bookEdit";
import { useState } from "react";

const BookItem = ({ book, onDelete, onEdit }) => {
	const [showEdit, setShowEdit] = useState(false);
	const handleDelete = () => {
		onDelete(book.id);
	};
	const onSubmit = (title) => {
		setShowEdit(false);
		onEdit(title, book.id);
	};

	let content;
	if (showEdit) {
		content = (
			<div className=''>
				<BookEdit
					book={book}
					onEdit={onSubmit}
				/>
			</div>
		);
	} else {
		content = (
			<span className=' mt-10 text-4xl bg-gradient-to-r from-blue-500 to-emerald-500 bg-transparent text-transparent bg-clip-text'>
				{book.title}
			</span>
		);
	}

	return (
		<div className=' border-emerald-600 shadow-lg shadow-emerald-500 border-2  rounded-xl  w-auto h-auto min-w-[400px] flex flex-col items-center justify-start m-2 overflow-hidden'>
			<img
				src={`https://picsum.photos/seed/${book.id}/300/200`}
				alt='Books'
				className=' relative h[60%] w-[100%] hover:scale-105 duration-700'
			/>
			<AiFillEdit
				size={30}
				className=' hover:scale-150 duration-500 shadow-xl shadow-emerald-500 absolute translate-x-[150px]'
				onClick={() => setShowEdit(!showEdit)}
			/>
			<MdDeleteForever
				size={30}
				className='hover:scale-150 duration-500 shadow-xl shadow-emerald-500 absolute translate-x-[180px]'
				onClick={handleDelete}
			/>

			<div className=' p-5 relative flex flex-col text-4xl font-bold'>
				{content}
			</div>
		</div>
	);
};

export default BookItem;
