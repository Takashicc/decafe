import styles from "@/styles/components/organisms/PhotoHeader.module.scss";

const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

interface PhotoHeaderProps {
  shopName: string;
}

const PhotoHeader = ({ shopName }: PhotoHeaderProps) => {
  // TODO After implementing image upload feature, fix it.
  const images = [
    "images/1 (3).jpg",
    "images/2.jpg",
    "images/1 (5).jpg",
    "images/1.jpg",
    "images/1 (4).jpg",
  ];

  return (
    <div className={styles.image_wrapper}>
      <div className={styles.image_joined}>
        {images.map((image: string, i) => {
          const alt_tag = `shop image ${i}`;
          return (
            <img
              className={styles.image}
              src={`${image}`}
              onClick={() => {
                openInNewTab(`${image}`);
              }}
              alt={alt_tag}
              key={i}
            />
          );
        })}
      </div>
      <div className={styles.store_name}>{shopName}</div>
    </div>
  );
};

export default PhotoHeader;
