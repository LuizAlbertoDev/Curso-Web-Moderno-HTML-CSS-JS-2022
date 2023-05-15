const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + ' !' // nao poder quebrar linha

const template = `
    olá
    ${nome} !` // usando crase ( ` ) pode ser quebrada a linha e é usado ${} 

    console.log(concatenacao, template)

    //expressoes
    console.log(`1 + 1 = ${1 + 1}`) //so vai ser somado oque estiver dentro do ${}

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')} !`)