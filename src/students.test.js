const students = require('./students')
/*
  Deve => Quando
  Shoulf => When

*/
describe('Aluno', () => {
  // it é um alias para test
  it('DEVE retorna 10 QUANDO as notas forem 5, 3 e 2', () => {
    const notas = [5, 3, 2];
    expect(students.sum(notas)).toEqual(10);
  });

  it('DEVE retorna zero QUANDO uma das notas for zero', () => {
    const notas = [5, 3, 2, 0];
    expect(students.sum(notas)).toEqual(0);
  });

  it('DEVE dobrar a nota QUANDO o aluno tiver mais de cinco notas', () => {
    const notas = [1, 2, 3, 4, 5];
    expect(students.sum(notas)).toEqual(15)
  });

});

