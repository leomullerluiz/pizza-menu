import React from 'react';

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <div className="bg-amber-400 text-center text-xl font-bold font-serif p-4">
            <p>{new Date().getFullYear()} © Pizza Menu - {isOpen ? "Open" : "Close"} </p>
        </div>
    );
}