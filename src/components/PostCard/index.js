import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import DefaultButton from "../DefaultButton";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de Capa do Post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <DefaultButton>
          Ler
        </DefaultButton>
      </div>
    </Link>
  );
}
