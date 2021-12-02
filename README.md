# Context API

Author: Ryan Emmans

## Summary of Problem Domain

### To Do List Manager

Phase 1: Incorporate configuration settings to the application

- In this phase, we’ll be adding some top-level settings for the application, so that the user can make some display choices that the app will use by default.

### **Phase 1 Requirements**

- Style the application using the Blueprint Component API

- Properly modularize the application into separate components

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items

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
