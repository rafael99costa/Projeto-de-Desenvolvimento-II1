import React from 'react';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Postar from '../pages/Postar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Postagem from '../pages/Postagem';
import Linguagens from '../pages/Linguagens';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/posts/:publicacao' element={<Postagem />} />
        <Route path='/linguagens/:linguagem' element={<Linguagens />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/postar' element={<Postar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;