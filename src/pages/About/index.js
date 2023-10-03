import styles from "./About.module.css";

import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Douglas Santos!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Tenho 20 anos, gosto muito de conhecer
        coisas novas e sempre estar em evolução.
      </p>
      <p className={styles.paragrafo}>
        Desde de pequeno sempre me interessei por tecnologia. Tive e ainda tenho
        o pé em outras áreas como a música e os esportes mas a principal é a
        área de TI, ainda mais por conta do mundo estar se tornando um local
        totalmente dependente da tecnologia não é mesmo?
      </p>
      <p className={styles.paragrafo}>
        Atualmente estou cursando ADS - Análise e Desenvolvimento de Sistemas no
        Ceub de Taguatinga/DF. Estou no 4º semestre e ansioso para finalizar essa etapa e
        adentrar cada vez mais nesse mercado imenso que é o da tecnologia.
      </p>
    </PostModelo>
  );
}
