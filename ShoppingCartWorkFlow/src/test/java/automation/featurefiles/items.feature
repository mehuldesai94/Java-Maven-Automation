@tag 
Feature: Items 

#Functional testing
@tag1 
Scenario: Add an item to the Cart 
	Given user is at the store page 
	Then hover over on item and add item to cart 
	
	#Functional testing
@tag2 
Scenario: Items by Category 
	Given user is at the store page 
	Then Hover over on “Women” nav bar and click on “Summer Dresses” from the sub-menu 
	
  