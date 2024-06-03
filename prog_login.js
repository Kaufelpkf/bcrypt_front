let res_login = document.getElementById('res_login')
let log = document.getElementById('log')

log.addEventListener('click',()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome : nome,
        email: email,
        senha: senha
    }
    console.log(dados)

    fetch('http://localhost:3000/logar',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res_login.innerHTML = "Logado com sucesso! <br>" 
        res_login.innerHTML += "User: " + dados.nome + "<br>"
        res_login.innerHTML += "Email: " + dados.email + "<br>"
        res_login.style.color = "black"
    }).catch((err)=>{
        console.error("erro na busca de dados",err)
    })
})