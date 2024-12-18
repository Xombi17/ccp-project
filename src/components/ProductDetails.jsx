import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products.json';

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Artisan</h2>
          <p className="text-gray-600">{product.artisan}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Region</h2>
          <p className="text-gray-600">{product.region}</p>
        </div>
        <div className="mb-6">
          <span className="text-2xl font-bold">₹{product.price}</span>
        </div>
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 px-3 py-2 border rounded-md"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;