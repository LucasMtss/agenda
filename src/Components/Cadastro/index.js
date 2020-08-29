import React from 'react';
import './cadastro.css'

function Cadastro() {


    function cadastrarPessoa() {

        var pessoa = { nome: '', telefone: '', email: '', categoria: '', cidade: '', uf: '', informacoes: '' }

        var ufs = document.getElementById('UFs')
        pessoa.uf = ufs.options[ufs.selectedIndex].value

        var categorias = document.getElementById('categoria')

        pessoa.categoria = categorias.options[categorias.selectedIndex].value

        pessoa.nome = document.getElementById('nome').value
        pessoa.telefone = document.getElementById('telefone').value
        pessoa.cidade = document.getElementById('cidade').value
        pessoa.email = document.getElementById('email').value
        pessoa.informacoes = document.getElementById('informacoes').value


        if (localStorage.getItem('pessoas') === null) {
            localStorage.setItem('pessoas', JSON.stringify([pessoa]));
        } else {
            localStorage.setItem(
                'pessoas',
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('pessoas')),
                    pessoa
                ])
            );
        }
    }

    return (
        <div className="cadastroPessoa">
            <label>Nome:</label>
            <input className='nome' id='nome' type='text' />
            <label>Email:</label>
            <input className='email' id='email' type='text' />
            <label>Telefone:</label>
            <input className='telefone' id='telefone' type='number' />
            <label>Cidade:</label>
            <input className='cidade' id='cidade' type='text' />
            <label>UF:</label>
            <select className="UFs" id='UFs'>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG" selected>Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
            </select>
            <label>Informações:</label>
            <input className='informacoes' id='informacoes' type='text' />
            <label>Categoria:</label>
            <select className='categoria' id='categoria'>
                <option value='cliente' selected>Cliente</option>
                <option value='fornecedor'>Fornecedor</option>
            </select>
            <div className='botoes'>
                <a href='/'><button onClick={cadastrarPessoa}>Salvar</button></a>
                <a href='/'><button>Limpar</button></a>
            </div>
        </div>
    );
}

export default Cadastro;