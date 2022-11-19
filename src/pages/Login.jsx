import { useContext } from "react";
import { AuthGithubContext } from "../contexts/AuthGithubContext";

const Login = () => {
  const { loginGithub, logouGithub, user } = useContext(AuthGithubContext)

  return (
    <div>
      {
        user ? (
          <>
            <h1>{user.email}</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.reloadUserInfo.screenName}</h1>
            <h1>{user.uid}</h1>
            <img className="profile-img" src={user.photoURL} alt="" />
            <button onClick={() => logouGithub()}>Logout</button>
          </>
        ) : (
          <button onClick={() => loginGithub()}>Login</button>
        )
      }
    </div>
  )
}

// email
// displayName
// photoURL
// uid
// user.reloadUserInfo.screenName

export default Login;