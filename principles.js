class Bookshelf {
    
    // Constructor
    // The constructor is a special method for creating and initializing an object created with a class.
    // The constructor method is called automatically when a new object is created.
    // It is a good place to set default values for properties.
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

	printFavoriteBooks() {
        console.log(`Favorite Books: ${this.favoriteBooks.length}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function loadBooks( bookshelf ) {
	fakeAjax(BOOK_API, 
        function books(bookNames){
            console.log("Tipo of bookNames: "+typeof bookNames);

            for(let bookName of bookNames){
                console.log("Entro al For loadBooks: "+bookName);
                bookshelf.addFavoriteBook(bookName);
            }
            bookshelf.printFavoriteBooks();

        } 
    );
}

var BOOK_API = "https://some.url/api";

var x = new Bookshelf();
loadBooks(x);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
