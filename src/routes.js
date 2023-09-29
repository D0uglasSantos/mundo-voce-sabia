import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/About";
import Home from "./pages/home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import DefaultPage from "./components/DefaultPage";
import Post from "./pages/Post";
import NotFount from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
