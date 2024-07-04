Feature: Login Zero Bank

    As a valid user
    I want to Login into website

Scenario: Login with valid user
    Given I open login page Zero Bank
    When I click login button
    Then I can see my account summary
