import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    async componentDidMount() {
        let resposta = await fetch('http://localhost:3000/series');
        const series = await resposta.json();
        this.setState({lista: series});
    }

    render() {
        console.log('Estou sendo renderizado na tela');
        return ( // Todo o HTML tem q estar detro de App
            <div className="App"> 
                Cadastro de Series
                    <form method="post">
                        <div className="form">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome"/>
                            <label htmlFor="lancamento">Lançamento</label>
                            <input type="text" id="lancamento" name="lancamento"/>
                            <label htmlFor="ano_lancamento">Ano de Lançamento</label>
                            <input type="text" id="ano_lancamento" name="ano_lancamento"/>
                            <label htmlFor="sinopse">Sinopse</label>
                            <textarea id="sinopse" name="sinopse"></textarea>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                <div className="list">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Lançamento</th>
                                <th>Temporada</th>
                                <th>Sinopse</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.lista.map(serie => {
                                return (
                                    <tr key={serie.id}>
                                        <td>{serie.nome}</td>
                                        <td>{serie.lancamento}</td>
                                        <td>{serie.temporada}</td>
                                        <td>{serie.sinopse}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
