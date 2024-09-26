const books = [
    {
        title : 'The Great Gatsby',
        author : 'F.Scott Fitzgerald',
        genere : 'classic',
        publicationYear : 1925,
        rating : 4.2 
    },
    {
        title : 'To Kill a Mockingbird',
        author : 'Harper Lee',
        genere : 'Fiction',
        publicationYear : 1960,
        rating : 4.5 
    },
    {
        title : 'The Hobbit',
        author : 'J.R.R Tolkien',
        genere : 'Fantacy',
        publicationYear : 1937,
        rating : 4.3
    }
]

//EXTRACT THE VALUES INTO VARIABLES book1, book2, book3 and log in to console

const [book1, book2, book3] = books;

console.log('book1:',book1)
console.log('book2:',book2)
console.log('book3:',book3)

const {title, author, publicationYear} = book2;;

console.log(title)
console.log(author)
console.log(publicationYear)

//APPLY OBJECT DESTRUCTURING TO EXTRACT title, author, published FROM book2
// AND LOG A STRING..

console.log(`Book 2 :${title} by ${author}, published in ${publicationYear}`)

//CREATE A NEW book4 OBJECT


const Book4 =[{
        title : "Harry Potter and the Sorcerer's stone",
        author : 'J.K.Rowling',
        genere : 'Fantacy',
        publicationYear : 1997,
        rating : 4.7
}]

//USE THE SPREAD OPERATOR TO ADD THIS BOOK TO THE BOOKS ARREY LOG UPDATED ARREY TO CONSOLE

let booksUpdated = [...books,...Book4]

console.log(booksUpdated)

const copiedBooks = [...booksUpdated]
console.log(copiedBooks)