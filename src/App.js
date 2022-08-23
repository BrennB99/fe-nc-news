import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  return (
    <>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="article/:article_id" element={<Article />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
