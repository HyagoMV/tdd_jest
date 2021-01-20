module.exports = {
  sum: notas => {
    if (Math.min(...notas)) {
      const result = notas.reduce((acc, nota) => {
        acc += nota;
        return acc;
      }, 0);
      return notas.length > 5 ? result * 2 : result;
    }
    return 0;
  }
}