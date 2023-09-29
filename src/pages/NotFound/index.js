import style from "./NotFound.module.css";
import erro404 from "../../assets/erro_404.png";
import DefaultButton from "../../components/DefaultButton";
import { useNavigate } from "react-router-dom";

export default function NotFount() {
const navegar = useNavigate();

  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>404</span>
        <h1 className={style.titulo}>Ops! Página não encontrada.</h1>
        <p className={style.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={style.paragrafo}>
          Aguarde uns instantes e recarrege a página, ou volte para a página
          anterior!
        </p>

        <div 
          className={style.botaoContainer}
          onClick={() => navegar(-1)}
        >
          <DefaultButton tamanho="lg">Voltar</DefaultButton>
        </div>

        <img
          className={style.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos vestido como humano"
        />
      </div>
      <div className={style.espacoEmBranco} />
    </>
  );
}
