import React from 'react';
import Tabela from '../Tabela'
import Menu from '../Menu'
import './home.css'

function Home() {

    var pessoas = JSON.parse(localStorage.getItem('pessoas'))
    if (pessoas == null) {
        var novaPessoa = {}
        pessoas = []
        novaPessoa.nome = ''
        novaPessoa.telefone = ''
        novaPessoa.email = ''
        novaPessoa.categoria = ''
        novaPessoa.cidade = ''
        novaPessoa.uf = ''
        novaPessoa.informacoes = ''
        pessoas.push(novaPessoa)
    }

    return (
        <div className="home">
            <header>
                <p className='titulo'>Minha Agenda</p>
            </header>
            <Menu />
            <Tabela pessoas={pessoas} />
        </div>
    );
}

export default Home;