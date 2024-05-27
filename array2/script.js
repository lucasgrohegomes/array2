// Define uma váriavel para as casas do tabuleiro.
let casa

// Define uma váriavel de Array para 8 linhas.
let tabuleiro = new Array(8)

// Define um looping para fazer 8 colunas para cada linha.
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}

// Define loopings para cada coordenada de linha / coluna.
for(let i = 0; i < tabuleiro.length; i++){

    // Define uma quebra de linha para cada 8 botões.
    quebra_linha = document.createElement('br')
    document.body.append(quebra_linha)

    for(let j = 0; j < tabuleiro[i].length; j++){

    // Define botões para cada coordenada de casas.
    casa = document.createElement('button')
    casa.setAttribute('id', 'cs' + i + '' + j)
    casa.setAttribute('type', 'button')

    // Define as casas que serão pintadas e as casas que terão peças.
    if(i % 2 == 0 && j % 2 != 0){
        casa.setAttribute('class', 'Casa')
        if(i < 3){
        casa.style.color='red'
        casa.append(document.createTextNode('O'))
        }
        if(i > 4){
        casa.append(document.createTextNode('X'))
        }
        
    }
    else if(i % 2 != 0 && j % 2 == 0){
        casa.setAttribute('class', 'Casa')
        if(i < 3){
        casa.append(document.createTextNode('O'))
        }
        if(i > 4){
        casa.append(document.createTextNode('X'))
        }
    }

    document.body.append(casa)



    }
}

function marcaCasa(nomeCasa){
    
}


