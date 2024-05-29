let res_cadastro = document.getElementById('res_cadastro')
let cadastro = document.getElementById('cadastro')

cadastro.addEventListener('click',()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome : nome,
        email: email,
        senha: senha
    }
    console.log(dados)

    fetch('http://localhost:3000/cadastrar',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res_cadastro.innerHTML = "Usuário cadastrado com sucesso!"
    })
})