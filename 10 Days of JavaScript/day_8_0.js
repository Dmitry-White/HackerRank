const button = document.querySelector('#btn');
button.addEventListener('click', e => e.target.innerText = +e.target.innerText + 1);