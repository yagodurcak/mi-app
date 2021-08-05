import React, {useState} from 'react';


const ItemCount = () => {

    const [contador, setContador] = useState(0);
    

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="col-3">
                <div className="card ">
                    <div className="card-body">
                        <h3 className="card-text">Contador</h3>
                        <div className="letrero">
                            <div className="card d-flex flex-row justify-content-between">
                                <a href="" className="btn btn-primary" onClick= {()=>setContador(contador - 1)} >-</a>
                                <h4>Numero:{contador}</h4>
                                <a href="" className="btn btn-primary" onClick= {()=>setContador(contador + 1)}>+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default ItemCount;
