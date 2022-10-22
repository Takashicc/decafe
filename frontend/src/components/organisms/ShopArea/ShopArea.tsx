import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl, Flex, Text } from "@chakra-ui/react";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import * as schema from "@/api/schema";
import api from "@/lib/axios_settings";
import { BsShop } from "react-icons/bs";
import { useRouter } from "next/router";
import { showMessage } from "@/utils";

interface ShopAreaForm {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export const ShopArea: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShopAreaForm>();

  const [message, setMessage] = useState<string>();

  function onSubmit(formValues: ShopAreaForm) {
    return api
      .post<schema.ShopIdOnly>("/api/v1/shops/new", formValues)
      .then((res) => {
        const shopId = res.data.shopId;
        router.push(`/shops/${shopId}`);
      })
      .catch((e) => {
        // TODO
      });
  }

  return (
    <>
      <Text fontSize="6xl" mb="10">
        Create Shop
      </Text>
      <Flex direction="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          {showMessage(message)}
          <FormControl isInvalid={errors.name !== undefined}>
            <Input
              type="text"
              id="name"
              label="Shop name"
              placeHolder="Enter your shop name"
              register={register("name", {
                required: "Shop name is required",
              })}
            />
            {showMessage(errors.name?.message)}
          </FormControl>
          <FormControl isInvalid={errors.address !== undefined}>
            <Input
              type="address"
              id="address"
              label="Shop address"
              placeHolder="Enter your shop address"
              register={register("address", {
                required: "Shop address is required",
              })}
            />
            {showMessage(errors.address?.message)}
          </FormControl>
          <FormControl isInvalid={errors.city !== undefined}>
            <Input
              type="city"
              id="city"
              label="City"
              placeHolder="Enter your city"
              register={register("city", {
                required: "City is required",
              })}
            />
            {showMessage(errors.city?.message)}
          </FormControl>
          <FormControl isInvalid={errors.latitude !== undefined}>
            <Input
              type="latitude"
              id="latitude"
              label="Latitude"
              placeHolder="Enter your shop latitude"
              register={register("latitude", {
                required: "Latitude is required",
              })}
            />
            {showMessage(errors.latitude?.message)}
          </FormControl>
          <FormControl isInvalid={errors.longitude !== undefined}>
            <Input
              type="longitude"
              id="longitude"
              label="Longitude"
              placeHolder="Enter your shop longitude"
              register={register("longitude", {
                required: "Longitude is required",
              })}
            />
            {showMessage(errors.longitude?.message)}
          </FormControl>
          <Flex justifyContent="end">
            <Button
              text="Create Shop"
              leftIcon={<BsShop />}
              isLoading={isSubmitting}
              {...{ mt: 2 }}
            />
          </Flex>
        </form>
      </Flex>
    </>
  );
};
