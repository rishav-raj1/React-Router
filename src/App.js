import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Rishav from './Rishav';
import Bittu from './Bittu';
import Chiku from './Chiku';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
     <Menu />
     <Switch>
     <Route path="/" exact component= {Rishav} />
     <Route path="/Bittu" exact component= {Bittu} />
     <Route path="/Chiku" exact component= {Chiku} />

     </Switch>
     
    </div>
    </BrowserRouter>
  );
}



export default App;
