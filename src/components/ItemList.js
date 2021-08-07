import React, { useEffect, useState} from 'react';
import Item from './Item';



const ItemList = () => {

    const productos=[{
        id: 1,
        nombre: "Notebook",
        precio: 10,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis?",
        img: "https://i.imgur.com/3VTaSeb.png"
    },
    {
        id: 2,
        nombre: "Televisor",
        precio: 50,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis?",
        img: "https://i.imgur.com/3VTaSeb.png"
    },{
        id: 3,
        nombre: "Tostadora",
        precio: 100,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis?",
        img: "https://i.imgur.com/3VTaSeb.png"
    },
    {
        id: 4,
        nombre: "Monitor",
        precio: 1000,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis?",
        img: "https://i.imgur.com/3VTaSeb.png"
    }
];

    const [tienda, setTienda] = useState([]);

    useEffect(() => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (productos) {
                    resolve("hay data");
                    setTienda(productos)
                } else {
                    reject("no hay data")
                }
                
            }, 3000);


            
        })
        
       
        }
    , []);

 

    return (
      <div className="container mt-5">
        <div className="row">
       
           

            {tienda.map((product) => (
              <Item nombre={product.nombre} precio={product.precio} img= {product.img}/>
            ))}

           

        </div>
      </div>
    );
}
 
export default ItemList;