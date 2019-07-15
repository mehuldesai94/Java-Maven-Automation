@tag 
Feature: Registration 

#Functional testing
@tag1 
Scenario Outline: Register for an account with invalid data 
	Given user is at registration page 
	When user enter emailaddress <emailaddress> 
	And user click on create new account 
	Then user enters firstname <firstName> 
	And user enters lastname <lastName> 
	And user enters password <password> 
	And user enters address <address> 
	And user enters city <city> 
	And user enters zipcode <zipcode> 
	And user selects state <state> 
	And user enters mobile <mobile> 
	And click on registration 
	Then registration fail 
	
	
	Examples: 
		| emailaddress		| firstName | lastName 	| password 	| address 	| city 	| zipcode | state 		| mobile | 
		| mehul1@gmail.com	| 	123		| 	223		| 2344 		| 			| 		| 6664 	  | Alabama		| 354631 |
		
		#Functional testing     
		@tag2 
		Scenario Outline: Register with valid credentials 
			Given user is at registration page 
			When user enter emailaddress <emailaddress> 
			And user click on create new account 
			Then user enters firstname <firstName> 
			And user enters lastname <lastName> 
			And user enters password <password> 
			And user enters address <address> 
			And user enters city <city> 
			And user enters zipcode <zipcode> 
			And user selects state <state> 
			And user enters mobile <mobile> 
			And click on registration 
			Then registration success 
			
			Examples: 
				| emailaddress		|	firstName	|	lastName	|	password	|	address				|	city	|	zipcode	|	state	|	mobile		|
				|mehul94@gmail.com	|	Mehul		|	Desai		|   mehuld		|	Seneca Residence	|	Toronto	|	45124	|	Alabama	|	4512451252	|
				
				
				
				
				
				
				
    