Multiplos = function (entrada) {
     if (entrada % 3 == 0 && entrada % 5 == 0) return 'Multiplos';
     if (entrada % 3 == 0) return 'Multi3';
     if (entrada % 5 == 0) return 'Multi5';
     return entrada;
 }