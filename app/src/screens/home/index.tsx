// src/screens/home/index.tsx
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RootStackParamList } from '@/app';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function HomeScreen() {

    type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

    const navigation = useNavigation<HomeScreenNavigationProp>()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido al Inventario</Text>
            <View style={styles.buttonGroup}>
                <Button
                    title="Registrar Elemento"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
            <View style={styles.buttonGroup}>
                <Button
                    title="Rescanear laptops"
                />
            </View>
            <View style={styles.buttonGroup}>
                <Button
                    title="Asignar laptop a estudiante"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    buttonGroup: {
        width: '80%',
        marginVertical: 8,
    },
});