(function() {
    const root = document.documentElement;
    root.className = 'light';

    const themeBtn = document.getElementById('theme-btn').addEventListener('click', changeTheme);

    function changeTheme() {
        const lightBtns = Array.from(document.getElementsByClassName('light-btn'));
        const darkBtns = Array.from(document.getElementById('dark-btn'));

        currTheme = root.className === 'light' ? 'dark' : 'light';
        root.className = currTheme;
        if (currTheme === 'dark') {
            darkBtns.forEach(btn => btn.classList.remove('hidden'));
            lightBtns.forEach(btn => btn.classList.add('hidden'));
        } else {
            darkBtns.forEach(btn => btn.classList.add('hidden'));
            lightBtns.forEach(btn => btn.classList.remove('hidden'));
        }
    }
})();
