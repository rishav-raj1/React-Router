import React from 'react';
import './Menustyle.css';
import {Link} from 'react-router-dom';


const Menu = () => {
    return (
        <div className="Menustyle">
          <ul>
              <li> <Link to="/"> RISHAV </Link> </li>
              <li> <Link to="/BITTU"> BITTU </Link> </li>
              <li> <Link to="/CHIKU"> CHIKU </Link> </li>
          </ul>
        </div>
    )
}



export default Menu;