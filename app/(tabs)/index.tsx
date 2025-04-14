import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false); // ← New

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.container}>
      {!showCamera ? (
        <Button title="Abrir Camera 1" onPress={() => setShowCamera(true)} />
      ) : (
        <CameraView 
        style={styles.camera} 
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'code128', 'code39', 'ean13', 'ean8'], // customize if needed
        }}
        onBarcodeScanned={(result) => {
          if (result?.data) {
            alert(`Scanned: ${result.data}`);
            setShowCamera(false); // close camera after scan
          }
        }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Girar Camera 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setShowCamera(false)}>
              <Text style={styles.text}>Cerrar Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
