import React from "react"; // Este es el AlternativeTextButton del boton Guardar
import { Text, StyleSheet, Pressable } from "react-native";

interface AlternativeTextButtonProps {
    label: string;
    style?: any;
    onPress: () => void;
    disabled?: boolean;
}

const AlternativeTextButton = ({ label, onPress, disabled = false }
    : AlternativeTextButtonProps) => {
    return (
        <Pressable
            style={[styles.button,
            disabled && styles.disabled
            ]}
            onPress={onPress}
            disabled={disabled}
        >

            <Text style={styles.text}>
                {label}
            </Text>

        </Pressable>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        padding: 16,
        borderRadius: 2,
        alignItems: "center",
        width: 120,
        height: 50,
        marginBottom: 10
    },

    disabled: {
        backgroundColor: "gray"
    },

    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }

});

export default AlternativeTextButton;