import { openBookModal } from "./load-modals";

function loadContent() {
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'button-div');
    buttonDiv.appendChild(makeAddBtn());

    const bookDisplayDiv = document.createElement('div');
    bookDisplayDiv.setAttribute('id', 'book-div');

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'main-content');
    contentDiv.appendChild(buttonDiv);
    contentDiv.appendChild(bookDisplayDiv);

    return contentDiv;
}

function makeAddBtn() {
    const addBtn = document.createElement('button');
    addBtn.textContent = '+Add Book';
    addBtn.addEventListener('click', openBookModal);

    return addBtn;
}

export default loadContent;