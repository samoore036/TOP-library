import { checkAccountSubmit, checkBookSubmit } from "./form-validations";

function openLoginModal() {
    closeForms();
    toggleOverlay();
    document.getElementById('login-form').classList.remove('hidden');
}

function loadLoginModal() {
    const loginForm = document.createElement('form');
    loginForm.setAttribute('id', 'login-form');
    loginForm.classList.add('hidden');

    const loginLabel = document.createElement('label');
    loginLabel.setAttribute('for', 'login-input');
    loginLabel.setAttribute('id', 'login-label');
    loginLabel.textContent = 'Username';
    const login = document.createElement('input');
    login.setAttribute('id', 'login-input');
    login.type = 'text';
    loginLabel.appendChild(login);
    loginForm.appendChild(loginLabel);

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password-input');
    passwordLabel.setAttribute('id', 'password-label');
    passwordLabel.textContent = 'Password';
    const password = document.createElement('input');
    password.setAttribute('id', 'password-input');
    password.type = 'password';
    passwordLabel.appendChild(password);
    loginForm.appendChild(passwordLabel);

    const buttonDiv = loadButtonDiv();

    const submit = document.createElement('button');
    submit.textContent = 'Login';
    submit.type = 'submit';

    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(loadCancelButton());
    
    loginForm.appendChild(buttonDiv);
    loginForm.appendChild(newAccountDiv());
    
    return loginForm;
}

function newAccountDiv() {
    const div = document.createElement('div');
    div.classList.add('small-div');
    div.textContent = 'No account?';

    const link = document.createElement('a');
    link.textContent = 'Sign up here';
    link.addEventListener('click', openNewAccountModal);
    div.appendChild(link);

    return div;
}

function openNewAccountModal() {
    closeForms();
    document.getElementById('new-account-form').classList.remove('hidden');
}

function loadNewAccountModal() {
    const newAccountForm = document.createElement('form');
    newAccountForm.setAttribute('id', 'new-account-form');
    newAccountForm.classList.add('hidden', 'empty');

    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('id', 'inner-div');
    newAccountForm.appendChild(innerDiv);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email-input');
    emailLabel.setAttribute('id', 'email-label');
    emailLabel.textContent = 'Email*';
    const email = document.createElement('input');
    email.setAttribute('id', 'email-input');
    email.classList.add('invalid');
    email.type = 'email';
    email.required = 'true';
    emailLabel.appendChild(email);
    innerDiv.appendChild(emailLabel);

    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username-input');
    usernameLabel.setAttribute('id', 'username-label');
    usernameLabel.textContent = 'Username*';
    const username = document.createElement('input');
    username.setAttribute('id', 'username-input');
    username.classList.add('invalid');
    username.type = 'text';
    username.required = 'true';
    usernameLabel.appendChild(username);
    innerDiv.appendChild(usernameLabel);
    
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'new-password-input');
    passwordLabel.setAttribute('id', 'new-password-label');
    passwordLabel.textContent = 'Password*';
    const password = document.createElement('input');
    password.setAttribute('id', 'new-password-input');
    password.classList.add('invalid');
    password.type = 'password';
    password.required = 'true';
    passwordLabel.appendChild(password);
    innerDiv.appendChild(passwordLabel);
    
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'confirm-password-input');
    confirmPasswordLabel.setAttribute('id', 'confirm-password-label');
    confirmPasswordLabel.textContent = 'Confirm Password*';
    const confirmPassword = document.createElement('input');
    confirmPassword.setAttribute('id', 'confirm-password-input');
    confirmPassword.classList.add('invalid');
    confirmPassword.type = 'password';
    confirmPassword.required = 'true';
    confirmPasswordLabel.appendChild(confirmPassword);
    innerDiv.appendChild(confirmPasswordLabel);
    
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'country-input');
    countryLabel.setAttribute('id', 'country-label');
    countryLabel.textContent = 'Country';
    const country = document.createElement('select');
    country.setAttribute('id', 'country-select');
    countryLabel.appendChild(country);
    innerDiv.appendChild(countryLabel);
    getCountryArray().forEach(ctry => country.appendChild(makeOption(ctry)));
     
    const zipcodeLabel = document.createElement('label');
    zipcodeLabel.setAttribute('id', 'zipcode-input');
    zipcodeLabel.setAttribute('id', 'zipcode-label');
    zipcodeLabel.textContent = 'Zipcode';
    const zipcode = document.createElement('input');
    zipcode.setAttribute('id', 'zipcode-input');
    zipcode.type = 'text';
    zipcodeLabel.appendChild(zipcode);
    innerDiv.appendChild(zipcodeLabel);

    const buttonDiv = loadButtonDiv();

    const submit = document.createElement('button');
    submit.textContent = 'Create Account';
    submit.type = 'submit';
    submit.addEventListener('click', checkAccountSubmit);

    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(loadCancelButton());
    newAccountForm.appendChild(buttonDiv);

    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    smallDiv.textContent = '* indicates a required field';
    newAccountForm.appendChild(smallDiv);

    const errorMsgDiv = document.createElement('div');
    errorMsgDiv.classList.add('error-message-div');
    newAccountForm.appendChild(errorMsgDiv);

    return newAccountForm;
}

function loadCreateSuccessModal() {
    const div = document.createElement('div');
    div.setAttribute('id', 'success-div');
    div.classList.add('hidden');
    div.textContent = 'Account successfully created. Please check your email to confirm your account.';

    const button = document.createElement('button');
    button.textContent = 'Close';
    button.addEventListener('click', () => {
        toggleOverlay();
        closeForms();
    });
    div.appendChild(button);

    return div;
}

function makeOption(string) {
    const option = document.createElement('option');
    option.value = string;
    option.textContent = string;

    return option;
}

function getCountryArray() {
    const countries = ["", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom", "United States of America", "Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    return countries;
}

function loadCancelButton() {
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        toggleOverlay();
        closeForms();
    })

    return cancelBtn;
}

function loadButtonDiv() {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');

    return buttonDiv;
}

function openBookModal() {
    toggleOverlay();
    document.getElementById('book-form').classList.remove('hidden');
}

function loadBookModal(){
    const bookForm = document.createElement('form');
    bookForm.setAttribute('id', 'book-form');
    bookForm.classList.add('hidden', 'empty');
 
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title-input');
    titleLabel.setAttribute('id', 'title-label');
    titleLabel.textContent = 'Title';
    const title = document.createElement('input');
    title.setAttribute('id', 'title-input');
    title.classList.add('invalid');
    title.type = 'text';
    title.required = 'true';
    titleLabel.appendChild(title);
    bookForm.appendChild(titleLabel);

    const authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author-input');
    authorLabel.setAttribute('id', 'author-label');
    authorLabel.textContent = 'Author';
    const author = document.createElement('input');
    author.setAttribute('id', 'author-input');
    author.classList.add('invalid');
    author.type = 'text';
    author.required = 'true';
    authorLabel.appendChild(author);
    bookForm.appendChild(authorLabel);

    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages-input');
    pagesLabel.setAttribute('id', 'pages-label');
    pagesLabel.textContent = '# of pages';
    const pages = document.createElement('input');
    pages.setAttribute('id', 'pages-input');
    pages.classList.add('invalid');
    pages.type = 'number';
    pages.required = 'true';
    pages.minLength = 1;
    pagesLabel.appendChild(pages);
    bookForm.appendChild(pagesLabel);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', 'checkbox-input');
    checkboxLabel.setAttribute('id', 'checkbox-label');
    checkboxLabel.textContent = 'Have you read it?';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', 'checkbox-input');
    checkbox.type = 'checkbox';
    checkboxLabel.appendChild(checkbox);
    bookForm.appendChild(checkboxLabel);

    const buttonDiv = loadButtonDiv();

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.type = 'submit';
    submit.addEventListener('click', checkBookSubmit);

    buttonDiv.appendChild(submit);
    buttonDiv.appendChild(loadCancelButton());
    bookForm.appendChild(buttonDiv);

    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    smallDiv.textContent = '*All fields are required';
    bookForm.appendChild(smallDiv);

    const errorMsgDiv = document.createElement('div');
    errorMsgDiv.classList.add('error-message-div');
    bookForm.appendChild(errorMsgDiv);

    return bookForm;
}

function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
}

function closeForms() {
    Array.from(document.querySelectorAll('form'))
        .forEach(form => form.classList.add('hidden'));
    Array.from(document.querySelectorAll('form'))
        .forEach(form => form.reset());
    document.getElementById('success-div').classList.add('hidden');
}


export { openLoginModal, loadLoginModal, openBookModal, loadBookModal, loadNewAccountModal, loadCreateSuccessModal, toggleOverlay, closeForms };