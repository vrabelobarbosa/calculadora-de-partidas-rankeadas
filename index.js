// Função responsável por calcular o saldo de vitórias do jogador
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}


// Função que define o nível do jogador com base no saldo de vitórias
function determinarNivelPorSaldo(saldo) {
    if (saldo < 10) {
        return "Ferro"; // Saldo entre 0 e 9
    } else if (saldo <= 20) {
        return "Bronze"; // Saldo entre 10 e 20
    } else if (saldo <= 50) {
        return "Prata"; // Saldo entre 21 e 50
    } else if (saldo <= 80) {
        return "Ouro"; // Saldo entre 51 e 80
    } else if (saldo <= 90) {
        return "Diamante"; // Saldo entre 81 e 90
    } else if (saldo <= 100) {
        return "Lendário"; // Saldo entre 91 e 100
    } else {
        return "Imortal"; // Saldo acima de 100
    }
}


// Função principal que executa o fluxo completo:
// 1. Calcula o saldo
// 2. Determina o nível
// 3. Exibe o resultado no console
function exibirNivelDoHeroi(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);

    const nivel = determinarNivelPorSaldo(saldoVitorias);

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
}


// Exemplo de execução
exibirNivelDoHeroi(85, 25); // Esperado: Saldo 60 → Nível Ouro
