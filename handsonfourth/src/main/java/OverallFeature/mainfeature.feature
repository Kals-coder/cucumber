Feature: Overall Registration Feature 

Scenario Outline: Contact Registarion 
	Given User is on Home Page 
	When Check Title of Home Page 
	Then Click the Signup Button 
	Then Enter the Details "<username>" and "<Email>"
	And Click the Signup 
	When Navigates to next page 
	
Examples:
	| username | Email |
	| mikkre | mikkly@yahoo.com | 
	
Scenario: Help for E-mail filtering issue
Given User is on Home Page 
	When Check Title of Home Page 
	Then Click the Help option
	Then Click the Email filtering issue
	Then Check the Title page
	