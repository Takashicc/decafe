// import "../styles/Menu.css";

interface MenuProps {
  menus: {
    name: string;
    price: number;
  }[];
}

const Menu = ({ menus }: MenuProps) => {
  return (
    <ul className="menutable">
      <span className="menuTop">Menu</span>
      <li className="list">
        <span className="drinktitle">Drink</span>
        <span className="drinkpricetitle">Price</span>
      </li>
      {menus.map((menu, i) => {
        return (
          <li className="list" key={i}>
            <span>{menu.name}</span>
            <span className="drinkprice">¥{menu.price}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
