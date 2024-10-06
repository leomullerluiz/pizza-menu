// Objetivo do projeto: 
// Aplicar os conceitos básicos de React: components, props, jsx.
// Criar componentes reutilizaveis.
// Listas de renderização
// Renderização condicional
// -----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {pizzaData} from './data.js';

function App() {
    console.log(pizzaData);
    return (
        <div>
            <Pizza />
        </div>
    );

}

function Pizza() {

    return (
        <div className="m-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
