var idade = 19

if (idade < 16) {
    console.log('Não é permitido votar')
} else if (idade < 18 || idade > 65){
    console.log('O voto é opcional')
} else {
    console.log('Voto obrigatório')
}