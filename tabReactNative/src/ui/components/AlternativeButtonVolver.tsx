import React from "react"; // Este es el alternativeButton del boton Volver
import { Text, StyleSheet, Pressable } from "react-native";

interface AlternativeButtonVolverProps {
    label: string;
    onPress: () => void;
}

const AlternativeButtonVolver = ({ label, onPress }: AlternativeButtonVolverProps) => {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {label}
            </Text>

        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2692d4",
        padding: 16,
        borderRadius: 2,
        alignItems: "center",
        width: 120
        
    },

    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    }
});

export default AlternativeButtonVolver;