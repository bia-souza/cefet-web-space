// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const p = document.querySelectorAll('.botao-expandir-retrair');

const expandirTexto = (event) => {
	
    const button1 = event.currentTarget;
    const paragrafo = button1.parentNode;
    expandiu = paragrafo.classList.toggle('expandido');
	
	if(expandiu) {
        button1.innerHTML = '-';
    } else {
        button1.innerHTML = '+';
    }
}

p.forEach(p => {
    p.addEventListener('click', expandirTexto)
}); 