// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


let botaoCalcular = document.querySelector('#calcular');
	
let calculaGravidade = () => {
	
	const G = document.querySelector('#constante').value;
	const m1 = document.querySelector('#massa1').value;
	const m2 = document.querySelector('#massa2').value;
	const d = document.querySelector('#distancia').value;

    const F = G*m1*m2/(d*d);

    document.querySelector('#resultado').value = F;

} 

botaoCalcular.addEventListener('click', calculaGravidade); 