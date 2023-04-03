import { FC } from 'react';

import { useFetchAllBooksQuery } from 'app/store/booksApi';
import { useAppSelector } from 'app/store/hooks';

import Book from 'widgets/BookList/ui/Book';

// todo сделать плейсхолдер для книги
// todo написать ui и мб стоит делать которкий вывод из апи
// todo написать в ответе о том, что можно было стелать строгий поиск

const BookList: FC = () => {
	const query = 'a';

	const { category, startIndex, maxResults, orderBy } = useAppSelector(
		(state) => state.settings
	);

	// todo поработай над интерфесом
	const { data, isError, isLoading } = useFetchAllBooksQuery({
		query,
		startIndex,
		maxResults,
		orderBy,
		category
	});

	return (
		<div className='w-full'>
			{isLoading && <div>loading</div>}
			{isError && <div>error</div>}
			{data && (
				<>
					<div className='mx-auto text-sm text-gray-600 mx-auto w-fit my-4'>
						Результатов по запросу: {data.totalItems}
					</div>
					<div className='flex flex-wrap justify-center gap-6 mx-[10%] my-5'>
						{data.items.map((book) => (
							<Book
								key={book.id}
								info={book}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default BookList;
