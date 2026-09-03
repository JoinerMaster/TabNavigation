import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AlternativeButton from "../atom/AlternativeButton";
import AlternativeImage from "../atom/AlternativeImage";
import AlternativeInput from "../atom/AlternativeInput";
import AlternativeText from "../atom/AlternativeText";

// COMPONENTE PERSONALIZADO
const RegistroItem = ({ nombre, elemento }) => (

  <View style={styles.item}>

    <Text style={styles.nombre}>
      {nombre}
    </Text>

    <Text style={styles.elemento}>
      {elemento}
    </Text>

  </View>

);

export default function HomeScreen({
  onIngresar,
  registros
}) {

  return (


    <View style={styles.container}>

      <AlternativeImage
        source={require("../assets/Digital World.png")}
        style={styles.image}
      />

      <AlternativeText
        label="REGISTRO DE CELULARES Y TABLETS"
        title={true}
      />

        <AlternativeButton
          label="INGRESAR"
          onPress={onIngresar}
        />
        
      <FlatList
        data={registros}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (

          <RegistroItem
            nombre={item.nombre}
            elemento={item.elemento}
          />
        )}

        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 70 // Para controlar el listado de arriba y abajo
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 160
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },

  elemento: {
    fontSize: 17,
    color: "black",
    fontWeight: "300",
  },


  item: { //item controla el cuadro de registros y modificarlo
    width: 300,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
});