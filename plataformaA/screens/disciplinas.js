import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Disciplinas() {

    const navigation = useNavigation();

    const materias = [
        "Matemática Aplicada",
        "Desenvolvimento Web",
        "Banco de Dados",
        "Arquitetura de Software"
    ];

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons style={styles.iconBack} name="arrow-back" size={26} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Disciplinas</Text>
            </View>

            <View style={styles.conteudo}>
                <View style={styles.lista}>
                    {materias.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.texto}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
    },

    // header

    header: {
        backgroundColor: "#c8003c",
        paddingVertical: 35,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    backBtn: {
        marginRight: 15,
        marginTop: 28
    },
    headerTitle: {
        color: "#fff",
        marginTop: 28,
        fontSize: 22,
        fontWeight: "bold",
    },


    conteudo: {
        flex: 1,
        padding: 20,
    },

    lista: {
        flexDirection: "column",
        gap: 12,
    },

    card: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderRadius: 10,
    },

    texto: {
        fontSize: 16,
    }
});
