import React from 'react';

export default function Pizza(props){

    return (
        
        <div className="p-6 mt-3 w-80 mx-auto bg-amber-200 rounded-xl shadow-lg flex items-center space-x-4 ">
            {console.log(props)}
            <div className="shrink-0">
                <img className="size-12 rounded-xl" src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{props.pizzaObj.name}</div>
                <p className="text-slate-500">{props.pizzaObj.ingredients} - <span className='text-slate-950'>${props.pizzaObj.price}</span></p>
            </div>
        </div>
    );
}
