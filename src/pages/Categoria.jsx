import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardPublicacoes from "../components/CardPublicacoes/CardPublicacoes";
import { PublicacoesContext } from "../contexts/PublicacoesContext";
import "../styles/pages/categoria.scss";

const Categoria = () => {
  const { categoria } = useParams();
  const { postsList } = useContext(PublicacoesContext);

  const posts = postsList
  .filter((post) => post.categoria.toLowerCase() === categoria)
  .map((post) => (
    <CardPublicacoes
      key={post.id}
      id={post.id}
      titulo={post.titulo}
      categoria={post.categoria}
      descricao={post.descricao}
      link={post.link}
      notas={post.notas}
      data_postagem={post.data_postagem}
      usuario={post.usuario}
    />
  ))
  
  return (
    <span className="categoria">
      {
<<<<<<< HEAD
        posts.length > 0 ? posts : (<h1>Não temos nenhuma postagem aqui. Você pode ser o primeiro a postar nessa categoria!</h1>)
=======
        postsList
          .filter((post) => post.categoria.toLowerCase() === categoria)
          .map((post) => (
            <CardPublicacoes
            key={post.id}
            id={post.id}
            titulo={post.titulo}
            categoria={post.categoria}
            descricao={post.descricao}
            link={post.link}
            notas={post.notas}
            data_postagem={post.data_postagem}
            usuario={post.usuario}
            />
          ))
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)
      }
    </span>
  )
}

export default Categoria;