import { useState } from "react";

const BookAddingForm = ({ onCreate }) => {
	const [title, setTitle] = useState("");
	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreate(title);
		setTitle("");
	};

	return (
		<div className=' text-slate-300 bottom-0 h-[fit]   w-full pb-4 bg-black border-t-[1px] border-emerald-600'>
			<div className='flex flex-col items-center'>
				<h1 className=' py-5 text-4xl font-bold hidden lg:block bg-gradient-to-tr from-green-500 to-blue-500 bg-clip-text text-transparent'>
					Add book to the reading list
				</h1>
				<form
					onSubmit={handleSubmit}
					action=''
					className='flex flex-col sm:flex-row justify-around w-full text-center items-center px-3 gap-3'>
					<label
						htmlFor=''
						className='  text-4xl  font-bold'>
						<span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 px-1'>
							Enter book title
						</span>{" "}
					</label>
					<input
						required
						type='text'
						value={title}
						onChange={handleChange}
						className='p-2 bg-gradient-to-r from-blue-600/50 to-emerald-600/50 w-2/3 rounded-lg text-gray-800 text-2xl font-extrabold focus:ring-4 focus:ring-emerald-500 mx-2 md:mx-4 lg:mx-6 focus:scale-105 duration-500'
					/>
					<button className='bg-gradient-to-r from-blue-600 to-emerald-600 w-1/3 px-6 py-2 rounded-lg shadow-2xl shadow-emerald-600 hover:bg-gradient-to-tl active:ring-4 active:ring-blue-600 text-2xl font-bold  active:scale-90 hover:scale-105   duration-200 '>
						Add Book
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookAddingForm;
