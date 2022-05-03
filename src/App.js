import React from 'react';

import Main from './components/Main';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Asetukset from './routes/Asetukset';
import Muistutus from './routes/Muistutus';
import Roskakori from './routes/Roskakori';
import Tunnisteet from './routes/Tunnisteet';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<><Menu/><Main/></>}/>
        <Route exact path='/muistutus' element={< Muistutus />}/>
        <Route exact path='/tunnisteet' element={< Tunnisteet />}/>
        <Route exact path='/roskakori' element={< Roskakori />}/>
        <Route exact path='/asetukset' element={< Asetukset />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
