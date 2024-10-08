import React from 'react';
import Pizza from './Pizza.jsx';

export default function Menu() {
    return (
        <div className='flex flex-col space-y-4 min-h-screen'>
            <Pizza data={0}/>
            <Pizza data={1}/>
            <Pizza data={2}/>
            <Pizza data={3}/>
            <Pizza data={4}/>
            <Pizza data={5}/>
        </div>
    );
}