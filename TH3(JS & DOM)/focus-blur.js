const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', function(e) {
    e.target.style.backgroundColor = 'yellow';
})

pwd.addEventListener('blur', function(e) {
    e.target.style.backgroundColor = ''
})