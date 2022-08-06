import modelType from "../model.type";
import "../styles/Menu.css";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Menu: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const menu = shopDetail?.menus;
  return (
    <table className="menutable">
      Menu
      <tr>
        <th className="th">Drink</th>
        <th className="th">Price</th>
      </tr>
      {menu?.map((singleMenu) => {
        return (
          <>
            <tr>
              <td>{singleMenu.name}</td>
              <td>{singleMenu.price}</td>
            </tr>
          </>
        );
      })}
    </table>
  );
};

export default Menu;
