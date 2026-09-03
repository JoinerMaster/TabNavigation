import React, { useRef, useState } from "react";
import {
  StyleSheet,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import PhoneInput from "@perttu/react-native-phone-number-input";

import PhoneNumberInput from "../components/PhoneNumberInput";
import Message from '../components/Message';
import CheckButton from '../components/CheckButton';

const PhoneNumberScreen = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        {showMessage && (
          <Message
            value={value}
            formattedValue={formattedValue}
            valid={valid}
          />
        )}

        <PhoneNumberInput
          value={value}
          setValue={setValue}
          setFormattedValue={setFormattedValue}
          phoneInput={phoneInput}
        />

        <CheckButton
          value={value}
          phoneInput={phoneInput}
          setValid={setValid}
          setShowMessage={setShowMessage}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PhoneNumberScreen;