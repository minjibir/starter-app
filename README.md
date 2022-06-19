In an attempt to track our expenses in order to make an informed decision for the day-to-day groceries,
we need a simple application that could help us keep track of each receipt of a given purchase.

We intend to keep it simple to track just the name, price, barcode of each item. And for each purchase associated with a given receipt we collect only the list of items, receipt number, total amount, and the date of the purchase.

Our goal is to write a frontend application that will archieve that.


GOAL
informed decision

NOUN - Data points
Item - (name, price, barcode),
Receipt - (receipt number, total amount, date, list-of-items)

VERB
keep track purchase, 
track-expenses


1 - Create new angular project
		ng new <project-name>

2 - Interpolation
		{{name-of-variable}} // component.ts

3 - NgModel to bind form element to a variable
		> Import FormsModule in app.modules.ts
		> [(ngModel)] = "name-of-variable-in-.ts"
		