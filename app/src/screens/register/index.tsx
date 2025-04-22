import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app';


// Import dinámico del Picker solo si no es web
let Picker: any;
if (Platform.OS !== 'web') {
  Picker = require('@react-native-picker/picker').Picker;
}

export default function Registrar() {
  const [tipo, setTipo] = useState('');
  const [observaciones, setObservaciones] = useState('');

  type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  
      const navigation = useNavigation<HomeScreenNavigationProp>()
  const manejarEscaneo = () => {
    if (!tipo || tipo === '') {
      Alert.alert('Error', 'Por favor selecciona un tipo válido antes de escanear.');
      return;
    }

    Alert.alert('Escanear', `Tipo: ${tipo}\nObservaciones: ${observaciones || 'Sin observaciones'}`);

    navigation.navigate('Escanear');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona un tipo:</Text>

      {Platform.OS === 'web' ? (
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          style={styles.webSelect}
        >
          <option value="">Ninguno</option>
          <option value="computador">Computador</option>
          <option value="cargador">Cargador</option>
        </select>
      ) : (
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue: string) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Ninguno" value="" />
            <Picker.Item label="Computador" value="computador" />
            <Picker.Item label="Cargador" value="cargador" />
          </Picker>
        </View>
      )}

      <Text style={styles.label}>Observaciones:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={observaciones}
        onChangeText={setObservaciones}
        placeholder="Escribe aquí observaciones del equipo"
        style={styles.textArea}
      />

      <View style={styles.buttonContainer}>
        <Button title="Escanear" onPress={manejarEscaneo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  webSelect: {
    height: 40,
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
