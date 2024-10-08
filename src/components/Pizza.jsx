import React from 'react';
import { pizzaData } from '../data.js';

export default function Pizza(){

    return (
        <div className="p-6 max-w-sm mx-auto bg-amber-200 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="size-12 rounded-xl" src={pizzaData[0].photoName} alt={pizzaData[0].name} />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{pizzaData[0].name}</div>
                <p className="text-slate-500">{pizzaData[0].ingredients}</p>
            </div>
        </div>
    );
}
