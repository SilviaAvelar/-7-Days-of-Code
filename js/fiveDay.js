/* Para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma: Caso você adicione na sua lista: banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca. O programa deverá imprimir, por exemplo: Lista de compras: Frutas: banana, tomate, maçã, uva, abacate Laticínios: leite vegetal, leite de vaca, leite em pó Congelados: Doces: chiclete e bala de ursinho. */

/* Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?  
A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
Por fim, ele voltará para o ciclo inicial de perguntas.
Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: “Não foi possível encontrar o item dentro da lista!”
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras. */

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let adicionarMais = "sim";

while (adicionarMais !== "não") {
    // Verifica se há itens na lista para permitir a opção "remover"
    if (frutas.length > 0 || laticinios.length > 0 || doces.length > 0 || congelados.length > 0) {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    while (adicionarMais !== "sim" && adicionarMais !== "não" && adicionarMais !== "remover") {  
        alert("Operação não reconhecida!");
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }

    if (adicionarMais === "não") {
        break;
    }

    if (adicionarMais === "remover") {
        if (frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0) {
            alert("A lista está vazia, não há itens para remover.");
            continue;
        }

        let listaAtual = `Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`;
        alert(listaAtual);

        let itemRemover = prompt("Digite o nome do item que deseja remover:");

        function removerItem(lista, nomeItem) {
            let index = lista.indexOf(nomeItem);
            if (index !== -1) {
                lista.splice(index, 1);
                return true;
            }
            return false;
        }

        if (
            !removerItem(frutas, itemRemover) &&
            !removerItem(laticinios, itemRemover) &&
            !removerItem(doces, itemRemover) &&
            !removerItem(congelados, itemRemover)
        ) {
            alert("Não foi possível encontrar o item na lista!");
        } else {
            alert(`${itemRemover} foi removido da lista!`);
        }
        continue;
    }

    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

    if (categoria === 'frutas') {
        frutas.push(comida);
    } else if (categoria === 'laticínios') {
        laticinios.push(comida);
    } else if (categoria === 'doces') {
        doces.push(comida);
    } else if (categoria === 'congelados') {
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.");
    }
}

alert(`Lista de compras final:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);


