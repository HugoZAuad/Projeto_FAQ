document.getElementById('iconMais').addEventListener('click', function() {
    const resposta1 = document.getElementById('resposta1');
    const icon = document.querySelector('#iconMais img');
    resposta1.classList.toggle('esconder');
    if (resposta1.classList.contains('esconder')) {
        icon.src = '/src/images/icons/icon-plus.svg'; 
    } else {
        icon.src = '/src/images/icons/icon-minus.svg';
    }
});