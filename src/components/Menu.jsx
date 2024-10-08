import React from 'react';
import Pizza from './Pizza.jsx';
import { pizzaData } from '../data.js';

export default function Menu() {

    return (
        
        <div className='grid grid-cols-4 gap-4'>
            
            {
                pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))
            }
        </div>
    );
}
