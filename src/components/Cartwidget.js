import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";


const CartWdiget = () => {


    return (

        <div className="icono">
       
        <FontAwesomeIcon icon={faShoppingCart} />
  
 
      </div>

      );
}
 
export default CartWdiget;