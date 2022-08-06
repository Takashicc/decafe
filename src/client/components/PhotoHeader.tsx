import "../styles/PhotoHeader.css";
import modelType from "../model.type";

//open image in new tab
const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Photoheader: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  //image string example
  const images = [
    "images/1 (3).jpg",
    "images/2.jpg",
    "images/1 (5).jpg",
    "images/1.jpg",
    "images/1 (4).jpg",
  ];

  const store = {
    name: shopDetail?.shop?.name,
  };

  return (
    <div className="imagewrapper">
      <div className="imagejoined">
        {images.map((image: string) => {
          return (
            <img
              className="image"
              src={`${image}`}
              onClick={() => {
                openInNewTab(`${image}`);
              }}
            />
          );
        })}
      </div>
      <div className="storename">{store.name}</div>
    </div>
  );
};

export default Photoheader;
