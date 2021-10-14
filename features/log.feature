Feature: The Internet automation Website

Background:
    Given I am on the Home page "http://automationpractice.com/index.php" 

  Scenario: As a user, I want to log in
    Given I click on login module
    And   I enter valid email
    When  I click on create account button
    And   I login with firstname lastname
    And   I enter password address city
	And   I enter state zip mobile country
	And   I click on register button
    Then  validate the Name of user is same as display


Scenario: As a user, I want to place order

    Given   I select product
    When    checking summary proceed
    And     checking address proceed
    And     checking shipping proceed
    Then    I validate the product