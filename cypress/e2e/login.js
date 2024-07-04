import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open login page Zero Bank', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  });
  
When('I click login button', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click();
    cy.get('#login_form > div.form-actions > input').click();
  });
  
Then('I can see my account summary', () => {
    cy.get('body > div.wrapper > div.container > div > div:nth-child(2) > div > div > h2:nth-child(1)').should('contain.text', 'Cash Accounts')
  });
  