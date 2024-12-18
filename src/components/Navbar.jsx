import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Indian Cultural Marketplace
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600">
              Cultural Map
            </Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-indigo-600">
              Marketplace
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;