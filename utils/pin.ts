import * as SecureStore from "expo-secure-store";
import { sha256 } from "js-sha256";

export const savePin = async (pin: string) => {
    const hashed = sha256(pin);
    await SecureStore.setItemAsync("user_pin", hashed);
};

export const validatePin = async (inputPin: string) => {
    const storedHash = await SecureStore.getItemAsync("user_pin");
    const inputHash = sha256(inputPin);
    return storedHash === inputHash;
};
  