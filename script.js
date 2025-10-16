//Informações do jogo
let numeroSecreto; //Armazena o número secreto
let tentativasRestantes = 10; //Começa com 10 tentativas
let jogoAtivo = true; //Controla se o jogo continua

//Função de inicialização (roda quando a página carrega)
function inicializarJogo(){
    //Gera um número aleatório entre 1 e 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    
    //Mostra as tentativas iniciais
    document.getElementById("tentativas").textContent = "Tentativas: " + tentativasRestantes;

    console.log("Número secreto gerado:" , numeroSecreto); 
}


//Função que processa o palpite (roda quando clica no botão)
function processarPalpite(){
    //Só continua se o jogo estiver ativo
    if(!jogoAtivo) return;

    //Pega o valor digitado
    let palpiteDoJogador = document.getElementById("palpite").value;

    //Valida se é um número entre 1  e 100
    if (palpiteDoJogador < 1 || palpiteDoJogador > 100) {
        document.getElementById("mensagem").textContent = "Digite um número entre 1 e 100";
        return;
    }

    //Decrementa as tentativas
    tentativasRestantes--;

    //Compara o palpite com o número secreto
    if (palpiteDoJogador == numeroSecreto) {
        document.getElementById("mensagem").textContent = "🎉 Você acertou!";
        jogoAtivo = false;
    } else if (palpiteDoJogador > numeroSecreto) {
        document.getElementById("mensagem").textContent = "O número secreto é MENOR"; 
    } else {
        document.getElementById("mensagem").textContent = "O número secreto é MAIOR";
    }

    //Atualiza o número de tentativas
    document.getElementById("tentativas").textContent = "Tentativas: " + tentativasRestantes;

    //Verifica se perdeu
    if (tentativasRestantes === 0 && jogoAtivo) {
        document.getElementById("mensagem").textContent = "Game Over! O número secreto era " + numeroSecreto;
        jogoAtivo = false;
    }

    //Limpa o input para o próximo palpite
    document.getElementById("palpite").value = "";
}
//Conecta o botão à função (roda quando a página carrega)
document.getElementById("botaoChutar").addEventListener("click", processarPalpite);

//Inicia op jogo (roda quando o jogo carrega)
window.addEventListener("load", inicializarJogo);