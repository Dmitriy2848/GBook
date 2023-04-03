export interface ISettings {
	[key: string]: any;
	query: string;
	startIndex: number;
	maxResults: number;
	orderBy: 'relevance' | 'newest';
	category: Categories;
}

type Categories =
	| 'all'
	| 'art'
	| 'biography'
	| 'computers'
	| 'history'
	| 'medical'
	| 'poetry';
