import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import * as Linking from 'expo-linking';

const CameraScreen = () => {
  const [facing, setFacing] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />; // Loading state while permission status is unknown
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return; // Prevent scanning while already scanned
    setScanned(true);

    Alert.alert(
      'Open Link',
      `Do you want to open ${data} in the default browser?`,
      [
        {
          text: 'Cancel',
          onPress: () => setScanned(false),
          style: 'cancel',
        },
        {
          text: 'Open',
          onPress: async () => {
            const isUrl = data.startsWith('http://') || data.startsWith('https://');
            if (isUrl) {
              const supported = await Linking.canOpenURL(data);
              if (supported) {
                await Linking.openURL(data); // Opens URL in default browser
              } else {
                Alert.alert(`Cannot open URL: ${data}`);
              }
            } else {
              Alert.alert('Scanned data is not a valid URL.');
            }
            setScanned(false); // Reset scanned state after action
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarCodeScanned={handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

export default CameraScreen;

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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
