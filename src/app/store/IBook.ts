export interface IBook {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
	userInfo: UserInfo;
	saleInfo: SaleInfo;
	accessInfo: AccessInfo;
	searchInfo: SearchInfo;
}

interface VolumeInfo {
	title: string;
	subtitle: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	industryIdentifiers: IndustryIdentifier[];
	pageCount: number;
	dimensions: Dimensions;
	printType: string;
	mainCategory: string;
	categories: string[];
	averageRating: number;
	ratingsCount: string;
	contentVersion: string;
	imageLinks: ImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
}
interface IndustryIdentifier {
	type: string;
	identifier: string;
}
interface Dimensions {
	height: string;
	width: string;
	thickness: string;
}
interface ImageLinks {
	smallThumbnail: string;
	thumbnail: string;
	small: string;
	medium: string;
	large: string;
	extraLarge: string;
}

interface UserInfo {
	review: string;
	readingPosition: string;
	isPurchased: boolean;
	isPreordered: boolean;
	updated: string;
}

interface SaleInfo {
	country: string;
	saleability: string;
	onSaleDate: string;
	isEbook: boolean;
	listPrice: Price;
	retailPrice: Price;
	buyLink: string;
}
interface Price {
	amount: number;
	currencyCode: string;
}

interface AccessInfo {
	country: string;
	viewability: string;
	embeddable: string;
	publicDomain: string;
	textToSpeechPermission: string;
	epub: Epub;
	pdf: PDF;
	webReaderLink: string;
	accessViewStatus: string;
	downloadAccess: DownloadAccess;
}
interface Epub {
	isAvailable: string;
	downloadLink: string;
	acsTokenLink: string;
}
interface PDF {
	isAvailable: boolean;
	downloadLink: string;
	acsTokenLink: string;
}
interface DownloadAccess {
	kind: string;
	volumeId: string;
	restricted: boolean;
	deviceAllowed: boolean;
	justAcquired: boolean;
	maxDownloadDevices: number;
	downloadsAcquired: number;
	nonce: string;
	source: string;
	reasonCode: string;
	message: string;
	signature: string;
}

interface SearchInfo {
	textSnippet: string;
}
