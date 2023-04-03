import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchBookQuery } from 'app/store/booksApi';

interface IParams {
	id: string;
}

const Book: FC = () => {
	const { id } = useParams<keyof IParams>() as IParams;
	const { data, isError, isLoading } = useFetchBookQuery(id);
	return (
		<div className='h-screen'>
			{isLoading && <div>loading</div>}
			{isError && <div>not valid id</div>}
			{data && (
				<img
					src={data.volumeInfo.imageLinks.medium}
					alt=''
				/>
			)}
		</div>
	);
};

export default Book;
