import React from 'react';
import Pizza from './Pizza.jsx';
import {pizzaData} from '../data.js';

export default function Menu() {
    return (
        <div className='flex flex-col space-y-4 min-h-screen'>
            <Pizza data={0}/>
        </div>
    );
}