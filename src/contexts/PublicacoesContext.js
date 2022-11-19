import { createContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const PublicacoesContext = createContext({});

const PublicacoesProvider = ({children}) => {
  const [postsList, setPostsList] = useState([]);

  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  const addPost = async (data) => {
    await addDoc(collection(db, "posts"), {
      ...data,
      notas: {nota1: {id_pessoa: "34wc33", nome: "Rafael Costa", nota: 9}, nota2: {id_pessoa: "34f3", nome: "Lucas Costa", nota: 9}},
      data_postagem: serverTimestamp()
    });
  };

  const addNota = async () => {};

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PublicacoesContext.Provider value={{ postsList, addPost, addNota }}>
      {children}
    </PublicacoesContext.Provider>
  );
};

export { PublicacoesProvider, PublicacoesContext };