import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createShop } from "../api";

interface ShopCreateFormValues {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

const ShopCreate: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopCreateFormValues>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ShopCreateFormValues> = async (data) => {
    const shopId = await createShop({ ...data });
    navigate(`/shops/${shopId}`);
  };

  const renderErrorMessage = (fieldError: FieldError | undefined) => {
    if (fieldError === undefined) {
      return;
    }
    return <span style={{ color: "red" }}>{fieldError.message}</span>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderErrorMessage(errors.name)}
      <label htmlFor="name">Shop name</label>
      <input
        type="text"
        id="name"
        placeholder="Shop name"
        {...register("name", {
          required: "Please enter your shop name",
          maxLength: {
            value: 255,
            message: "Please enter 255 characters or less.",
          },
        })}
      />

      {renderErrorMessage(errors.address)}
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        placeholder="Address"
        {...register("address", {
          required: "Please enter you shop address",
          maxLength: {
            value: 255,
            message: "Please enter 255 characters or less.",
          },
        })}
      />

      {renderErrorMessage(errors.city)}
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        placeholder="City"
        {...register("city", {
          required: "Please enter the city where the shop is located",
          maxLength: {
            value: 255,
            message: "Please enter 255 characters or less.",
          },
        })}
      />

      {renderErrorMessage(errors.latitude)}
      <label htmlFor="latitude">Latitude</label>
      <input
        type="text"
        id="latitude"
        placeholder="Latitude"
        {...register("latitude", {
          required: "Please enter the latitude where the shop is located",
        })}
      />

      {renderErrorMessage(errors.longitude)}
      <label htmlFor="longitude">Longitude</label>
      <input
        type="text"
        id="longitude"
        placeholder="Longitude"
        {...register("longitude", {
          required: "Please enter the longitude where the shop is located",
        })}
      />

      <button type="submit">Create Shop</button>
    </form>
  );
};

export default ShopCreate;
