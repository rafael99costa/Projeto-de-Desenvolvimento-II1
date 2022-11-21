import React, { useContext } from "react";
import {  useParams } from 'react-router-dom';
import { PublicacoesContext } from "../contexts/PublicacoesContext";
import { Link } from 'react-router-dom';
import Button from "../components/Button/ButtonComponent";
import { addFavoriteIcon, removeFavoriteIcon, usuariosIcon } from "../assets/icons/icons";
import "../styles/pages/postagem.scss";

const Postagem = () => {
  const { publicacao } = useParams();
  const { postsList } = useContext(PublicacoesContext);

  return (
    <div className="cardPostagem">
      <div className="cardPostagem__container">
        
        <span className="cardPostagem__titulo">Entendendo Promises de uma vez por todas</span>
        
        <span className="cardPostagem__categoria">Javascript</span>
        
        <span className="cardPostagem__nota">9/10</span>

        <span className="cardPostagem__botaoAvaliar">
          <Link to="/">
            <Button type="button">Avaliar</Button>
          </Link>
        </span>
        
        <span className="cardPostagem__botao">
          <Link to="/">
            <Button type="button">Acessar conteúdo</Button>
          </Link>
        </span>

        <span className="cardPostagem__perfil">
          <img src="https://lh3.googleusercontent.com/ogw/AOh-ky1Iiw260KZlo0Yzk3Ak_pHlxnoUHVaWVwQ-TkvwYg=s32-c-mo" alt="aaa" />
          <span>rafael99costa</span>
        </span>

        <span className="cardPostagem__favoriteIcon">
          {addFavoriteIcon}
        </span>

        <span className="cardPostagem__quantidadeUsuarios">
          {usuariosIcon}
          <span>3</span>
        </span>

        <span className="cardPostagem__descricao">
          <p>Descrição</p>
          <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </span>
        </span>

        <span className="cardPostagem__dataPostagem">
          Publicado em 19/11/2022.
        </span>
      </div>
    </div>
    // <>
    //   {
    //     postsList
    //       .filter((post) => post.id === publicacao)
    //       .map((post, index) => (
    //         <span key={index}>

    //         </span>
    //       ))
    //   }
    // </>
  )
};



// key={post.id}
// id={post.id}
// titulo={post.titulo}
// categoria={post.categoria}
// descricao={post.descricao}
// link={post.link}
// notas={post.notas}
// data_postagem={post.data_postagem}
// usuario={post.usuario}

export default Postagem;