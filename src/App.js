import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screen/Home/Home'
import Comunicacao from './screen/Comunicacao/Comunicacao'
import Sensoriais from './screen/Sensoriais/Sensoriais'
import Cognitivo from './screen/Cognitivo/Cognitivo'
import Interacao from './screen/Interacao/Interacao'
import Motora from './screen/Motora/Motora'
import Login from './screen/Login/Login';
import Resgister from './screen/Register/Register';
import ContarHistorias from './screen/Comunicacao/ContarHistorias/ContarHistorias';
import CaixaSensorial from './screen/Sensoriais/CaixaSensorial/CaixaSensorial';
import MassinhaMaizena from './screen/Sensoriais/MassinhaMaizena/MassinhaMaizena';
import PintarPes from './screen/Sensoriais/PintarPes/PintarPes';
import JogoMemoria from './screen/Cognitivo/JogoMemoria/JogoMemoria';
import QuebraCabeca from './screen/Cognitivo/QuebraCabeca/QuebraCabeca';
import JogoImitacao from './screen/Interacao/JogoImitacao/JogoImitacao';
import PincarObjetos from './screen/Motora/PincarObjetos/PincarObjetos'
import AcerteAlvo from './screen/Motora/AcerteAlvo/AcerteAlvo'
import Labirinto from './screen/Motora/Labirinto/Labirinto'

import NavBar from './layouts/NavBar/NavBar';




function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exect element={<Home />} />
          <Route path='/comunicacao' element={<Comunicacao />} />
          <Route path='/sensoriais' element={<Sensoriais />} />
          <Route path='/cognitivo' element={<Cognitivo />} />
          <Route path='/interacao-social' element={<Interacao />} />
          <Route path='/motora' element={<Motora />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Resgister />} />
          <Route path='/comunicacao/contar-historias' element={<ContarHistorias />} />
          <Route path='/sensoriais/caixa-sensorial' element={<CaixaSensorial />} />
          <Route path='/sensoriais/massinha-maizena' element={<MassinhaMaizena />} />
          <Route path='/sensoriais/pintar-pes' element={<PintarPes />} />
          <Route path='/cognitivo/quebra-cabeca' element={<QuebraCabeca />} />
          <Route path='/cognitivo/jogo-memoria' element={<JogoMemoria />} />
          <Route path='/interacao-social/jogo-imitacao' element={<JogoImitacao />} />
          <Route path='/motora/pincar-objetos-pequenos' element={<PincarObjetos />} />
          <Route path='/motora/acerte-alvo' element={<AcerteAlvo />} />
          <Route path='/motora/labirinto' element={<Labirinto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
