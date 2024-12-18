import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStatesData } from '../hooks/useStatesData';
import StateInfo from './StateInfo';
import MapView from './MapView';

function CulturalMap() {
  const [selectedState, setSelectedState] = useState(null);
  const { statesData, isLoading, error } = useStatesData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading map data</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <MapView 
        statesData={statesData} 
        onStateSelect={setSelectedState} 
      />
      <StateInfo 
        selectedState={selectedState} 
      />
    </div>
  );
}

export default CulturalMap;