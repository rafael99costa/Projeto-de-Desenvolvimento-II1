import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../styles/components/formularioPostagem.scss";
import { PublicacoesContext } from "../../contexts/PublicacoesContext";


const FormularioPostagem = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch,  formState: { errors } } = useForm({
    mode:'onTouched',
    defaultValues:{
      link:'https://www.'
    }
  });
  const { addPost } = useContext(PublicacoesContext);
  const onSubmit = data => {
    addPost(data);
    navigate('/');
  };

  const linkWatch = watch('link');
  const tituloWatch = watch('titulo');
  const categoriaWatch = watch('categoria');
  const descricaoWatch= watch('descricao');
  const isValid = linkWatch && tituloWatch && categoriaWatch && descricaoWatch;

  return (
    <div className="formulario">

      <span className="formulario__title">Encontrou um bom conteúdo na internet?</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="formulario__fields formulario__link">
          <label htmlFor="link">Link da postagem*</label>
          <input placeholder="https://" id="link" {...register('link', {
            required: "Campo obrigatório!", 
            pattern: {
              value:/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
              message: "Insira uma URL válida"
            }})}
          />
          { errors.link && <span>{errors.link.message}</span> }
        </span>

        <span className="formulario__fields formulario__titulo">
          <label htmlFor="titulo">Titulo*</label>
          <input placeholder="Titulo" id="titulo" {...register("titulo", { required: "Campo obrigatório!", })} />
          { errors.titulo && <span>{errors.titulo.message}</span> }
        </span>

        <span className="formulario__fields formulario__categoria">
          <label htmlFor="categoria">Categoria*</label>
          <select name="categoria" {...register("categoria", {required: "Selecione uma opção"})} id="select-box">
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
            <option value="Java">Java</option>
            <option value="python">Python</option>
            <option value="php">Php</option>            
            <option value="kotlin">Kotlin</option>
            <option value="go">Go</option>
            <option value="roby">Ruby</option>
            <option value="c">C</option>
            <option value="csharp">C#</option>
            <option value="c++">C++</option>
            <option value="swift">Swift</option>
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="sql">Sql</option>
          </select>
        </span>

        <span className="formulario__fields formulario__descricao">
          <label htmlFor="descricao">Descrição*</label>
          <textarea placeholder="Descrição" id="descricao" {...register("descricao")} />
          { errors.descricao && <span>{errors.descricao.message}</span> }
        </span>

        <input type="submit" className="button" disabled = {!isValid} />
      </form>
    </div>
    
  );
};

export default FormularioPostagem;
