import "../styles/Map.css";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
}

const Map = ({ latitude, longitude, address }: MapProps) => {
  return (
    <div className="mapwrapper">
      <span className="location">Location</span>
      <div className="map">
        <iframe
          title="Shop location"
          src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}
          width="250"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">{address}</div>
    </div>
  );
};

export default Map;
