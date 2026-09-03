import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import PhoneInput from "@perttu/react-native-phone-number-input";

type CheckButtonProps = {
  value: string;
  phoneInput: React.RefObject<PhoneInput | null>;
  setValid: (valid: boolean) => void;
  setShowMessage: (show: boolean) => void;
};

const CheckButton = ({
  value,
  phoneInput,
  setValid,
  setShowMessage,
}: CheckButtonProps) => {

  const checkNumber = () => {
    const checkValid =
      phoneInput.current?.isValidNumber(value);

    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={checkNumber}
    >
      <Text>Check</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
});

export default CheckButton;