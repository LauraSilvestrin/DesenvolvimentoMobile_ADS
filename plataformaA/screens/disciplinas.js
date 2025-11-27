import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Disciplinas() {
  
  const materias = [
    "Matemática Aplicada",
    "Desenvolvimento Web",
    "Banco de Dados",
    "Arquitetura de Software"
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Disciplinas</Text>

      <View style={styles.lista}>
        {materias.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.texto}>{item}</Text>
          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  lista: {
    flexDirection: "column",
    gap: 12,
  },
  card: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
  }
});
