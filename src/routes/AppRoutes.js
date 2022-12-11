import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthGithubContext } from '../contexts/AuthGithubContext';
import Categoria from '../pages/Categoria';
import Postagem from '../pages/Postagem';
import Postar from '../pages/Postar';
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import Favoritos from '../components/Favoritos/Favoritos';
import Menu from '../components/Menu/Menu';

const Private = ({ Item }) => {
  const { signed } = useContext(AuthGithubContext);
  return signed > 0 ? <Item /> : <Home />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/posts/:publicacao/:titulo' element={<Postagem />} />
        <Route path='/categorias/:categoria' element={<Categoria />} />
        <Route path='/postar' element={<Private Item={Postar} />} />
        <Route path='/perfil/favoritos' element={<Private Item={Favoritos} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;