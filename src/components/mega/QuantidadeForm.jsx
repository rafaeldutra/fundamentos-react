import React from "react";


const QuantidadeForm = props =>  {
    return (
        <div>
            <div>
                        <label htmlFor="quantidadeInput">Quantidade:</label>
                        <input 
                            type="number" 
                            min="1"
                            max="20"
                            id="quantidadeInput" 
                            value={props.quantidadeNumerosPassados} 
                            onChange={e => props.setQuantidadeNumeros(+e.target.value)}
                        />
                    </div>
        </div>
    )
}

export default QuantidadeForm