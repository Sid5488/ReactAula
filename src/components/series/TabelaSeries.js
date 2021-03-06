import React, { Component } from 'react';
import './tabelaSeries.css';

const CardView = (props) => {
    return (
        <div className="card-body card-body-flex">
            {props.series.map(serie => {
                return (
                    <div className="card card-serie" key={serie.id}>
                        <div className="card-header">
                            <h5 className="card-title">{serie.nome}</h5>
                            <h6 className="card-title text-muted">{serie.ano_lancamento}</h6>
                        </div>
                        <div className="card-body ">
                            <img src="/logo192.png" className="card-img" />
                        </div>
                        <div className="card-footer">
                            {serie.temporadas}
                            {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                            <br/>
                            <a href="#">Sinopse</a>
                            <br />
                            <button className="btn btn-outline-warning btn-sm">EDITAR</button>
                            <button className="btn btn-outline-danger btn-sm ml-1" 
                            onClick={() => {
                                if(window.confirm('Confirma a exclusão?'))
                                    props.deleta(serie.id)
                            }}>DELETE</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

class TabelaSeries extends Component {
    render() {
        const { series, deleta } = this.props;

        return (
            <div className="card">
            <div className="card-header">Lista de Séries</div>
                <CardView series={series} deleta={deleta} />
            </div>
        );
    }
}

export default TabelaSeries;