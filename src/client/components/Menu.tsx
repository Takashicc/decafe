import modelType from "../model.type";
import "../styles/Menu.css";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Menu: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const menu = shopDetail?.menus;
  return (
    <ul className="menutable">
      <li className="list">
        <span className="drinktitle">Drink</span>
        <span className="drinkpricetitle">Price</span>
      </li>
      {menu?.map((singleMenu) => {
        return (
          <li className="list">
            <span>{singleMenu.name}</span>
            <span className="drinkprice">{singleMenu.price}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
