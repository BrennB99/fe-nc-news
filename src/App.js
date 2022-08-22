import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <>
      <NavBar setTopic={setTopic} />
      <div className="App">
        <Routes>
          <Route path="/articles/:topic" element={<Articles topic={topic} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
