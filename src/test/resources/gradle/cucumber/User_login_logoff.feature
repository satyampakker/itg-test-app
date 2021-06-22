Feature: Admin logs off of site

	Background: Admin is able to login
	Given I open the chrome browser and the webapp
	And I input "Admin" Credentials
	When I click the sign-in button
	Then I will successfully be logged in


	
	Scenario: Admin logs off of site
	
	Given I am logged onto the site
	When I click on the movie tab
	And I click on the log off button
	Then I am will be successfully logged out
	And i will be sent back to the sign in screen
