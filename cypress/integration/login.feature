#language: pt

@login
Funcionalidade: Login

    Cenário: Realizar login com sucesso
        Dado que ele acessa o site
        Quando realizar um login com "<email>" e "<senha>"
        Então usuário logado com sucesso com a mensagem: "Bem Vindo Fulano da Silva"

#    Cenário: Realizar login com email e senha inválidos
#         Dado que ele acessa o site
#         Quando realizar um login com "<email>" e "<senha>"
#         Então usuário não é logado e a mensagem: "Email e/ou senha inválidos"
    