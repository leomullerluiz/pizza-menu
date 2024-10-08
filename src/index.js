import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';


function App() {

    return (
        <div className='bg-amber-400 pt-5'>
            <div className='container mx-auto'>
                <Header />
                <main className="py-8 min-h-screen">
                    <Menu />
                </main>
            </div>
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
