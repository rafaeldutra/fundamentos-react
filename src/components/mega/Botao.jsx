import React from "react";

const  Botao = props => {
    return (
        <div>
            <button onClick={props.gerarNumerosMegaSena}>Gerar!</button>
        </div>
    )
}

export default Botao