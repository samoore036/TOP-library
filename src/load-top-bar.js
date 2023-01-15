import bookImg from './images/bookshelf.png';
import { openLoginModal } from './load-modals';

function makeLeftDiv() {
    const leftDiv = document.createElement('div');
    leftDiv.textContent = 'LIBRARY';

    const img = new Image();
    img.src = bookImg;
    leftDiv.appendChild(img);

    return leftDiv;
}

function makeRightDiv() {
    const rightDiv = document.createElement('div');

    const loginBtn = document.createElement('button');
    loginBtn.setAttribute('id', 'login-btn');
    loginBtn.textContent = 'Log in';
    loginBtn.addEventListener('click', openLoginModal);
    rightDiv.appendChild(loginBtn);

    return rightDiv;
}

function loadTopBar() {
    const topBar = document.createElement('div');
    topBar.setAttribute('id', 'top-bar');
    
    topBar.appendChild(makeLeftDiv());
    topBar.appendChild(makeRightDiv());

    return topBar;
}

export default loadTopBar;