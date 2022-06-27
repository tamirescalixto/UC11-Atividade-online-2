// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

// Listar participantes e palestrantes por evento.
 
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


prompt = require("prompt-sync")();

const idadeMinima = 18;
let idadeCliente = parseInt(prompt("Sua idade: "))

//condição                     //true                //false
console.log(idadeCliente >= idadeMinima ? "Permitir Cadastro!" : "O cadastro não é permitido pela idade!")

    function imprimeTexto(texto) {
        console.log(texto)

    }

let dataAtual = new Date(); // Salvando a data de hoje
let dataEvento = parseInt(prompt("Data do Evento: ")) // Salvando a data do evento como uma string 

//condição                 //true                //false
console.log(dataEvento >= dataAtual ? "Permitir Cadastro!" : "O cadastro não é permitido por data inválida!")

    function imprimeTexto(texto) {
        console.log(texto)
    }


let quantidadeParticipantes = 100;
let numeroInscricaoParticipante = 101;

//condição                                                //true                //false
console.log(quantidadeParticipantes >= numeroInscricaoParticipante ? "Permitir Cadastro!" : "O cadastro não é permitido por ter excedido o limite de inscritos!")

    function imprimeTexto(texto) {
        console.log(texto)
    }
