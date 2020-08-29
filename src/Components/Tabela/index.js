import React, { useState } from 'react';
import './tabela.css'

function Tabela(props) {
    const [pessoaSelecionada, setPessoaSelecionada] = useState([])


    var tabela = []
    props.pessoas.forEach((pessoa) => {
        tabela.push(<tr>
            <button onClick={() => expandirTabela(pessoa)}>{pessoa.nome}</button>
            <td>{pessoa.telefone}</td>
            <td>{pessoa.email}</td>

        </tr>)
    }
    )

    function expandirTabela(pessoa) {
        if (pessoa.nome)
            setPessoaSelecionada(pessoa)
        var display = document.getElementById('tabelaExpandida').style.display
        if (display === 'flex') {
            document.getElementById('tabelaExpandida').style.display = 'none'
            document.getElementById('tabela').style.width = '90%'
            document.getElementById('tabela').style.marginLeft = '5%'
            document.getElementById('tabelaPessoas').style.display = 'flex'
        } else {
            document.getElementById('tabelaExpandida').style.display = 'flex'
            document.getElementById('tabela').style.width = '100%'
            document.getElementById('tabela').style.marginLeft = '0'
            document.getElementById('tabelaPessoas').style.display = 'none'
        }
    }

    return (
        <div className='tabela' id='tabela'>

            <table className='tabelaPessoas' id='tabelaPessoas'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {tabela}
                </tbody>
            </table>

            <table className='tabelaExpandida' id='tabelaExpandida'>
                <thead>
                    <button onClick={expandirTabela} className='botaoFechar'>X</button>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Categoria</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Informações</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{pessoaSelecionada.nome}</td>
                        <td>{pessoaSelecionada.telefone}</td>
                        <td>{pessoaSelecionada.email}</td>
                        <td>{pessoaSelecionada.categoria}</td>
                        <td>{pessoaSelecionada.cidade}</td>
                        <td>{pessoaSelecionada.uf}</td>
                        <td>{pessoaSelecionada.informacoes}</td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
}

export default Tabela;
