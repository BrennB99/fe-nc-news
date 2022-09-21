import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  const [user, setUser] = useState("tickle122");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />

        <div className="App">
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route path="/article/:article_id" element={<Article />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
