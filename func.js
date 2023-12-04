function f1(nome) {
    console.log(`Função ${nome}...`);
}

let f2 = function(nome) {
    console.log(`Função ${nome} - parte 1`);
};

f2("F2");

f2 = function(nome) {
    console.log(`Função ${nome} - parte 2`);
};

const f3 = nome => console.log(`Função ${nome}...`);

f1("F1");
f2("F2");
f3("F3");