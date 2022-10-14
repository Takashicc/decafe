import "../styles/PhotoHeader.css";

//open image in new tab
const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

interface PhotoHeaderProps {
  shopName: string;
}

const PhotoHeader = ({ shopName }: PhotoHeaderProps) => {
  //image string example
  const images = [
    "images/1 (3).jpg",
    "images/2.jpg",
    "images/1 (5).jpg",
    "images/1.jpg",
    "images/1 (4).jpg",
  ];

  return (
    <div className="imagewrapper">
      <div className="imagejoined">
        {images.map((image: string, i) => {
          const alt_tag = `shop image ${i}`;
          return (
            <img
              className="image"
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
      <div className="storename">{shopName}</div>
    </div>
  );
};

export default PhotoHeader;
