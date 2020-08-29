import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

function App() {
    return (
        <div className="menu">
            <Link to='/cadastro' className='link'>Cadastrar Pessoas </Link>
            <Link to='/' className='link'>Mostrar Agenda</Link>
        </div>
    );
}

export default App;
