import logo from './logo.svg';
import './App.css';
import { TableSelector } from './ui_components/TableSelector.jsx';
import { DateTimeSelector } from './ui_components/DateTimeSelector.jsx';
import { Menu } from './ui_components/Menu.jsx';
import { OrderButton } from './ui_components/OrderButton.jsx';

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

    <div className='App'>
        <TableSelector />

        <DateTimeSelector />

        <Menu />

        <OrderButton />
    </div>
  );
}

export default App;
