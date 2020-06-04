
Feature: Login Funcitionality

Background: user should be registered user.
When user is registed user
Then user proceed with sign in button.


Scenario: Check Valid login Credential
Given user should be on Home page
When User enters following data
|username|password|
|admin|adminpassword|

And user clicks on login button
Then user should be successfully loggeedin







 