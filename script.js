class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}

const overlay = document.getElementById('overlay');

const loginBtn = document.getElementById('login-btn').addEventListener('click', displayLogin);
const loginModal = document.getElementById('login-modal');

function displayLogin() {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('active');
    overlay.classList.add('overlay-active');
    overlay.addEventListener('click', closeModals);
}

const addBookBtn = document.getElementById('add-btn').addEventListener('click', displayAddBook);
const bookModal = document.getElementById('book-modal');

function displayAddBook() {
    bookModal.classList.remove('hidden');
    bookModal.classList.add('active');
    overlay.classList.add('overlay-active');
    overlay.addEventListener('click', closeModals);
}

function closeModals(e) {
    console.log('hiding overlay');
    console.log(e.target);
    loginModal.classList.remove('active');
    loginModal.classList.add('hidden');
    bookModal.classList.remove('active');
    bookModal.classList.add('hidden');
    overlay.classList.remove('overlay-active');
    overlay.classList.add('hidden');
}

const submitBtn = document.getElementById('form-submit').addEventListener('click', getData);

const bookDisplayDiv = document.getElementById('book-div');

const bookForm = document.getElementById('book-form');
// const titleError = document.getElementById('title-error');

const library = [];

function getData() {
    const title = document.getElementById('title').value;

    // for (let book of library) {
    //     if (book.title == title) {
    //         titleError.innerText = 'A book with that title already exists';
    //     }
    // }
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('read').checked;
    const book = new Book(title, author, pages, hasRead);
    library.push(book);
    makeBook(book);
    closeBookModal();
}

function closeBookModal() {
    bookForm.reset();
    bookModal.classList.remove('active');
    bookModal.classList.add('hidden');
    overlay.classList.remove('overlay-active');
    overlay.classList.add('hidden');
}

function makeBook(book) {
    const bookDiv = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');

    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    titleP.innerText = book.title;
    authorP.innerText = book.author;
    pagesP.innerText = book.pages;
    removeBtn.innerText = 'Remove';

    if (book.hasRead === true) {
        readBtn.innerText = 'Read';
        readBtn.classList.add('read');
    } else {
        readBtn.innerText = 'Has not read';
        readBtn.classList.add('not-read');
    }

    readBtn.onclick = toggleReadStatus; 
    removeBtn.onclick = removeBook;

    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);

    bookDiv.classList.add('book');
    bookDisplayDiv.appendChild(bookDiv);
}


function toggleReadStatus(e) {
    const title = e.target.parentNode.firstChild.innerText;
    const book = library.find(book => book.title == title);
    if (book.hasRead === true) {
        book.hasRead = false;
    } else {
        book.hasRead = true;
    }
    updateDisplay();
}

function removeBook(e) {
    const title = e.target.parentNode.firstChild.innerText;
    const book = library.find(book => book.title == title);
    library.splice(library.indexOf(book), 1);
    updateDisplay();
}

function updateDisplay() {
    bookDisplayDiv.innerText = '';
    library.forEach(book => makeBook(book));
}
