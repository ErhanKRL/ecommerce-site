import { useState } from 'react';
import { CategoriesController } from './CategoriesController';
import { ProductsController } from './ProductsController';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetailController } from './ProductDetailController';

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
                <h1>Products</h1>
                <CategoriesController setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
                <ProductsController activeCategory={activeCategory} />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetailController />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//https://main--ecommercehyf.netlify.app/