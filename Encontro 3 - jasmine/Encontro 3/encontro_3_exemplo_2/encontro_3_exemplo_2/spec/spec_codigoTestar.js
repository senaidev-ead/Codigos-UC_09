// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers

describe("Teste de validação do Código", function() {

  it("Somas válidas", function() {

    
    expect(soma(1,2)).toBe(3);
    expect(soma(9,9)).toBe(18);
    expect(soma(9,1)).toBeGreaterThan(9);   // maior que o primeiro termo


  });


 it("Somas Inválidas", function() {
    expect(soma(1,2)).not.toBe(4);
    expect(soma(9,9)).not.toBe(17);
    expect(soma(9,1)).not.toBe(18);

  });


 });

describe("Teste de validação do Código - Maior Idade", function() {
	it("20 e 22 - Maior >=18 - deve retornar maior de idade", function() {
    		expect(maioridade (20)).toBe('Maior Idade');
	    	expect(maioridade (22)).toBe('Maior Idade');
	    	expect(maioridade (2)).not.toBe('Maior Idade');
   	});

});



describe("Teste de validação do Código - Menor Idade", function() {
	

	it("17 e 10 - Menor <=18 - deve retornar menor de idade", function() {
    		expect(maioridade (22)).not.toBe('Menor Idade');
	    	expect(maioridade (10)).toBe('Menor Idade');
   	});



});



 