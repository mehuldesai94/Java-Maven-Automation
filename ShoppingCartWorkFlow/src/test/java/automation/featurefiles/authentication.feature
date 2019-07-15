@tag 
Feature: Authentication 

#Functional testing
@tag1 
Scenario Outline: Login with wrong credentials 
	Given user is at login page 
	When user enters emailaddress <emailaddress> 
	And user enters new password <password> 
	And sign in click 
	Then message displayed Login Failed 
	
	Examples: 
		| emailaddress		| password 	|
		| nodomain@wrong	| noDomain	|
		
		#Functional testing      
		@tag2 
		Scenario Outline: Login with valid credentials 
			Given user is at login page 
			When user enters emailaddress <emailaddress> 
			And user enters new password <password> 
			And sign in click 
			Then redirecte user to My Account 
			
			Examples: 
				| emailaddress		 		| password 		|
				| fpcesar2011@gmail.com		| Cognizant2019	|
				
				#Functional testing      
				@tag3 
				Scenario Outline:
				Authentication to register for an account with an invalid email 
					Given user is at login page 
					When user enters emailaddress <emailaddress> 
					And submits create an account 
					Then message displayed Registration Failed 
					
					Examples: 
						| emailaddress		|
						| noDomain@wrong	|
						
						#Functional testing
						@tag4 
						Scenario Outline:
						Authentication to register for an account with an existing email 
							Given user is at login page 
							When user enters emailaddress <emailaddress> 
							And submits create an account 
							Then message displayed Registration Failed existing email 
							
							Examples: 
								| emailaddress			|
								| fpcesar2011@gmail.com	|