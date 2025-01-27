const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {

    const resposta = button.parentElement.nextElementSibling;
    resposta.classList.toggle('esconder');
    const icon = button.querySelector('.icon');


    if (icon.src.includes('icon-plus.svg')) {
      icon.src = '/src/images/icons/icon-minus.svg'; 
    } else {
      icon.src = '/src/images/icons/icon-plus.svg'; 
    }
  });
});