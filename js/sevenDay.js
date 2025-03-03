/* Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código. Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela. Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão. As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos como parâmetros e retornará com o resultado da operação. Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de operação até que a pessoa deseje parar o programa. Lembre-se também de que, além do if e else, também temos o switch, muito interessante de se utilizar em casos como esse, de múltipla escolha. */

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero não é permitida.";
    }
    return a / b;
}

function calculadora() {
    let continuar = true;
    
    while (continuar) {
        let operacao = prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
        
        if (operacao === "5") {
            alert("Até a próxima!");
            continuar = false;
            break;
        }
        
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado;
        
        switch (operacao) {
            case "1":
                resultado = soma(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "2":
                resultado = subtracao(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "3":
                resultado = multiplicacao(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "4":
                resultado = divisao(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            default:
                alert("Opção inválida, tente novamente.");
        }
    }
}

// Executando a calculadora
calculadora();
