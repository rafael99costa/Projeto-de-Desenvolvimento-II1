import React, { useContext } from "react";
import "../../styles/components/avaliacao.scss";
import { useForm } from 'react-hook-form';
import { PublicacoesContext } from "../../contexts/PublicacoesContext";
import { AuthGithubContext } from "../../contexts/AuthGithubContext";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="rating">
        <li>
          <input type="radio" id='num1' name='rating' value='1' {...register('nota')} />
          <label htmlFor='num1'>1</label>
        </li>

        <li>
          <input type="radio" id='num2' name='rating' value='2' {...register('nota')} />
          <label htmlFor='num2'>2</label>
        </li>

        <li>
          <input type="radio" id='num3' name='rating' value='3' {...register('nota')} />
          <label htmlFor='num3'>3</label>
        </li>

        <li>
          <input type="radio" id='num4' name='rating' value='4' {...register('nota')} />
          <label htmlFor='num4'>4</label>
        </li>

        <li>
          <input type="radio" id='num5' name='rating' value='5' {...register('nota')} />
          <label htmlFor='num5'>5</label>
        </li>

        <li>
          <input type="radio" id='num6' name='rating' value='6' {...register('nota')} />
          <label htmlFor='num6'>6</label>
        </li>

        <li>
          <input type="radio" id='num7' name='rating' value='7' {...register('nota')} />
          <label htmlFor='num7'>7</label>
        </li>

        <li>
          <input type="radio" id='num8' name='rating' value='8' {...register('nota')} />
          <label htmlFor='num8'>8</label>
        </li>

        <li>
          <input type="radio" id='num9' name='rating' value='9' {...register('nota')} />
          <label htmlFor='num9'>9</label>
        </li>
        
        <li>
          <input type="radio" id='num10' name='rating' value='10' {...register('nota')} />
          <label htmlFor='num10'>10</label>
        </li>
      </ul>
      <input type="submit" />
    </form>
  )
}

export default Avaliacao;