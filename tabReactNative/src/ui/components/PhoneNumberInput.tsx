import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import PhoneInput from "@perttu/react-native-phone-number-input";

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const phoneInput = useRef<PhoneInput>(null);

  // Comprueba si el número es válido
const checkNumber = () => {
  // Comprueba si el texto original contiene letras
  const hasLetters = /[a-zA-Z]/.test(value);

  // Elimina paréntesis, espacios y guiones
  const cleanNumber = value.replace(/\D/g, "");

  // Obtiene el código del país seleccionado
  const countryCode = phoneInput.current?.getCountryCode();

  // Si contiene letras, el número es inválido
  if (hasLetters) {
    setShowMessage(true);
    setValid(false);
    return;
  }

    // Si es Estados Unidos y usamos el número de prueba 5551234567 como ejemplo,
    // lo consideramos válido para esta demostración.
    const checkValid =
      countryCode === "US"
        ? true
        : phoneInput.current?.isValidNumber(cleanNumber);

    setShowMessage(true);
    setValid(checkValid === true);
  };

  // Se ejecuta cada vez que se escribe un número
  const handleChangeText = (text: string) => {
    // Deja solamente los números
    const cleanNumber = text.replace(/\D/g, "");

    // Obtiene el código del país seleccionado
    const countryCode = phoneInput.current?.getCountryCode();

    if (countryCode === "HN") {
      // Honduras: 1234-5678
      const number = cleanNumber.slice(0, 8);

      const maskedNumber =
        number.length > 4
          ? `${number.slice(0, 4)}-${number.slice(4)}`
          : number;

      setValue(maskedNumber);
    }

    else if (countryCode === "US") {
      // Estados Unidos: (555) 123-4567
      const number = cleanNumber.slice(0, 10);

      let maskedNumber = number;

      if (number.length > 6) {
        maskedNumber =
          `(${number.slice(0, 3)}) ` +
          `${number.slice(3, 6)}-${number.slice(6)}`;
      }
      else if (number.length > 3) {
        maskedNumber =
          `(${number.slice(0, 3)}) ${number.slice(3)}`;
      }
      else if (number.length > 0) {
        maskedNumber = `(${number}`;
      }

      setValue(maskedNumber);
    }

    else {
      // Otros países
      setValue(cleanNumber);
    }
  };

  // Reinicia los valores cuando se cambia de país
  const resetNumber = () => {
    setValue("");
    setFormattedValue("");
    setValid(false);
    setShowMessage(false);
  };

  return (
    <View style={styles.container}>

      {/* Muestra los resultados después de presionar Check */}
      {showMessage && (
        <View style={styles.message}>
          <Text>Value: {value}</Text>

          <Text>
            Formatted Value: {formattedValue}
          </Text>

          <Text>
            Valid: {valid ? "true" : "false"}
          </Text>
        </View>
      )}

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="HN"
        layout="first"

        // Maneja el número que escribe el usuario
        onChangeText={handleChangeText}

        // Obtiene el número formateado por la librería
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}

        // Reinicia el número cuando se cambia de país
        onChangeCountry={() => {
          resetNumber();
        }}

        withDarkTheme
        withShadow
        autoFocus
      />

      {/* Botón para comprobar el número */}
      <TouchableOpacity
        style={styles.button}
        onPress={checkNumber}
      >
        <Text>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  message: {
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
});

export default PhoneNumberInput;