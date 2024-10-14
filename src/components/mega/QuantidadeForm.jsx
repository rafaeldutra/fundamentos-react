import React from "react";
import './Mega.css'


const QuantidadeForm = props =>  {
    return (
        <div>
            <div>
                        <label htmlFor="quantidadeInput" className="Mega">Quantidade:</label>
                        <input 
                            type="number" 
                            min="6"
                            max="15"
                            id="quantidadeInput" 
                            value={props.quantidadeNumerosPassados} 
                            onChange={e => props.setQuantidadeNumeros(+e.target.value)}
                        />
                    </div>
        </div>
    )
}

export default QuantidadeForm