import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { app, providerGithub } from "../config/firebase";

const AuthGithubContext = createContext({});

const AuthGithubProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const loginGithub = async () => {
    await signInWithPopup(auth, providerGithub)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser({...user, token});
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GithubAuthProvider.credentialFromError(error);
        console.log(`${errorCode}: ${errorMessage}`)
      });
  };

  const logouGithub = async () => {
    await signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      console.log(error)
    });
  };  

  return (
    <AuthGithubContext.Provider
      value={{ loginGithub, logouGithub, user, signed: !!user }}
    >
      { children }
    </AuthGithubContext.Provider>
  );
};

export { AuthGithubContext, AuthGithubProvider };