import loadTopBar from './load-top-bar';
import loadContent from './load-content';
import loadFooter from './load-footer';
import loadOverlay from './load-overlay';
import { loadLoginModal, loadBookModal, loadNewAccountModal, loadCreateSuccessModal } from './load-modals';
import { addValidation } from './form-validations';
import updateBookContent from './book-div-functionality';

function loadPage() {
    const body = document.body;
    body.appendChild(loadTopBar());
    body.appendChild(loadContent());
    updateBookContent();
    body.appendChild(loadFooter());

    const overlay = loadOverlay();
    overlay.appendChild(loadLoginModal());
    overlay.appendChild(loadBookModal());
    overlay.appendChild(loadNewAccountModal());
    overlay.appendChild(loadCreateSuccessModal());

    body.appendChild(overlay);
    addValidation();
    
    //hide all default invalid messages in favor of custom ones
    Array.from(document.querySelectorAll('input'))
        .forEach(input => input.addEventListener('invalid', function(e) {
            e.preventDefault();
        }))
}

export default loadPage;