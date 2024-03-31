import logo from './logo.svg';
import './App.css';
import TableSelector from './ui_components/TableSelector.jsx';
import { DateTimeSelector } from './ui_components/DateTimeSelector.jsx';
import { Menu } from './ui_components/Menu.jsx';
import { OrderButton } from './ui_components/OrderButton.jsx';
import { Main } from './ui_components/Main.jsx';
import {Success} from './ui_components/Success.jsx';
import { NotFound } from './ui_components/NotFound.jsx';
import React from 'react';
import {BrowserRouter as Router, Link, Routes as Switch, Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div className='App'>
    //     <TableSelector />

    //     <DateTimeSelector />

    //     <Menu />

    //     <OrderButton />
    // </div>

    <Router>
    <div className='App'>

      <h1 className="app-header">Restaurant</h1>

      <Switch>
        <Route path="/main" element={<Main/>}/>
        <Route path="/table_selection" element={<TableSelector/>}/>
        <Route path="/date_time_selection" element={<DateTimeSelector/>} />
        <Route path="/dishes_selection" element={<Menu/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
