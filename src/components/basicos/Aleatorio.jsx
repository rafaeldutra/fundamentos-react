import React from 'react'

export default props => {
    const { menor, maior } = props;
    return (
        <div>
            <h2>Numero aleatorio</h2>
            <p>
                <strong>Numero maior: {maior} </strong>

                <strong> Numero menor: {menor} </strong>

                Numero aleatorio entre os dois:
                <strong> {Math.floor(Math.random() * (maior - menor + 1) + menor)} </strong>
            </p>
        </div>
    )
}