// Projeto semanal 7
// NODE/EXPRESS
// ➔ Que tal criar uma ferramenta no terminal que vai auxiliar
// desenvolvedores no dia a dia com CSS?

// ◆ Vamos usar o Node para montar um código que vai receber uma
// lista de propriedades de CSS (ex: background-color, font-size,
// text-align) e vai devolver essa lista ordenada de A-Z. Ordenar o CSS
// ajuda a encontrar mais rápido a propriedade que precisamos
// alterar .

// ◆ O código deve rodar em um laço que vai receber propriedades até
// a pessoa digitar a palavra “SAIR”, quando isso acontecer vai ser
// impresso no terminal a lista das propriedades ordenadas de A-Z
// uma em cada linha.

// ➔ Exemplo:
// ◆ Input:
// font-size
// background-color
// text-align
// border
// SAIR
// ◆ Resultado:
// background-color
// border
// font-size
// text-align

// ➔ A entrega deve ser um link para o repositório do projeto no Github

import prompt from 'prompt-sync'

const input = prompt()

function checkList(items){
    let list = []
    while (items !== 'SAIR'){
        list.push (items)
        items = input('Adicionar itens: ')
    }
    console.log(list.sort().join('\n'))
}

checkList()