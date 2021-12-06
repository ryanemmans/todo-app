# Context API

Author: Ryan Emmans

## Summary of Problem Domain

### To Do List Manager

Phase 1/2: Incorporate configuration settings to the application

Phase 3: Adding security and access controls to the application.

Phase 4: Integrating with a live API

### **Phase 1 Requirements**

- Style the application using the Blueprint Component API

- Properly modularize the application into separate components

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items

### **Phase 2 Requirements**

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items
- Provide the users with a form where they can change the values for those settings
  - This should be given in the form of a new component, perhaps linked to from the main navigation
- Save the users choices in Local Storage
- Retrieve their preferences from Local Storage and apply them to the application on startup

### **Phase 3 Requirements**

- Provide a way for other users to create new accounts.
- Provide a way for all users to login to their account.
- Make sure that To Do items are only viewable to users that have logged in with a valid account.
- Ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.
- Ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.
- Ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

## Links to application deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea299ceb-2c3f-430b-9141-2413aa27cb00/deploy-status)](https://ryanemmans-todo-app.netlify.app/)  
[GitHub Actions](https://github.com/ryanemmans/todo-app/actions)  
[Pull Requests](https://github.com/ryanemmans/todo-app/pulls?q=is%3Apr+is%3Aclosed)  

## Requirements / Notes

*Create a settings Context that can define how our components should display elements to the User.*

- Implement the React context API for defining settings across the entire application.
  - Create a context for managing application display settings and provide this at the application level.
  - Display or Hide completed items (boolean).
  - Number of items to display per screen (number).
  - Default sort field (string).
  - Manually set (hard code) those state settings in the context provider’s state, they should not be changeable.
- Consume and utilize context values throughout your components
  - Show a maximum of a certain number of items per screen in the <List /> component
    - Provide “next” and “previous” links to let the users navigate a long list of items
  - Hide or show completed items in the list
  - Optional: Sort the items based on any of the keys (i.e. difficulty)

*Pagination Notes:*

- Only display the first n items in the list, where n is the number to display per screen in your context.
  - If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
  - If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.
