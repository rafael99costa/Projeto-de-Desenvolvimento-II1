import { useContext } from "react";
import { AuthGithubContext } from "../../contexts/AuthGithubContext";
import Button from "../Button/ButtonComponent";
import "../../styles/components/login.scss";
import { useNavigate } from "react-router-dom";
import { githubIcon } from "../../assets/icons/icons";

const Login = () => {
  const { loginGithub, logouGithub, user } = useContext(AuthGithubContext);
  const navigate = useNavigate();
  const handleClick = () => window.location.reload(navigate('/perfil/favoritos'));

  return (
    <div className="login">
      {
        user ? 
        (
          <div className="login__perfil">
            <div className="login__card">
              <img className="login__img" src={user.photoURL} alt="imagem perfil" />
              <div className="login__nome">{user.reloadUserInfo.screenName}</div>
              <div className="login__email">{user.email}</div>
              <Button click={handleClick}>Meus Favoritos</Button>
            </div>

            <Button click={() => logouGithub()}>Logout</Button>
          </div>
        )
        : 
        (
          <Button versao="secundario" click={() => loginGithub()}>{githubIcon} Login com Github</Button>
        )
      }
    </div>
  )
}

export default Login;