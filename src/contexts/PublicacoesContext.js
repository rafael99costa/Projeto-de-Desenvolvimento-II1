import { createContext } from "react";

const PublicacoesContext = createContext();

const PublicacoesProvider = ({children}) => {

  const publicacoes = [
    {
      id: 1,
      titulo: "Entendendo-Promises-de-uma-vez",
      subtitulo: "Javascript",
      nota: 9.3,
      descricao: "Promises são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem.",
      link: "https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"
    },
    {
      id: 2,
      titulo: "React — DefaultProps & PropTypes — Plano de aula VI",
      subtitulo: "Javascript",
      nota: 9.7,
      descricao: "O conceito de DefaultProps & PropTypes são vistos em praticamente todas se não em todas as linguagens de programação pois trazem grandes benefícios ao projeto como um todo e principalmente ao desenvolvedor ou desenvolvedores que nele iram trabalhar.",
      link: "https://medium.com/@henrique.weiand/react-defaultprops-proptypes-plano-de-aula-vi-2ac0f990cdd9"
    },
    {
      id: 3,
      titulo: "The Modern JavaScript Tutorial",
      subtitulo: "Javascript",
      nota: 9.5,
      descricao: "Do básico ao avançado com explicações simples, mas detalhadas.",
      link: "https://javascript.info/"
    },
    {
      id: 4,
      titulo: "Como usar o Context no React",
      subtitulo: "Javascript",
      nota: 9.9,
      descricao: "Este tutorial mostra como usar o useContext Hook do React.",
      link: "https://www.robinwieruch.de/react-usecontext-hook/"
    },
    {
      id: 5,
      titulo: "Ultimate React Router v6 Guide",
      subtitulo: "Javascript",
      nota: 10,
      descricao: "O React Router é a biblioteca de roteamento mais popular no React, mas pode ser um pouco complicado entender alguns dos recursos mais complexos. É por isso que neste artigo vou detalhar tudo o que você precisa saber sobre o React Router para que você possa usar até os recursos mais avançados com facilidade. ",
      link: "https://blog.webdevsimplified.com/2022-07/react-router/"
    },
    {
      id: 5,
      titulo: "PROGRAMAÇÃO ORIENTADA A OBJETOS NO PYTHON",
      subtitulo: "Python",
      nota: 8.9,
      descricao: "Python já nasceu sendo uma linguagem de programação multi-paradigma, isto é: é possível programar em Python de maneira Imperativa, Funcional e também no paradigma que será abordado nesse post, utilizando conceitos da Programação Orientada a Objetos!",
      link: "https://pythonacademy.com.br/blog/introducao-a-programacao-orientada-a-objetos-no-python"
    },
  ];


  return (
    <PublicacoesContext.Provider value={{publicacoes}}>
      {children}
    </PublicacoesContext.Provider>
  );
};

export { PublicacoesProvider, PublicacoesContext };