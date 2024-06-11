import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

const App =  () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className='Cards'>
            <Card titulo="#04 - Aletorio">
                <Aleatorio
                    maior={100}
                    menor={1}
                />
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parametro">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro"
                    nota={8.7} />
            </Card>

            <Card titulo="#01 - Primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);

export default App;