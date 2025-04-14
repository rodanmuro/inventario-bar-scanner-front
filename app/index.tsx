import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Inicio de la APP Rodanmuro
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 24,
        justifyContent: 'center',
      },
      title: {
        fontSize: 28,
        marginBottom: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
      },
})
