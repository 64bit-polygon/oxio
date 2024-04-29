# Form and table assignment

This project was an assignment for a potential employer. You can see it live [here](https://oxio-table.web.app/).

## Summary of assignment

- Create a sortable table with React, with content coming from a `GET` request.
- Create a form to add rows to the table via `POST` requests.
- The table had to be mobile friendly
- The project had to follow [WCAG guidelines](https://wcag.com/resource/what-is-wcag/).
- I should implement the UI/UX design myself.
- The form had to have error handling and some feedback is a call is successful.
- The sorting and error handling should have unit test.

## Technology used

JS Framework: [**React**](https://react.dev/)

Build tool: [**Vite**](https://vitejs.dev/)

State management: [**Recoil**](https://recoiljs.org/)

Testing framework: [**Jest**](https://jestjs.io/)

Hosting: [**Google firebase**](https://firebase.google.com/)

Dummy API calls: [**mockapi**](https://mockapi.io/)

Styling: [**SCSS**](https://sass-lang.com/)

## Architecture

`/public`: holds all static assets (fonts and images). `vite` allows easy access to these assets.

`/src/components`: Holds all of the `React` components used, the main ones being `<App />`, `<InputForm />`, and `<DataTable />`

`/src/state`: Holds the `atoms` & `selectors` used in the global store

`/src/styles`: Global styles, with each `.scss` holding seperate concerns

`/src/utils`: any utils and their unit tests

## State management

I'm using `Recoil` for state management for the table. It's generally best practice to put response data in a global store, it also mitigates prop drilling. The `GET` call to populate the store is called on initiation using `Recoil`'s `initializeState`. This occurs before the page is rendered so the loading feels fast. When a new entry is added via the form, a `POST` call is made to the dummy API. If successful a `GET` call is made to refresh all the entries in the global store.

## Scripts

`$ npm run dev`: starts the server on `http://localhost:5173/`

`$ npm run preview`: previews the built project in `/dist` on `http://localhost:4173/`

`$ npm run build`: builds the the project for production to `/dist`

`$ npm run tests`: runs `jest` unit tests on utils in the `/utils` directory

## Design / styling notes

The layout of the table shifts drastically for mobile. This is all done with `.scss` and should not be a concern for screen readers as the appropriate `WAI-ARIA` roles are set on the table elements.

I used the design of a table in a personal project (https://cutups.io/, I was the developer and designer on it) for the desktop layout of the table. Since that project used `@font-face` fonts I used them here as well.