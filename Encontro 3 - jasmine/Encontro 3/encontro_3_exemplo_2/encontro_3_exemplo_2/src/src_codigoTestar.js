//Código a ser testado pelo Jasmine

// soma somente soma 2 números e retorna o resultado
soma = function (num1,num2){
	return (num1 + num2);
}

// verifica se é maior ou menor de idade
maioridade = function (idade) {
	if(idade <=0 || idade >=120)
		return 'Idade Inválida';

	if(idade>=18)
		return 'Maior Idade';
	else
		return 'Menor Idade';
}

