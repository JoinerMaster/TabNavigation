import React from "react";
import { Text, TextStyle, TextProps, StyleSheet } from "react-native";

interface AlternativeTextProps extends TextProps {
    label: string;
    title?: boolean;
    style?: TextStyle | TextStyle[];
}

const AlternativeText = ({ label, title = false, style, ...props }: AlternativeTextProps) => {
    return (
        <Text
            style={[styles.default, title && styles.title, style]}
            {...props}
        >
            {label}
        </Text>
    );
};

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        color: "black",
        fontWeight: "300",
    },

    title: {
        fontSize: 30,
        color: "#1c0210",
        fontWeight: "400",
        textAlign: "center",
    },
});


export default AlternativeText;