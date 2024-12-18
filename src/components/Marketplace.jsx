import { Link } from 'react-router-dom';
import products from '../data/products.json';

function Marketplace() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Local Artisan Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{product.price}</span>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;