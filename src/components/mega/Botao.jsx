import React from "react";

const  Botao = props => {
    return (
        <div>
            <button onClick={props.gerarNumerosMegaSena}>Gerar Números!</button>
        </div>
    )
}

export default Botao