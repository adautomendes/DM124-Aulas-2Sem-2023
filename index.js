// const nome = "Adauto";

// console.log("Hello \t" + nome); //Concatenação
// console.log(`Hello \t${nome}`); //Template string

const obj1 = {
    nome: "Adauto",
    escola: "Inatel",
    curso: "Pós",
    disciplina: "DM124"
};

let { nome, escola } = obj1;

console.log(`${escola}`);