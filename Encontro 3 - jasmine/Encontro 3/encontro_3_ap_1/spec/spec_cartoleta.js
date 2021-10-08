// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// **********************************************************************************
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// No livro digital página e no material web página 152 SA2 Etapa 2 página 100
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers

describe("titulo do teste - SOMA ", function(){
	it("Casos dos testes", function(){
		//teste
		//expect(FUNÇÃO).Matcher(RESPOSTA);
		expect( Soma(1,2)).toBe(3);
		expect( Soma(3,3)).not.toBe(7);
		expect( Soma(1,2)).toBeGreaterThan(2);

	});

} );

/// ATIVIDADE MESMO ... 

describe("Teste de validação valor_do_jogo ", function() {

  it("Valores Sorteio do Placar ", function() {

	//Com base nas opções de Matchers acima, complete os testes abaixo
	// 0 - 4
	// toBe - para ser ou IGUAL 
        // toBeGreaterThan  - maior que
	// not.toBe  - NUNCA
        // not.toBeGreaterThan - não ser maior

       // 0 - 4
	expect( sorteio() ).not.toBe(-1);// ok
	expect( sorteio() ).toBeGreaterThan(-1);//ok
	
	expect( sorteio() ).not.toBe(5); //0-4
	
	expect( sorteio() ).not.toBe(6);//0-4
	expect( sorteio() ).not.toBeGreaterThan(6);//0-4

// errados
        //0-4
	//expect( sorteio() ).toBe(-1);// ok
	//expect( sorteio() ).not.toBeGreaterThan(-1);//ok
	
	//expect( sorteio() ).toBe(5); //0-4
	
	//expect( sorteio() ).toBe(6);//0-4
	//expect( sorteio() ).toBeGreaterThan(6);//0-4
    
  });


});




describe("Teste de validação validar_pontos ", function() {

  it("Validar Campeões ", function() {


	// toBe - para ser ou IGUAL 
        // toBeGreaterThan  - maior que
	// not.toBe  - NUNCA
        // not.toBeGreaterThan - não ser maior

	expect( validar_pontos(1,3) ).toBe("Vitória do Time 2");//ok


	expect( validar_pontos(3,1) ).toBe("Vitória do Time 1");

	expect( validar_pontos(1,1) ).toEqual("Empate");
	
    
  });


});
 


describe("Teste de validação validar_pontos INVALIDOS", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(3,1) ).not.toBe("Vitória do Time 2");	
	
	expect( validar_pontos(1,3) ).not.toBe("Vitória do Time 1");	
	
	expect( validar_pontos(3,1) ).not.toBe("Empate");

     // expect ( FUNÇÃO ) . Matcher (QUE NÃO PODE DAR);
	// expect (Soma(5,5)).not.toBe(11);
	// expect (Soma(1,1)).not.toBe(4);
	
    
  });


});



