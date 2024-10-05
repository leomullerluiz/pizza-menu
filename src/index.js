// Objetivo do projeto: 
// Aplicar os conceitos básicos de React: components, props, jsx.
// Criar componentes reutilizaveis.
// Listas de renderização
// Renderização condicional
// -----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){

    return(
        <div>
            <h1 className='text-3xl font-bold underline'>Pizza Menu</h1>
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
