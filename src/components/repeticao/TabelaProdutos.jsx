import './TabelaProdutos.css'
import React from "react";
import produtos from '../../data/produtos.js'

export default props => {

    function getLinhas() {
        return produtos.map( (produto, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}