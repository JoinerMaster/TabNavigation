import React from "react";
import { Image, ImageProps, StyleSheet} from "react-native";

interface AlternativeImageProps extends ImageProps {}

const AlternativeImage = ({ style, ...props}: AlternativeImageProps) => {
    return (
        <Image
        style={[styles.image, style]}
        {...props}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginBottom: 20,
    }
});

export default AlternativeImage;
