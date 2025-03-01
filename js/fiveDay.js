/* Para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma: Caso você adicione na sua lista: banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca. O programa deverá imprimir, por exemplo: Lista de compras:
Frutas: banana, tomate, maçã, uva, abacate
Laticínios: leite vegetal, leite de vaca, leite em pó
Congelados:
Doces: chiclete e bala de ursinho. */

const categorias = {
    1: "Frutas",
    2: "Laticínios",
    3: "Congelados",
    4: "Doces",
    5: "Outros"
};

function obterCategoria() {
    let categoria;
    do {
        categoria = prompt(`Qual a categoria do produto?\n1. ${categorias[1]}\n2. ${categorias[2]}\n3. ${categorias[3]}\n4. ${categorias[4]}\n5. ${categorias[5]}`);
    } while (!categorias[categoria]); 
    return categoria;
}

function listaCompras() {
    const compras = {
        Frutas: [],
        Laticínios: [],
        Congelados: [],
        Doces: [],
        Outros: []
    };
    let incluir;
    while (true) {
        incluir = prompt("Você deseja adicionar um item na sua lista de compras? (sim/não)").toLowerCase();
        if (incluir === 'não') {
            break;
        } else if (incluir !== 'sim') {
            alert("Por favor, responda com 'sim' ou 'não'.");
            continue; 
        }

        let item = prompt("Qual item você deseja incluir?").trim();
        if (item) {
            let categoria = obterCategoria();
            compras[categorias[categoria]].push(item);
        } else {
            alert("Nome do item inválido. Tente novamente.");
        }
    }

    if (Object.values(compras).some(arr => arr.length > 0)) {
        let listaFormatada = "LISTA DE COMPRAS:\n\n";

        for (const [categoria, itens] of Object.entries(compras)) {
            if (itens.length > 0) {
                listaFormatada += `- ${categoria}: ${itens.join(", ")}\n`;
            }
        }
        alert(listaFormatada);
    } else {
        alert("A sua lista está vazia.");
    }
}

listaCompras();


