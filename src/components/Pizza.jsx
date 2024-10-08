import React from 'react';
import { pizzaData } from '../data.js';

export default function Pizza(props){

    return (
        <div className="p-6 w-80 mx-auto bg-amber-200 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="size-12 rounded-xl" src={pizzaData[props.data].photoName} alt={pizzaData[props.data].name} />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{pizzaData[props.data].name}</div>
                <p className="text-slate-500">{pizzaData[props.data].ingredients}</p>
            </div>
        </div>
    );
}
