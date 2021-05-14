class loginElements {
    inputEmail = () => { return 'input[name="email"]' }
    inputPass = () => { return 'input[name = "password"]' }
    btnEntrar = () => { return 'button[data-testid="entrar"]' }
    loginSuccess = () => { return 'h1' }
}

export default loginElements;
