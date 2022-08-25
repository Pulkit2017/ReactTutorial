
import './bootstrap.css';


import TodoApp from './components/todo/TodoApp';


import './App.css';
import React from 'react';
// import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
  render()
    {
        return(
            <div className="App">
            <TodoApp></TodoApp>
            </div>
 

        );

    }
  }

export default App;
