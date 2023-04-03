import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IBook } from 'app/store/IBook';

export type fetchAllBooksArgs = {
	query: string;
	startIndex?: number;
	maxResults?: number;
	orderBy?: 'relevance' | 'newest';
	category?: string;
};

interface IAllBooks {
	kind: string;
	totalItems: number;
	items: IBook[];
}

const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://www.googleapis.com/books/v1/volumes'
	}),
	endpoints: (builder) => ({
		fetchAllBooks: builder.query<IAllBooks, fetchAllBooksArgs>({
			query: ({
				query,
				startIndex = 0,
				maxResults = 30,
				orderBy = 'relevance',
				category
			}) => {
				let searchParam = `${query}`;
				if (category !== 'all') {
					searchParam += `+subject:${category}`;
				}

				return {
					url: '',
					params: {
						q: searchParam,
						startIndex,
						maxResults,
						orderBy,
						key: import.meta.env.VITE_API_KEY
					}
				};
			}
		}),
		fetchBook: builder.query<IBook, string>({
			query: (id) => ({
				url: `/${id}`,
				params: {
					key: import.meta.env.VITE_API_KEY
				}
			})
		})
	})
});

export const { useFetchAllBooksQuery, useFetchBookQuery } = booksApi;
export default booksApi;
