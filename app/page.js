'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Search products"
        className="w-[92%] p-2 mb-4 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default HomePage;
