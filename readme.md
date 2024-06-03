# Sistema de Cadastro e Login

## Visão Geral
Este documento descreve o funcionamento de um sistema de cadastro e login, que permite aos usuários criar contas.

## Funcionalidades

### Cadastro de Usuário
- **Formulário de Cadastro:**
  - Campos:
    - Nome
    - Endereço de E-mail
    - Senha 
    

### Login de Usuário
- **Formulário de Login:**
  - Campos:
    - Nome
    - Endereço de E-mail
    - Senha
  - Validações:
    - Verificação da existência do nome cadastrado.
    - Verificação da existência do e-mail cadastrado.
    - Verificação da correspondência da nome, senha com o e-mail fornecido.

## Fluxo de Cadastro

1. O usuário acessa a página de cadastro.
2. Preenche o formulário com nome, e-mail e senha
3. Ao submeter o formulário, o sistema realiza as seguintes ações:
   - Em caso de sucesso, armazena os dados do usuário no banco de dados.
   - Em caso de erro, exibe mensagens de erro apropriadas.

## Fluxo de Login

1. O usuário acessa a página de login.
2. Preenche o formulário com nome, e-mail e senha.
3. Ao submeter o formulário, o sistema realiza as seguintes ações:
   - Verifica se o e-mail está cadastrado.
   - Verifica se a senha corresponde ao e-mail fornecido.
   - Em caso de sucesso, autentica o usuário.
   - Em caso de erro, exibe mensagens de erro apropriadas.


## Considerações de Segurança
- Senhas armazenadas de forma criptografada (hashing).
- Utilização de HTTPS para comunicação segura.

## Tecnologias Utilizadas
- **Linguagem de Programação:** JS
- **Banco de Dados:** MySQL
- **Frontend:** HTML, CSS, JavaScript

## Conclusão
Este sistema de cadastro e login é fundamental para controlar o acesso de usuários e proteger informações sensíveis. A implementação adequada de validações e medidas de segurança garante a integridade e a segurança dos dados dos usuários.
