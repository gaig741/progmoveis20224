function calculoRapidinho (n){
    return Promise.resolve((n * (n+1)) / 2)
}

function f(n){
    return new Promise ((resolve, reject) => {
        resolve ((n * (n+1)) / 2)
    })
}

calculoRapidinho(10).then (res => console.log (res))


/* function calculoLongo (n){
    let p = new Promise ((resolve, reject) => {
        if (n < 0){
            reject('Só valores positivos')
        }
        else{
            let res = 0
            for(let i = 1; i <= n; i++)
                res += i
            resolve(res)
        }
    })
    return p
}

 const resultadoFuturo = calculoLongo(10)
resultadoFuturo.then ((res) => console.log(res))

calculoLongo(10) 
.then ((res) => {
    console.log ("Ok, deu certo: " + res)
})
.catch (erro => {
    console.log ("Falhou: " + erro)
}) */

/* function exemplo (){
    let p = new Promise(function(resolve, reject){
        resolve(1)
    })
    return p
}
const resultadoFuturo = exemplo()
resultadoFuturo.then((resultado) => console.log(resultado)) */


/* function exemplo(){
    return 1
}
const resultado = exemplo()
console.log(resultado) */

/* const fs = require ('fs')
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        if (erro){
            console.log ("Deu erro: " + erro)
        }
        else{
            console.log (conteudo.toString())
            const dobro = 2 * +conteudo.toString()
            const finalizar = function(erro){
                if(erro){
                    console.log("Deu erro: " + erro)
                }
                else{
                    console.log ("Salvou o dobro com sucesso")
                }
            } 
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}

abrirArquivo('arquivo.txt') */