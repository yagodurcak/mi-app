import React from 'react';
import item from "./item.css";

const Item2 = () => {

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
        nombre: "Monito",
        precio: 1000,
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reiciendis?",
        img: "https://i.imgur.com/3VTaSeb.png"
    }
];

    

    return (
      <div className="card carta">
 
        <div className="card-body">

                {productos.map((product)=>(<h2>{product.nombre}</h2>))}
            <div>
            </div>

     
            <button className="btn btn-primary mt-3">Comprar</button>
        </div>
      </div>
    );
}
 
export default Item2;