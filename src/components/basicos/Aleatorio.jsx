import React from 'react'

const aleatorio =  props => {
    const { menor, maior } = props;
    return (
        <div>
            <h2>Numero aleatorio</h2>
            <p>
                <strong>Numero maior: {maior} </strong>
            </p>
            <p>
                <strong> Numero menor: {menor} </strong>
            </p>

            <p>
                Numero aleatorio entre os dois:
                <strong> {Math.floor(Math.random() * (maior - menor + 1) + menor)} </strong>
            </p>
        </div>
    )
}

export default aleatorio;