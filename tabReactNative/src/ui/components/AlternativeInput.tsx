import React from "react"; // Este es el alternativeInput de textinput personalizado de FormScreen
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface AlternativeInputProps extends TextInputProps { }

const AlternativeInput = ({ style, placeholder, value, onChangeText, ...props }: AlternativeInputProps) => {
  return (
    <TextInput
      style={[styles.Input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  Input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginBottom: 10,
    fontSize: 14,
  }
});

export default AlternativeInput;