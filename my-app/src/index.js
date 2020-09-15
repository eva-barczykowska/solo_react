import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <h1>Hello, React!</h1>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Some files and what they contain:
// index.html: The HTML page template.
// index.js: The entry point of our app.
// style.css: the stylesheet for our project.
// package.json: holds various metadata relevant to the project, like dependencies.
