import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapView({ statesData, onStateSelect }) {
  return (
    <div className="h-[600px]">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Object.entries(statesData).map(([state, data]) => (
          <Marker
            key={state}
            position={data.coordinates}
            eventHandlers={{
              click: () => onStateSelect({ name: state, ...data }),
            }}
          >
            <Popup>{state}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;