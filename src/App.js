import "./App.css";
import Home from "./pages/Home";
import Ingredient from "./pages/Ingredient";
import Recipe from "./pages/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipe/ingredient/:name" element={<Ingredient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
