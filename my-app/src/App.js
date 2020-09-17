import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// below code for the counter Appimport React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
//
// let counter = 0;
// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(el, document.getElementById('root'));
// }
//
// setInterval(show, 1000);

// In React, there are 2 types of components, Functional C. and Class C.
// a functinal c. is just a simple JS function
// function Hello()
//  return <h1>Hello world.</h1>;
//   }

// In order to display the component, we need to create the corresponding JSX element
// JSX is a syntax extension to JavaScript, similar to a templating language
// for our user-defined component Hello:
// const el = <Hello />
// Now we can use our user-defined component and render it on a page:
// function Hello()
//  return <h1>Hello world.</h1>;
//   }
// const el = <Hello />;
// ReactDOM,render(
//  el, document.getElemetnByID('root')
// );

// Remember: ALL COMPONENT NAMES NEED TO START WITH A CAPITAL LETTER


// Class components are used when there are more advanced interactions like forms and animations
// All class c. need to extend the React.Component class
// we can rewrite our Hello functional c. as a class component:
// class Hello extends
// React.Component {
//  render() {
//   return <h1>Hello</h1>;
//  }
//  }
// class components need to have a render method, which is in charge of telling what the page should show
