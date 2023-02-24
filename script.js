function toggleMode() {
    const html = document.documentElement
    
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }


    // Todo o comentario acima é um jeito de fazer o 
    // mesmo que foi feito abaixo, ligar e desligar o light.
    html.classList.toggle('light')



// IMAGEM
// pegando a imagem
    const img = document.querySelector('#profile img')

// substituindo a imagem
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/Avatar.light.png')
        img.setAttribute('alt', 'Foto da Karina sorrindo com casaco rosa e folhas de outono ao fundo')
    } else {
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Foto da Karina de oculos escuros com predios ao fundo')
    }
}