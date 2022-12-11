<<<<<<< HEAD
import React, { useContext } from "react";
import "../../styles/components/avaliacao.scss";
import { useForm } from 'react-hook-form';
import { PublicacoesContext } from "../../contexts/PublicacoesContext";
import { AuthGithubContext } from "../../contexts/AuthGithubContext";
import Button from "../Button/ButtonComponent";

const Avaliacao = ({ post }) => {
  const { register, handleSubmit } = useForm();
  const { addNota } = useContext(PublicacoesContext);
  const { user } = useContext(AuthGithubContext);

  const onSubmit = data => {
    const notas = post.notas.filter(element => element.id_pessoa === user.uid)
    if (notas.length === 0) {
      addNota(post.id, [ ...post.notas, { id_pessoa: user.uid, nome: user.reloadUserInfo.screenName, nota:parseInt(data.nota), }])
    };
    if (notas.length === 1) {
      const notas = post.notas.filter(element => element.id_pessoa !== user.uid)
      addNota(post.id, [ ...notas, { id_pessoa: user.uid, nome: user.reloadUserInfo.screenName, nota:parseInt(data.nota), }])
    }
  };
=======
import React from 'react';
import '../../styles/components/avaliacao.scss'
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)

function Avaliacao() {
  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit(onSubmit)} className="avaliacao">
      <span className="avaliacao__titulo">Gostaria de avaliar a publicação?</span>
      <ul className="rating">
        <li>
          <input type="radio" id='num1' name='rating' value='1' {...register('nota')} />
          <label htmlFor='num1'>1</label>
        </li>
=======
    <ul className="rating">
      <li>
        <input type="radio" id='num1' name='rating' value='1' />
        <label htmlFor='num1'>1</label>
      </li>
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)

      <li>
        <input type="radio" id='num2' name='rating' value='2' />
        <label htmlFor='num2'>2</label>
      </li>

      <li>
        <input type="radio" id='num3' name='rating' value='3' />
        <label htmlFor='num3'>3</label>
      </li>

      <li>
        <input type="radio" id='num4' name='rating' value='4' />
        <label htmlFor='num4'>4</label>
      </li>

      <li>
        <input type="radio" id='num5' name='rating' value='5' />
        <label htmlFor='num5'>5</label>
      </li>

      <li>
        <input type="radio" id='num6' name='rating' value='6' />
        <label htmlFor='num6'>6</label>
      </li>

      <li>
        <input type="radio" id='num7' name='rating' value='7' />
        <label htmlFor='num7'>7</label>
      </li>

      <li>
        <input type="radio" id='num8' name='rating' value='8' />
        <label htmlFor='num8'>8</label>
      </li>

<<<<<<< HEAD
        <li>
          <input type="radio" id='num9' name='rating' value='9' {...register('nota')} />
          <label htmlFor='num9'>9</label>
        </li>
        
        <li>
          <input type="radio" id='num10' name='rating' value='10' {...register('nota')} />
          <label htmlFor='num10'>10</label>
        </li>
      </ul>
      <Button type="submit">Avaliar</Button>
    </form>
=======
      <li>
        <input type="radio" id='num9' name='rating' value='9' />
        <label htmlFor='num9'>9</label>
      </li>
      
      <li>
        <input type="radio" id='num10' name='rating' value='10' />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)
  )
}

export default Avaliacao;