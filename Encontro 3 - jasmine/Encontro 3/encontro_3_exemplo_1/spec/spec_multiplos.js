describe('Desafio Multiplos', function () {

      describe('Multi3', function () {
          it('Deve retornar Multiplo de 3 quando a entrada for 3', function () {
              expect(Multiplos(3)).toBe('Multi3');
          });
          it('Deve retornar Multiplo de 3 quando a entrada for 9', function () {
              expect(Multiplos(9)).toBe('Multi3');
          });
      });

      describe('Multi5', function () {
          it('Deve retornar Múltiplo de 5 quando a entrada for 5', function () {
              expect(Multiplos(5)).toBe('Multi5');
          });
          it('Deve retornar Multiplo de 5 quando a entrada for 25', function () {
              expect(Multiplos(25)).toBe('Multi5');
          });
      });

      describe('Multiplos', function () {
          it('Deve retornar Múltiplo de 3 ou 5 quando a entrada for 15', function () {
              expect(Multiplos(15)).toBe('Multiplos');
          });
          it('Deve retornar Múltiplo de 3 ou 5 quando a entrada for 30', function () {
              expect(Multiplos(30)).toBe('Multiplos');
          });
      });

      describe('Não é divisível por 3 ou 5', function () {
          it('Deve retornar 2 quando a entrada for 2', function () {
              expect(Multiplos(2)).toBe(2);
          });
          it('Deve retornar 4 quando a entrada for 4', function () {
              expect(Multiplos(4)).toBe(4);
          });
      });
  });