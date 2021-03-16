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
3. **src/Components** : where all components are located.
4. **src/Components/Shared** : where commonly shared components are located.
5. **src/Components/Pages** : where all components for each PAGES are located.
6. **src/Errors** : where all ERRORS will be located (Not yet used for now).
7. **src/Helpers** : where all Helpers will be located.
8. **src/Interfaces** : where all interfaces(for TypeScript) are located.
11. **src/Validations** : where all VALIDATIONS will be located (Not yet used for now).
12. **src/App.tsx** : Main App file where all routes are listed

# What's next?
Will still continue on updating as I read more on the best practices in React. Adding more features and maybe even making it a REAL usable app in the future.

# Install required packages
npm install

# Development
npm start

# Production Build
npm build

# Running Dummy Back-end
npm run server

# What it currently looks like
![image](https://user-images.githubusercontent.com/64432607/111311012-f275a500-861a-11eb-84cf-b75c584d1be5.png)

# Note
Any feedback and suggestions will be greatly appreciated!
