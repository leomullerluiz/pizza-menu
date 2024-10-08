// Objetivo do projeto: 
//      Aplicar os conceitos básicos de React: components, props, jsx.
//      Criar componentes reutilizaveis.
//      Listas de renderização
//      Renderização condicional
// -----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';


function App() {
    
    return (
        <div className='bg-amber-400 h-screen pt-5'>
            <Header />

            <Menu />

            <Footer />
        </div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
