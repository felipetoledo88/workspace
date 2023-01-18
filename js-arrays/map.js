const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((element) => {
  return element + 1 >= 10 ? 10 : element + 1;
})
console.log(notasAtualizadas)