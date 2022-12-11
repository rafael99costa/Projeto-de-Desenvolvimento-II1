import { createContext, useContext, useEffect, useState } from "react";
import { doc, addDoc, collection, updateDoc, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthGithubContext } from "./AuthGithubContext";

const PublicacoesContext = createContext({});

const PublicacoesProvider = ({children}) => {
  const [postsList, setPostsList] = useState([]);
  const { user } = useContext(AuthGithubContext);
  
  const addPost = async (data) => {
    await addDoc(collection(db, "posts"), {
      ...data,
      notas: [],
      favoritos: [],
      data_postagem: serverTimestamp(),
      usuario: {user: user.reloadUserInfo.screenName, uid: user.uid, perfil: user.photoURL, email: user.email}
    });
  };

  const addNota = async (id, nota) => {
    await updateDoc(doc(db, "posts", id), {
      notas: nota
    });
  };

  const addFavoritos = async (id, dados) => {
    await updateDoc(doc(db, "posts", id), {
      favoritos: dados
    });
  };

  const pesquisarPublicacao = () => {};

  useEffect(() => {
    const getPosts = async () => {
      await onSnapshot(query(collection(db, 'posts'), orderBy('data_postagem', 'desc')), (snapshot) => {
        setPostsList(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      })
    };

    getPosts();
  }, []);

  return (
    <PublicacoesContext.Provider value={{ postsList, addPost, addNota, pesquisarPublicacao, addFavoritos }}>
      { children }
    </PublicacoesContext.Provider>
  );
};

export { PublicacoesProvider, PublicacoesContext };