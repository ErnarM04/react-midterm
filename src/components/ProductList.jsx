import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import SearchProduct from "./SearchProduct";

function ProductList() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFiltered] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(responseJson);
        setFiltered(responseJson);
        const uniqueCategories = ["clear", ...new Set(responseJson.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  function filterByCategory(category){
    setFiltered(products.filter(product => product.category === category));
  }

  function searchProduct(input){
    setFiltered(products.filter(product => product.title.toLowerCase().includes(input.toLowerCase())));
  }

  return (
    <div>
      <header>
        {categories.length > 0 ? (<SearchProduct receivedCategories={categories} filterCategory={filterByCategory} searchProduct={searchProduct}/>) : (<p>Loading categories...</p>)}
      </header>
    <div className="line"></div>
      <ul>
        {filteredProducts ? filteredProducts.map((product) => (<li key={product.title}>{ProductCard(product)}</li>)) : (<p>Loading products...</p>)}
      </ul>
    </div>
  );
}

export default ProductList;
