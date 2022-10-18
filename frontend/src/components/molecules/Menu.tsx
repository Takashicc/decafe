import styles from "@/styles/components/molecules/Menu.module.scss";

interface MenuProps {
  menus: {
    name: string;
    price: number;
  }[];
}

const Menu = ({ menus }: MenuProps) => {
  return (
    <ul className={styles.menu_table}>
      <span className={styles.menu_top}>Menu</span>
      <li className={styles.list}>
        <span className={styles.drink_title}>Drink</span>
        <span className={styles.drink_price_title}>Price</span>
      </li>
      {menus.map((menu, i) => {
        return (
          <li className={styles.list} key={i}>
            <span>{menu.name}</span>
            <span className={styles.drink_price}>¥{menu.price}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
