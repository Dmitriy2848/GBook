import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type fetchAllBooksArgs = {
	query: string;
	startIndex?: number;
	maxResults?: number;
	orderBy?: 'relevance' | 'newest';
	category?: string;
};

const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://www.googleapis.com/books/v1/volumes'
	}),
	endpoints: (builder) => ({
		fetchAllBooks: builder.query<any, fetchAllBooksArgs>({
			query: ({
				query,
				startIndex = 0,
				maxResults = 30,
				orderBy = 'relevance',
				category
			}) => {
				let searchParam = `${query}`;
				if (category) {
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
		fetchBook: builder.query({
			query: (id: string) => ({
				url: `/${id}`,
				params: {
					key: import.meta.env.VITE_API_KEY
				}
			})
		})
	})
});

export const { useFetchAllBooksQuery, useFetchBookQuery } = booksApi;
export { booksApi };
