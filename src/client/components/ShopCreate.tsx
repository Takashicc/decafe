import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createMenus, createShop, decodeOwnerId } from "../api";
import modelType from "../model.type";
import "../styles/ShopCreate.css";
import MenuItem from "./MenuItem";

interface Shop {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longtitude: number;
}

interface Menu {
  name: string;
  price: number | null;
}

export interface ShopCreateFormValues {
  shop: Shop;
  menus: Menu[];
}

const ShopCreate: React.FC = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ShopCreateFormValues>({
    defaultValues: {
      menus: [{ name: "", price: null }],
    },
    mode: "onChange",
  });

  const [owner_id, setOwnerId] = useState<number | null>(null);

  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menus",
  });

  const addMenu = () => {
    append({ name: "", price: null });
  };

  const removeMenu = (index: number) => {
    remove(index);
  };

  const onSubmit = handleSubmit(async (data: ShopCreateFormValues) => {
    try {
      const shop_id = await createShop({ owner_id: owner_id!, ...data.shop });
      const menus: modelType.MenuCreate[] = [];
      for (let i = 0; i < data.menus.length; i++) {
        const { name, price } = data.menus[i];
        if (price === null) {
          continue;
        }
        menus.push({ shop_id, name, price });
      }
      await createMenus(menus);
      navigate(`shops/${shop_id}`);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    (async () => {
      try {
        const id = await decodeOwnerId();
        console.log("owner id is: ", id);
        setOwnerId(id);
      } catch (error) {
        navigateRef.current = navigate;
        navigate("/owners/login");
      }
    })();
  }, [navigate]);

  return (
    <form onSubmit={onSubmit}>
      <h1>Create Shop</h1>
      <fieldset>
        <legend>
          <span className="number">1</span> Your Shop Info
        </legend>
        <div className="error-message">{errors.shop?.name?.message}</div>
        <label htmlFor="shop.name">Shop name:</label>
        <input
          {...register("shop.name", { required: "Required", maxLength: 255 })}
          id="shop.name"
          placeholder="Shop Name"
        />
        <div className="error-message">{errors.shop?.city?.message}</div>
        <label htmlFor="shop.city">City:</label>
        <input
          {...register("shop.city", { required: "Required", maxLength: 255 })}
          id="shop.city"
          placeholder="City"
        />
        <div className="error-message">{errors.shop?.address?.message}</div>
        <label htmlFor="shop.address">Address:</label>
        <input
          {...register("shop.address", {
            required: "Required",
            maxLength: 255,
          })}
          id="shop.address"
          placeholder="Address"
        />
        <div className="error-message">{errors.shop?.latitude?.message}</div>
        <label htmlFor="shop.latitude">Latitude:</label>
        <input
          {...register("shop.latitude", {
            required: "Required",
            min: -90,
            max: 90,
          })}
          id="shop.latitude"
          placeholder="Latitude"
        />
        <div className="error-message">{errors.shop?.longtitude?.message}</div>
        <label htmlFor="shop.longtitude">Longitude:</label>
        <input
          {...register("shop.longtitude", {
            required: "Required",
            min: -180,
            max: 180,
            valueAsNumber: true,
          })}
          id="shop.longtitude"
          placeholder="Longitude"
        />
      </fieldset>
      <fieldset>
        <legend>
          <span className="number">2</span> Your Menu Info
        </legend>
        <table>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <MenuItem
                key={field.id}
                register={register}
                menuIndex={index}
                removeMenu={removeMenu}
              />
            ))}
          </tbody>
        </table>
        <button type="button" className="menu-button" onClick={addMenu}>
          +
        </button>
      </fieldset>
      <button type="submit" id="submit-button">
        Create
      </button>
    </form>
  );
};

export default ShopCreate;
