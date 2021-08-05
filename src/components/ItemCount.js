import React, {useState, useEffect} from 'react';


const ItemCount = () => {
  const [contador, setContador] = useState(1);

  
  const Stock = (stock, contador) => {
      
    if (stock == contador) {

        return stock
                
    } else { 
        
        return contador
    }
  }
  




  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-3">
        <div className="card ">
          <div className="card-body">
            <h3 className="card-text">Contador</h3>
            <div className="letrero">
              <div className="card d-flex flex-row justify-content-between">
                <a
                  className="btn btn-primary"
                  onClick={() => setContador(contador - 1)}
                >
                  - 
                </a>
                <h4>Numero:{contador}</h4>                
                <a
                  className="btn btn-primary"
                  onClick={() => setContador(contador + 1)}
                >
                  +
                </a>
              </div>
            </div>

            <h3>{Stock(10, contador)}</h3>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
