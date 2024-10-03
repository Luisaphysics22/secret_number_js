alert('Bem-vindo ao Jogo do Número Secreto');
let numeroMaximo = 1500;
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
let chute;
let tentativas = 1;
// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        // while não continue
        break;
    } else{
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`);
        } else{
            alert(`O número secreto é maior que ${chute}.`);
        }
        // tentativas = tentativas + 1;
        tentativas ++;
        
    }
}
// esse code aparecera no mercado: operator ternario em js
let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else{
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
