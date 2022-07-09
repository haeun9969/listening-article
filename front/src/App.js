import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import data from './categories/data';
import it from './categories/it';
import eco from './categories/eco';
import inter from './categories/inter';


const imagestyle = {
  height: "20vh",  
    width: "20vw",
    };
    

class App extends React.Component {
render() {
    return (
      <div className='container'>
      <div className='App'>
        <BrowserRouter>
          <Route path="/data" component={data} />
          <Route path="/it" component={it} />
          <Route path="/eco" component={eco} />
          <Route path="/inter" component={inter} />
        </BrowserRouter>
      </div>
      </div>

    );
  }
}


export default App;