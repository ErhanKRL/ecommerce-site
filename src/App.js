import { useState } from "react";
import { CategoriesController } from "./CategoriesController";
import { ProductsController } from "./ProductsController";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductDetailController } from "./ProductDetailController";
import { FavoritesController } from "./FavoritesController";
import { Link } from "react-router-dom";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="title-container">
                  <h1 className="title-container--title">Products</h1>
                  <div className="nav">
                    <ul>
                      <li>
                        <Link to="/">Products</Link>
                      </li>
                      <li>
                        <Link to="/favorites">Favorites</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <CategoriesController
                  setActiveCategory={setActiveCategory}
                  activeCategory={activeCategory}
                />
                <ProductsController activeCategory={activeCategory} />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetailController />} />
          <Route path="/favorites" element={<FavoritesController />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//https://ecommercehyf.netlify.app/
