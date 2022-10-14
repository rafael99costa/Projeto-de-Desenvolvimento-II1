import React from 'react';
import Avaliacao from "../Avaliacao";
import '../../styles/components/feedbackFrom.scss';
import Button from '../Button';

const FeedbackForm = () => {
  return (
      <form className="formulario">
        <h2 className="forumalrio__titulo">Qual sua avaliação sobre o conteúdo?</h2>
        <Avaliacao />
        <Button type="submit">Enviar avaliação</Button>
      </form>   
  )
}

export default FeedbackForm;