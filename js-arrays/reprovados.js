const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((element, indice) => {
return medias[indice] < 7;
})

const aprovados = alunos.filter((element, indice) => {
    return medias[indice] >= 7;
    })

console.log("Reprovados:", reprovados)
console.log("Aprovados:", aprovados)