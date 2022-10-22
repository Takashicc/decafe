import { Text } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";

/**
 * Show error message.
 *
 * @param msg Message.
 * @returns Error message dom.
 */
export const showMessage = (msg: string | undefined) => {
  if (!msg) {
    return <></>;
  }

  return (
    <Text fontSize="sm" color="tomato">
      {msg}
    </Text>
  );
};

// TODO is there a better way to handle axios error?
/**
 * Check the error is axios error or not.
 *
 * @param error Error.
 * @returns true if axios error. false otherwise.
 */
export const isAxiosError = <T,>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error);
};
