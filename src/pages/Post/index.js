import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "../../json/posts.json";
import PostModelo from "../../components/PostModelo";
import DefaultPage from "../../components/DefaultPage";

import "./Post.css";
import PostCard from "../../components/PostCard";

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
            <section>
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.npg`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
              </PostModelo>
              <section className="container-more-posts">
                <h1 className="title-more-posts">Outros Posts que você pode gostar</h1>
                <div className="morePosts">
                  {posts
                    .filter((p) => p.id !== post.id) // Exclua o Post atual
                    .slice(0, 4) // Pegue os 4 primeiros posts após a exclusão
                    .map((post) => (
                      <li key={post.id}>
                        <PostCard post={post} />
                      </li>
                    ))}
                </div>
              </section>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}
