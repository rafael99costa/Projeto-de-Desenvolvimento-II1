import React, { useContext, useState } from "react";
import {  useParams } from 'react-router-dom';
import { PublicacoesContext } from "../contexts/PublicacoesContext";
import { Link } from 'react-router-dom';
import Button from "../components/Button/ButtonComponent";
import { addFavoriteIcon, removeFavoriteIcon, usuariosIcon } from "../assets/icons/icons";
import "../styles/pages/postagem.scss";
import Modal from "../components/Modal/Modal";
import Avaliacao from '../components/Avaliacao/Avaliacao';
import CardPostagem from "../components/CardPostagem/CardPostagem";

const Postagem = () => {
  const { publicacao } = useParams();
  const { postsList } = useContext(PublicacoesContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
        postsList
          .filter((post) => post.id === publicacao)
          .map((post) => (
            <CardPostagem key={post.id} post={post}/>
          ))
      }
    </>
  )
};

export default Postagem;