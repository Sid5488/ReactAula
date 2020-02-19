import React, { Component } from 'react';

class FormularioSeries extends Component {
    constructor() {
        super();
    }

    inputHandler = event => {
        const { name, value } = event.target;

        this.inputHandler(name, value);
    }

    enviaDados = event => {
        event.preventDefault();
        this.props.enviaDados(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const { serie } = this.props;

        return (
            <div className="card">
                <div className="card-header"><b>Cadastro de Séries</b></div>
                <div className="card-body">
                    <form method="post" onSubmit={this.enviaDados}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" value={this.state.nome} onChange={this.inputHandler} className="form-control" />
                            <label htmlFor="lancamento">Ano de Lançamento</label>
                            <input type="text" id="lancamento" name="lancamento" value={this.state.lancamento} onChange={this.inputHandler} className="form-control" />
                            <label htmlFor="temporadas">Temporadas</label>
                            <input type="text" id="temporadas" name="temporadas" value={this.state.temporadas} onChange={this.inputHandler} className="form-control" />
                            <label htmlFor="sinopse">Sinopse</label>
                            <textarea id="sinopse" name="sinopse" value={this.state.sinopse}
                                onChange={this.inputHandler} className="form-control" ></textarea>
                            <button type="submit" className="btn btn-success form-control mt-2">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormularioSeries;