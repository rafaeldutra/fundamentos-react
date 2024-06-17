import './App.css'
import React from 'react'

import Contador from './components/contador/Contador.jsx'
import Input from './components/formulario/Input.jsx'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

const App =  () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className='Cards'>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}/>
           
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                {/* <UsuarioInfo usuario={{}} />
                <UsuarioInfo  /> */}
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#F05E95">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Aletorio" color="#FA6900">
                <Aleatorio
                    maior={100}
                    menor={1}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parametro"  color="#E8B71A">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro"
                    nota={8.7} />
            </Card>

            <Card titulo="#01 - Primeiro componente"  color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);

export default App;