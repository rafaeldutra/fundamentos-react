import "./Mega.css";
import React, { Component } from 'react'

import Display from "./Display";
import Botao from "./Botao";
import QuantidadeForm from "./QuantidadeForm";

class Mega extends Component {
    state = {
        quantidadeNumeros: this.props.qtdeNumeros || 6,
        numeros: '32, 14, 22, 18, 5, 48',
    };

    gerarNumerosMegaSena = () => {
        var numerosGerados = '2, 5, 8, 4, 6, 11'; 
        var numControl = 0;
        var vetorNumerosGerados = [];
        while (numControl < this.state.quantidadeNumeros) {
            let numGerado = parseInt(Math.random() * (60 - 1)) + 1
            if(vetorNumerosGerados.indexOf(numGerado) === -1) {
                vetorNumerosGerados.push(numGerado);
                numControl = numControl + 1           
            }
        }
        if(vetorNumerosGerados) {
            numerosGerados = vetorNumerosGerados.join(', ');
        }
        this.setState({
            numeros: numerosGerados,
        });
    }


    setQuantidadeNumeros = (numQtde) => {
        this.setState({
            quantidadeNumeros: numQtde,
        })
    }


    render() {
        return (
            <div className="Mega">
                <h2>Gerador Números Mega Sena</h2>
                <Display numero={this.state.numeros} />
                <QuantidadeForm quantidadeNumerosPassados={this.state.quantidadeNumeros} setQuantidadeNumeros={this.setQuantidadeNumeros} />
                <Botao gerarNumerosMegaSena={this.gerarNumerosMegaSena} />
            </div>
        )
    }


}

export default Mega