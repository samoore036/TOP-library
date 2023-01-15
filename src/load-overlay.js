function loadOverlay() {
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    overlay.classList.add('hidden');

    return overlay;
}

export default loadOverlay;