import React from "react";
import { View, Text,StyleSheet } from "react-native";

type MessageProps = {
  value: string;
  formattedValue: string;
  valid: boolean;
};

const Message = ({ value, formattedValue, valid }: MessageProps) => {
  return (
    <View style={styles.message}>
      <Text>
        Value : {value}
      </Text>

      <Text>
        Formatted Value : {formattedValue}
      </Text>

      <Text>
        Valid : {valid ? "true" : "false"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    marginBottom: 20,
  },
});

export default Message;