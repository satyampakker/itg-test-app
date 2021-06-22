Feature: Admin logs off of site


	Scenario: Admin click forget password
	
	Given I open the chrome browser and the webapp
	When I click the forgot password link
	Then I am shown the Forgot password page
	Then I am able to enter my username into the textbox