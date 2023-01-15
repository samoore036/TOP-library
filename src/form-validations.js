import Book from "./Book";
import { toggleOverlay, closeForms } from "./load-modals";
import updateBookContent from "./book-div-functionality";

function emailValidation() {
    const email = document.getElementById('email-input');
    const span = makeErrorSpan();
    document.getElementById('email-label').appendChild(span);

    email.addEventListener('input', validation);
    email.addEventListener('click', validation);
    
    function validation() {
        createAccountFormNotEmpty()
        if (email.validity.valueMissing) {
            email.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter an email address';
        } else if (email.validity.typeMismatch) {
            email.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter a valid email address';
        } else {
            email.classList.remove('invalid');
            span.classList.add('hidden');
            span.textContent = '';
        }
    }
}

function newPasswordValidation() {
    const password = document.getElementById('new-password-input');
    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'error-div');
    errorDiv.classList.add('hidden');
    document.getElementById('new-password-label').appendChild(errorDiv);

    password.addEventListener('input', validation);
    password.addEventListener('click', validation);

    const lowercase = /[a-z]+/;
    const uppercase = /[A-Z]+/;
    const special = /[^A-Za-z 0-9]/g;
    const number = /\d/;

    function validation() {
        createAccountFormNotEmpty()
        if (matchesAll(password.value)) {
            password.classList.remove('invalid');
            errorDiv.textContent = '';
            errorDiv.classList.add('hidden');
        } else {
            password.classList.add('invalid');
            errorDiv.textContent = 'Password should contain at least:';
            const errorList = document.createElement('ul');
            errorDiv.appendChild(errorList);
            errorDiv.classList.remove('hidden');
            
            if (password.value.length < 8) {
                errorList.appendChild(createLi('8 characters'));
            }
            if (!password.value.match(lowercase)) {
                errorList.appendChild(createLi('one lowercase letter'));
            }
            if (!password.value.match(uppercase)) {
                errorList.appendChild(createLi('one uppercase letter'));
            }
            if (!password.value.match(special)) {
                errorList.appendChild(createLi('one special character'));
            }
            if (!password.value.match(number)) {
                errorList.appendChild(createLi('one number'));
            }
        }
    }

    function createLi(string) {
        const li = document.createElement('li');
        li.textContent = string;

        return li;
    }

    function matchesAll(string) {
        if (string.length < 8 || !string.match(lowercase) || !string.match(uppercase) 
        || !string.match(special) || !string.match(number)) {
            return false;
        }
        return true;
    }
}

function confirmPasswordValidation() {
    const password = document.getElementById('new-password-input');
    const confirmPassword = document.getElementById('confirm-password-input');
    const span = makeErrorSpan();
    document.getElementById('confirm-password-label').appendChild(span);

    password.addEventListener('input', validation);
    password.addEventListener('click', validation);
    confirmPassword.addEventListener('input', validation);
    confirmPassword.addEventListener('click', validation);

    function validation() {
        createAccountFormNotEmpty()
        if (confirmPassword.value === password.value) {
            confirmPassword.classList.remove('invalid');
            span.textContent = '';
            span.classList.add('hidden');
        } else {
            confirmPassword.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Passwords must match';
        }
    }
}

function usernameValidation() {
    const username = document.getElementById('username-input');
    const span = makeErrorSpan();
    document.getElementById('username-label').appendChild(span);

    username.addEventListener('input', validation);
    username.addEventListener('click', validation);
    
    function validation() {
        createAccountFormNotEmpty();
        if (username.validity.valueMissing) {
            username.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter a username';
        } else {
            username.classList.remove('invalid');
            span.classList.add('hidden');
            span.textContent = '';
        }
    }
}

function createAccountFormNotEmpty() {
    const form = document.getElementById('new-account-form');
    form.classList.remove('empty');
}

function titleValidation() {
    const title = document.getElementById('title-input');
    const span = makeErrorSpan();
    document.getElementById('title-label').appendChild(span);

    title.addEventListener('input', validation);
    title.addEventListener('click', validation);

    function validation() {
        bookFormNotEmpty()
        if (title.validity.valueMissing) {
            title.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter a book title';
        } else {
            title.classList.remove('invalid');
            span.classList.add('hidden');
            span.textContent = '';
        }
    }
}

function authorValidation() {
    const author = document.getElementById('author-input');
    const span = makeErrorSpan();
    document.getElementById('author-label').appendChild(span);

    author.addEventListener('input', validation);
    author.addEventListener('click', validation);

    function validation() {
        bookFormNotEmpty()
        if (author.validity.valueMissing) {
            author.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter author\'s name';
        } else {
            author.classList.remove('invalid');
            span.classList.add('hidden');
            span.textContent = '';
        }
    }
}

function pageCountValidation() {
    const pageCount = document.getElementById('pages-input');
    const span = makeErrorSpan();
    document.getElementById('pages-label').appendChild(span);

    pageCount.addEventListener('input', validation);
    pageCount.addEventListener('click', validation);

    function validation() {
        bookFormNotEmpty()
        if (pageCount.validity.valueMissing) {
            pageCount.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter book page count';
        } else if (!pageCount.value.match(/\d/)) {
            pageCount.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Please enter numbers only';
        } else if (pageCount.value < 1) {
            pageCount.classList.add('invalid');
            span.classList.remove('hidden');
            span.textContent = 'Page count should be greater than 0';
        } else {
            pageCount.classList.remove('invalid');
            span.classList.add('hidden');
            span.textContent = '';
        }
    }
}

function bookFormNotEmpty() {
    const form = document.getElementById('book-form');
    form.classList.remove('empty');
}

function makeErrorSpan() {
    const span = document.createElement('span');
    span.classList.add('error');

    return span;
}

function addValidation() {
    emailValidation();
    newPasswordValidation();
    confirmPasswordValidation();
    usernameValidation();

    titleValidation();
    authorValidation();
    pageCountValidation();
}

function checkAccountSubmit() {
    const form = document.getElementById('new-account-form');
    const errorMsgDiv = form.getElementsByClassName('error-message-div')[0];
    const email = document.getElementById('email-input');
    const password = document.getElementById('new-password-input');
    const confirmPassword = document.getElementById('confirm-password-input');
    const username = document.getElementById('username-input');

    if (form.classList.contains('empty')) {
        form.classList.add('no-submit');
        errorMsgDiv.textContent = 'Please fill out all required fields before submitting';
        return;
    }

    if (email.classList.contains('invalid') || password.classList.contains('invalid') || confirmPassword.classList.contains('invalid') || username.classList.contains('invalid')) {
        form.classList.add('no-submit');
        errorMsgDiv.textContent = 'Please correct form errors before submitting';
        return;
    } else if (!email.classList.contains('invalid') && !password.classList.contains('invalid') && !confirmPassword.classList.contains('invalid')) {
        form.addEventListener('submit', newAccountSubmit);
        form.classList.remove('no-submit');
        form.classList.add('hidden');
    }
}

function newAccountSubmit(e) {
    e.preventDefault();
    document.getElementById('success-div').classList.remove('hidden');
}

function checkBookSubmit() {
    const form = document.getElementById('book-form');
    const errorMsgDiv = form.getElementsByClassName('error-message-div')[0];
    const title = document.getElementById('title-input');
    const author = document.getElementById('author-input');
    const pageCount = document.getElementById('pages-input');

    if (form.classList.contains('empty')) {
        form.classList.add('no-submit');
        errorMsgDiv.textContent = 'Please fill out all fields before submitting';
        return;
    }

    if (title.classList.contains('invalid') || author.classList.contains('invalid') || pageCount.classList.contains('invalid')) {
        form.classList.add('no-submit');
        errorMsgDiv.textContent = 'Please correct form errors before submitting';
        return;
    } else if (!title.classList.contains('invalid') && !author.classList.contains('invalid') && !pageCount.classList.contains('invalid')) {
        form.addEventListener('submit', bookSubmit);
        form.classList.remove('no-submit');
    }
}

function bookSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    let pageCount = document.getElementById('pages-input').value;
    if (pageCount[0] == 0) {
        pageCount = pageCount.slice(1);
    }
    let hasRead = document.getElementById('checkbox-input').checked ? 'Yes' : 'No';
    const key = localStorage.length;
    
    localStorage.setItem(key, JSON.stringify(new Book(title, author, pageCount, hasRead, key)));
    toggleOverlay();
    closeForms();
    updateBookContent();
}

export { addValidation, checkAccountSubmit, checkBookSubmit };