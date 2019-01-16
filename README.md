# Games Store (Frontend)

Frontend project for IPP/ESTG Class "Segurança em Aplicações Web"

## Objectives

* The app was created to maintain a list of games sold by users.
* The main purpose is to avoid security problems in application, specially about validation, sanitization, unauthorized access of files and resources, password cracking etc.

## Built With

* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Javascript](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript) - Programming language.
* [Jwt-Decode](https://github.com/auth0/jwt-decode) - Decode JWT tokens.
* [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design.
* [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
* [React-Router](https://github.com/ReactTraining/react-router) - Declarative routing for React.

## Implemented Architecture and Design Patterns

* **React** - Uses some of react community patterns (Destructuring props, Function as children, High-order component, Controlled input etc).
* **Flux** - Apply Flux concepts of unidirectional data flow with components, store and dispatchers, also using contexts.
* **Web Service** - Consumes a web service to get data.
* **Material Design** - Material design implemented with Material UI components.
* **PWA** - Progressive Web App pattern, enabling reliable, fast and engaging use of it in Desktop, Web and Mobile environments.

## Main Components and Features

* **Profile** - View or update user profile.
* **Games** - View games list, add games to list and update own games.
* **Errors** - Handle errors inside form inputs, showing alerts or redirecting to error page.
* **Auth** - Enable registering, logging in, logging out and recovering password.
* **Users** - View users list or delete an user (only for users with administrator privileges).
* **Main Context** - Handle data store of application.
* **Request** - Helpers to make requests to backend, handling responses and errors.
* **Store** - Helpers to create an interface between components and app context (data store of application).

## Security Artefacts

* **JSON Web Token** - Uses a JSON Web Token to communicate with server.
* **Validation** - Validate all request parameters before doing request.

## Authors

* **Célio Ighour** - *Owner* - [Ighour](https://github.com/ighour)
* **Simona Alecs** - *Developer*