import { Link } from 'react-router-dom';

function StateInfo({ selectedState }) {
  if (!selectedState) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-500">
        <p>Select a state on the map to learn more about its culture and history</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{selectedState.name}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Culture</h3>
          <p className="text-gray-600">{selectedState.culture}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">History</h3>
          <p className="text-gray-600">{selectedState.history}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Local Artisans</h3>
          <Link
            to="/marketplace"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Shop Local Crafts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StateInfo;