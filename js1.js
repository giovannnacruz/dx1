function desafio1() {
    let palavraA = document.querySelector('#A').value
    let palavraB = document.querySelector('#B').value

    var resposta = document.querySelector('#resposta');

    if (palavraA.length > palavraB.length) {
        resposta.innerHTML = ' Aldo é o vencedor'
    }
    else if (palavraB.length > palavraA.length) {
        resposta.innerHTML = 'Jucimara é a vencedora'
    }
    else { resposta.innerHTML = '*' }

}
