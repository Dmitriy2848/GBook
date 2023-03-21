import 'app/App.css';
import { fetchAllBooksArgs, useFetchAllBooksQuery } from 'app/store/booksApi';

function App() {
	const { data, isLoading, isError } = useFetchAllBooksQuery<fetchAllBooksArgs>(
		{ query: 'yessir', category: 'poetry' }
	);
	console.log(data);
	return <div>app</div>;
}

export default App;
