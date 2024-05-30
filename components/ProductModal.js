import React, { useEffect, useRef } from 'react';

const ProductModal = ({ product, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
        <div className="h-64 w-full overflow-hidden flex items-center justify-center m-2">
          <img className="object-contain h-full" src={product.image} alt={product.title} />
        </div>
        <div className="p-6">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">${product.price}</span>
            <span className="text-sm text-gray-700">
              Rating: {product.rating.rate} ({product.rating.count})
            </span>
          </div>
          <div className='flex gap-4'>

          <button
            className="mt-4 px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded hover:bg-blue-800"
          >
            Buy
          </button>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-700"
          >
            Close
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
