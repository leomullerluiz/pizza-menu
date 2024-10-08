import React from 'react';
import Pizza from './Pizza.jsx';

export default function Menu() {
    return (
        <div className='flex flex-col space-y-4'>
            <Pizza />
            <Pizza />
        </div>
    );
}