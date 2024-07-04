const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SIGN_IN = 'Sign in';

class LoginPage {
    static visit() {
        cy.visit(URL);
    }

    static fillUsername(username) {
        cy.get(USERNAME_INPUT).type(username);
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password);
    }

    static clickSignIn() {
        cy.contains(SIGN_IN).click();
    }
}

export default LoginPage;