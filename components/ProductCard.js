import React from 'react';

const ProductCard = ({ product, onClick }) => {
  const truncatedDescription = product.description.length > 100
    ? `${product.description.substring(0, 100)}...`
    : product.description;

  return (
    <div
      className="max-w-xs w-full rounded overflow-hidden shadow-lg m-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-64 w-full overflow-hidden flex items-center justify-center">
        <img className="object-contain h-full" src={product.image} alt={product.title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{product.title}</div>
        <p className="text-gray-700 text-sm">{truncatedDescription}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-xl font-semibold">${product.price}</span>
        <span className="text-sm text-gray-700">
          Rating: {product.rating.rate} ({product.rating.count})
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
