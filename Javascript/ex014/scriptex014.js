function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'Imagens/manha.png'
        document.body.style.background = '#00FFFF'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'Imagens/tarde.png'
        document.body.style.background = '#F4A460'
    } else {
        img.src = 'Imagens/noite.png'
        document.body.style.background = '#483D8B'
    }
}

