import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../../json/posts.json";
import PostModelo from "../../components/PostModelo";

import "./Post.css";
import DefaultPage from "../../components/DefaultPage";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <h1>Post Não Encontrado...</h1>;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.npg`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
