import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthGithubContext } from '../contexts/AuthGithubContext';
import Categoria from '../pages/Categoria';
import Postagem from '../pages/Postagem';
import Perfil from '../pages/Perfil';
import Postar from '../pages/Postar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import Favoritos from '../components/Favoritos/Favoritos';

const Private = ({ Item }) => {
  const { signed } = useContext(AuthGithubContext);
  return signed > 0 ? <Item /> : <Login />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/posts/:publicacao/:titulo' element={<Postagem />} />
        <Route path='/categorias/:categoria' element={<Categoria />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Private Item={Perfil} />} />
        <Route path='/postar' element={<Private Item={Postar} />} />
        <Route path='/perfil/favoritos' element={<Private Item={Favoritos} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;