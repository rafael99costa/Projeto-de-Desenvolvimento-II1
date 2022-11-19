import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthGithubContext } from '../contexts/AuthGithubContext';
import Linguagens from '../pages/Linguagens';
import Postagem from '../pages/Postagem';
import Perfil from '../pages/Perfil';
import Postar from '../pages/Postar';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRoutes = () => {
  const { user } = useContext(AuthGithubContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/posts/:publicacao/:titulo' element={<Postagem />} />
        <Route path='/linguagens/:linguagem' element={<Linguagens />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={user ? <Perfil /> : <Navigate to="/login"/>} />
        <Route path='/postar' element={user ? <Postar /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;