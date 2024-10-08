import React from 'react';

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 17;
    const closeHour = 23;

    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="bg-amber-400 text-center text-xl font-bold font-serif p-4">
            <p>{new Date().getFullYear()} © Pizza Menu {isOpen && (<span>- We're open until {closeHour}h. </span>)} </p>
        </footer>
    );
}