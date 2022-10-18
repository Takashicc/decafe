import styles from "@/styles/components/atoms/Map.module.scss";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
}

const Map = ({ latitude, longitude, address }: MapProps) => {
  return (
    <div className={styles.map_wrapper}>
      <span className={styles.location}>Location</span>
      <div className={styles.map}>
        <iframe
          title="Shop location"
          src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}
          width="250"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.address}>{address}</div>
    </div>
  );
};

export default Map;
