import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PublicacoesContext } from "../../contexts/PublicacoesContext";


const FormularioPostagem = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addPost } = useContext(PublicacoesContext);
  const onSubmit = data => addPost(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <span className="fields">
        <label htmlFor="titulo">Titulo</label>
        <input placeholder="Titulo" id="titulo" {...register("titulo", { required: "Campo obrigatório!", })} />
        { errors.titulo && <span>{errors.titulo.message}</span> }
      </span>

      <span className="fields">
        <label htmlFor="descricao">Descrição</label>
        <input placeholder="Descrição" id="descricao" {...register("descricao")} />
        { errors.descricao && <span>{errors.descricao.message}</span> }
      </span>

      <span className="fields">
        <label htmlFor="link">Link da postagem</label>
        <input placeholder="Link" id="link" {...register('link', { required: "Campo obrigatório!", })} />
        { errors.link && <span>{errors.link.message}</span> }
      </span>

      <span className="fields">
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" {...register("categoria", {required: "Selecione uma opção"})}>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="typescript">Typescript</option>
          <option value="Java">Java</option>
          <option value="c">C</option>
        </select>
      </span>

      <input type="submit" />
    </form>
  );
};

// titulo
// categoria
// link
// descricao
// notas
// data_postagem

export default FormularioPostagem;