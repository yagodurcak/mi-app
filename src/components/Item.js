import React from 'react';
import item from "./item.css";

const Item = (props) => {

    

    return (
      <div className="col-3">
        <div className="card carta border border-primary">
          <img
            src={props.img}
            alt=""
            className="card-img-top rounded mx-auto d-block imagen-carta"
          />
          <div className="card-body">
            <h1 className="card-title">{props.nombre}</h1>

            <h2 className="card-text">$ {props.precio}</h2>
            <button className="btn btn-primary mt-3">Comprar</button>
          </div>
        </div>
      </div>
    );
}
 
export default Item;