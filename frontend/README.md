<<<<<<< HEAD
# DevToolkit-2-Connecting-Middleware-To-Backend

Developers-Toolkit-Part-2-Middleware-To-Backend
NUS Professional Certificate for Fullstack Development

Final Assessment.

Build a database for the following CREATE TABLE customer ( email VARCHAR(32) PRIMARY KEY, name VARCHAR(32) NOT NULL pwd VARCHAR(10) ); CREATE TABLE item ( id CHAR(6) PRIMARY KEY CHECK (length(id)=6), name VARCHAR(32) NOT NULL, price NUMERIC CHECK (price>=0)); CREATE TABLE shop_order ( id CHAR(7) PRIMARY KEY, custEmail VARCHAR(32) REFERENCES customer(email), itemID CHAR(6) REFERENCES item(id), quantity INTEGER CHECK (quantity > 0), address VARCHAR(128) NOT NULL, order_date DATE NOT NULL, shipping_date DATE CHECK (shipping_date >= date OR shipping_date IS NULL));
[BACKEND] State any 5 API Specs in a Word Document. [Follow the structure given in the Slides] a. Should demonstrate CRUD operations b. Should exhibit multi-table query or joins
[BACKEND] Implement the API with Express/NodeJS.
[FRONTEND] Develop a login page with local login (userid and passwd in DB) OR using SaaS based authentication providers. [use FrontEgg or auth0]. [For auth0 refer to https://www.youtube.com/watch?v=QQwo4E_B0y8. It is done in BACKEND, so react is not required].
[CONSUMING THE API] On successful login, a. [If SaaS Login] - add the email and name to the customer table if it is not already exists. b. [SasS or Local login] - display all the shop orders of the customer with customer name, item name, item quantity and shipping date. (Note, this query will involve 3 tables).
DISCLAIMER: code is not clean and included all raw files
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 4394193 (Initialize project using Create React App)
