import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  const [topic, setTopic] = useState("");
  const [article_id, setArticle_id] = useState();
  return (
    <>
      <NavBar setTopic={setTopic} />

      <div className="App">
        <Routes>
          <Route
            path="/articles/:topic"
            element={<Articles topic={topic} setArticle_id={setArticle_id} />}
          />
          <Route
            path="article/:article_id"
            element={<Article article_id={article_id} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
