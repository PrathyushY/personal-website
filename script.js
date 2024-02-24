 const darkModeSwitch = document.getElementById('dark-mode-switch');
 const htmlTag = document.querySelector('html');

 darkModeSwitch.addEventListener('change', function() {
    if (this.checked) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
    }
 });