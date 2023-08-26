import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ingredient from "./pages/Ingredient";
import Recipe from "./pages/Recipe";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipe/ingredient/:name" element={<Ingredient />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
