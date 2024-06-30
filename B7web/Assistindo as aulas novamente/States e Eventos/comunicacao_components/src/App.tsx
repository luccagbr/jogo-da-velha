import { useState } from 'react';
import { Botao } from './components/Botao';

const App = () => {
  const botaoEventAction = (txt: string) => {
    alert('Frase do app: ' + txt);
  }

  return (
    <div>
      <Botao text="Clicar no botão" clickFunction={botaoEventAction}/>
    </div>
  )
}

export default App
