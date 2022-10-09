import { UseFormRegister } from "react-hook-form";
import { ShopCreateFormValues } from "./ShopCreate";

interface MenuItemProps {
  register: UseFormRegister<ShopCreateFormValues>;
  menuIndex: number;
  removeMenu: (index: number) => void;
}
const MenuItem: React.FC<MenuItemProps> = ({
  register,
  menuIndex,
  removeMenu,
}) => {
  return (
    <>
      <tr>
        <td>{menuIndex + 1}</td>
        <td>
          <input
            {...register(`menus.${menuIndex}.name`)}
            id={`menus.${menuIndex}.name`}
          />
        </td>
        <td>
          <input
            {...register(`menus.${menuIndex}.price`)}
            id={`menus.${menuIndex}.price`}
          />
        </td>
        <td>
          <button
            type="button"
            className="menu-button"
            onClick={() => removeMenu(menuIndex)}
          >
            -
          </button>
        </td>
      </tr>
    </>
  );
};

export default MenuItem;
