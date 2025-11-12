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
          <Route path='/interacaosocial' element={<Interacao />} />
          <Route path='/motora' element={<Motora />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Resgister />} />
          <Route path='/comunicacao/contar-historias' element={<ContarHistorias />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
