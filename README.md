# Task Tracker
This is just a playground in which I started(March 16, 2021) for the purpose of learning React.
In this project, I have first tried having it in JS then manually converted them to TypesScript instead of directly making use of TypeScript upon project creation. This is just to make everything working first before getting strict on types.

The following are what has been done on this so far:
1. Add Task with just basic information (Title: string, Description: string, Date: string, Reminder: boolean)
2. Update Task Reminder
3. Delete Reminder
4. Dummy back-end run in json-server
5. Routing for SPA experience (Just had 2 pages for now. Task, which is the root page, and About, which is just a simple page to test if the routing works)

# File Structure
1. **.env** : where the base URL for the API is located.
2. **src/build** : where the production built files are located (npm build).
3. **src/Components** : where SMALL components which will be usually shared across all pages are located.
4. **src/Errors** : where all ERRORS will be located (Not yet used for now).
5. **src/Helpers** : where all Helpers will be located (Not yet used for now).
6. **src/Interfaces** : where all interfaces(for TypeScript) are located.
7. **src/Routes** : where all components for each PAGES are located.
8. **src/States** : supposedly, where all STATES will be located. Will need to check more on which place should it be placed best. This will change.
9. **src/Validations**: where all VALIDATIONS will be located (Not yet used for now).
10. **src/App.tsx **: Main App file where all routes are listed

# Development
npm start

# Production Build
npm build

