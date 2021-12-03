import React from 'react';
import './app.scss';

// import Header from './components/header/Header';
import ToDo from './components/todo/todo.js';
import People from './components/people/People';

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <ToDo />
        <People />
      </>
    );
  }
}
