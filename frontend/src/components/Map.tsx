import "../styles/Map.css";
import * as modelType from "model_type";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Map: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const shoploc = {
    lat: shopDetail?.shop?.latitude,
    lng: shopDetail?.shop?.longitude,
    address: shopDetail?.shop?.address,
  };
  return (
    <div className="mapwrapper">
      <span className="location">Location</span>
      <div className="map">
        <iframe
          title="Shop location"
          src={`https://maps.google.com/maps?q=${shoploc.lat}, ${shoploc.lng}&z=15&output=embed`}
          width="250"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">{shoploc.address}</div>
    </div>
  );
};

export default Map;
