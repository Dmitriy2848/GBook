import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IBook } from 'app/store/IBook';

type BookProps = { info: IBook };

const Book: FC<BookProps> = ({ info }) => {
	return (
		<div className='w-48 border rounded-xl hover:shadow-md px-3 py-2.5'>
			<Link
				to={info.id}
				className='block w-full h-full'
			>
				<div className='h-[200px] flex justify-center'>
					<img
						src={info.volumeInfo.imageLinks?.thumbnail}
						className=''
						alt=''
					/>
				</div>

				<div className='mt-4'>
					<span className='text-sm text-gray-600'>
						{info.volumeInfo?.categories}
					</span>
					<h6 className='font-bold text-md text-gray-800 break-words'>
						{info.volumeInfo?.title}
					</h6>
					<span className='text-sm text-gray-600'>
						{info.volumeInfo.authors}
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Book;
