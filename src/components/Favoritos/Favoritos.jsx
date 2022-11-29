import { useContext } from "react";
import { AuthGithubContext } from "../../contexts/AuthGithubContext";
import { PublicacoesContext } from "../../contexts/PublicacoesContext";
import CardPublicacoes from "../CardPublicacoes/CardPublicacoes";
import "../../styles/components/favoritos.scss";

const Favoritos = () => {
  const { postsList } = useContext(PublicacoesContext);
  const { user } = useContext(AuthGithubContext);

  return (
    <span className="favoritos">
      {
        postsList
          .filter(post => post.favoritos.some(p => p.id_pessoa === user.uid))
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
      }
    </span>
  );
};

export default Favoritos;
