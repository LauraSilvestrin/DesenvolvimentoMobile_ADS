import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import perfil from "../assets/perfil.jpg";

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={perfil}></Image>
                <Text style={styles.nome}>Laura</Text>
                <Text style={styles.curso}>Analise e Desenvolvimento de Sistemas</Text>
            </View>

            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Portal do Aluno</Text>

                {/* Card Disciplinas Ativas */}
                <TouchableOpacity 
                    style={styles.card} 
                    onPress={() => navigation.navigate("disciplinas")}
                >
                    <Ionicons name='book-outline' size={32} color={'#000000'} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.tituloCard}>Disciplinas Ativas</Text>
                    </View>
                </TouchableOpacity>

                {/* NOVO CARD — Grade Unificada */}
                <TouchableOpacity 
                    style={styles.card} 
                    onPress={() => navigation.navigate("notasFaltasUnificadas")}
                >
                    <Ionicons name='grid-outline' size={32} color={'#000000'} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.tituloCard}>Grade Unificada</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8'
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#c8003c',
        paddingVertical: 35,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    nome: {
        color: '#f1f1f1',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15
    },
    curso: {
        color: '#eaeaea',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 15
    },
    conteudo: {
        flex: 1,
        padding: 20
    },
    titulo: {
        color: '#303030',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },
    tituloCard: {
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
    }
});
