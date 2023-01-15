import Book from "./Book";

function updateBookContent() {
    const contentDiv = document.getElementById('book-div');
    contentDiv.textContent = '';

    for (let i = 0; i < localStorage.length; i++) {
        const localBook = localStorage.getItem(i);
        if (localBook === 'deleted') {
            continue;
        }
        const parsedBook = JSON.parse(localBook);
        const book = new Book(parsedBook.title, parsedBook.author, parsedBook.pageCount, parsedBook.hasRead, parsedBook.key);
        contentDiv.appendChild(makeBookDiv(book));
    }
}

function makeBookDiv(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    titleP.textContent = book.getTitle();
    authorP.textContent = book.getAuthor();
    pagesP.textContent = book.getPageCount();
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('red-btn');

    if (book.getHasRead() === 'Yes') {
        readBtn.textContent = 'Read';
        readBtn.classList.add('has-read');
    } else {
        readBtn.textContent = 'Not read';
        readBtn.classList.add('not-read');
    }

    const key = book.getKey();

    readBtn.addEventListener('click', () => {
        if (readBtn.textContent === 'Read') {
            readBtn.classList.remove('has-read');
            readBtn.textContent = 'Not read';
            readBtn.classList.add('not-read');
            book.hasRead = 'No';
        } else {
            readBtn.classList.remove('not-read');
            readBtn.textContent = 'Read';
            readBtn.classList.add('has-read');
            book.hasRead = 'Yes';
        }
        //update local storage to reflect the change in read status 
        localStorage.setItem(key, JSON.stringify(book));
    })

    removeBtn.addEventListener('click', () => {
        localStorage.setItem(key, 'deleted');
        updateBookContent();
    });

    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);
    
    return bookDiv;
} 

export default updateBookContent;