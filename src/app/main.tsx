import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'app/index.css';
import store from 'app/store/store';

import Book from 'pages/Book/ui/Book';

import BookList from 'widgets/BookList/ui/BookList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BookList />
	},
	{
		path: '/:id',
		element: <Book />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
