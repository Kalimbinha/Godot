/*
Desafio Classificador de Nível de Herói ⚔️🏆

Utilizando variáveis, operadores e estruturas de decisão,
classifique o herói de acordo com sua experiência (XP).

Níveis:
- XP menor que 1.000         : Ferro
- XP entre 1.001 e 2.000       : Bronze
- XP entre 2.001 e 5.000       : Prata
- XP entre 5.001 e 7.000       : Ouro
- XP entre 7.001 e 8.000       : Platina
- XP entre 8.001 e 9.000       : Ascendente
- XP entre 9.001 e 10.000      : Imortal
- XP maior ou igual a 10.001   : Radiante
*/

let nome = console.readline("Digite seu nome: ");
let XP = Number(console.readline("Digite seu nível de XP: "));
let nivel;

if (XP < 1000) {
    nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    nivel = "Imortal";
} else if (XP >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Não definido ";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel + "!");
