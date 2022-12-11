import "../../styles/components/cardPostagem.scss";
import { addFavoriteIcon, removeFavoriteIcon, usuariosIcon } from "../../assets/icons/icons";
import Button from '../Button/ButtonComponent';
import Modal from "../Modal/Modal";
import Avaliacao from "../Avaliacao/Avaliacao";
import { useState, useEffect, useContext } from "react";
import { PublicacoesContext } from "../../contexts/PublicacoesContext";
import { AuthGithubContext } from "../../contexts/AuthGithubContext";

const CardPostagem = ({ post }) => {
  const { addFavoritos } = useContext(PublicacoesContext);
  const { user } = useContext(AuthGithubContext);
  const [mediaNota, setMediaNota] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [favorito, setFavorito] = useState(false);
  
  const media_nota = () => {
    setMediaNota(post.notas.map(n => n.nota).reduce((previousValue, currentValue) => previousValue + currentValue, 0) / post.notas.length);
  };

  const favoriteButton = () => {
    setFavorito(!favorito);
    
    if(!favorito === true) {
      const teste = post.favoritos.filter(element => element.id_pessoa === user.uid)
      if (teste.length <= 0) {
        addFavoritos(post.id, [...post.favoritos, { id_pessoa: user.uid, nome: user.reloadUserInfo.screenName }])
      }
    }
    if(!favorito === false) {
      const teste = post.favoritos.filter(element => element.id_pessoa !== user.uid)
      addFavoritos(post.id, [...teste])
    }
  }

  // Fix - Disable the ESLint rule
  useEffect(() => {
    const fav = post.favoritos.filter(element => element.id_pessoa === user.uid)
    if (fav.length > 0) {
      setFavorito(true);
    }
    media_nota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="cardPostagem" key={post.id}>
      <div className="cardPostagem__container">
      
        <span className="cardPostagem__titulo">{post.titulo}</span>

        <span className="cardPostagem__categoria">{post.categoria[0].toUpperCase() + post.categoria.substr(1)}</span>
        
        <span className="cardPostagem__nota">
          { post.notas.length > 0 ? mediaNota.toFixed(1) : 0 }/10
        </span>

        <span className="cardPostagem__botaoAvaliar">
          <span>
            {user ? <Button type="button" click={() => setShowModal(true)}>Avaliar</Button> : <></>}
          </span>
          <Modal show={showModal} setShow={setShowModal}>
            <Avaliacao post={post} />
          </Modal>
        </span>

        <span className="cardPostagem__botao">
          <a href={post.link}><Button type="button">Acessar conteúdo</Button></a>
        </span>

        <span className="cardPostagem__perfil">
          <img src={post.usuario.perfil} alt="imagem perfil" />
          <span>{post.usuario.user}</span>
        </span>

        <span className="cardPostagem__favoriteIcon">
          {
            user ? <button onClick={favoriteButton}>{favorito ? removeFavoriteIcon : addFavoriteIcon }</button> : <></>
          }
        </span>

        <span className="cardPostagem__quantidadeUsuarios">
          { usuariosIcon }
          <span>{post.notas.length}</span>
        </span>

        <span className="cardPostagem__descricao">
          <p>Descrição</p>
          <span>{post.descricao}</span>
        </span>

        <span className="cardPostagem__dataPostagem">
          Publicado em {post.data_postagem.toDate().toLocaleDateString()}
        </span>

      </div>
    </div>
  );
};

export default CardPostagem;