//3) Fazer um Promise verificando se o usuário é o ADM utilizando: Nome = ADM e Senha = ADM
const primeiraPromise = new Promise ((resolve, reject)=>{
    const nome = "ADM"
    const senha = "123"


if (nome === "ADM" & senha === "ADM"){
    resolve("Administrador Logado!")

}else{
    reject("Acesso não autorizado! Somente Administrador. ")
}}
)
primeiraPromise.then((p) =>{
    document.querySelector("#admPromisse").innerHTML = `Verificação: ${p}`
    console.log(p)
})
primeiraPromise.catch((p) =>{
    document.querySelector("#admPromisse").innerHTML = `Verificação: ${p}`
    console.log(p)
})