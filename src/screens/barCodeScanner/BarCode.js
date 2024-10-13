import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, AppState } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';

const BarCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
    
    const subscription = AppState.addEventListener("change", nextAppState => {
      setAppState(nextAppState);
      // Reset the scanned state if the app comes back to the foreground
      if (nextAppState === 'active') {
        setScanned(false);
      }
    });

    // Clean up the event listener on unmount
    return () => {
      subscription.remove();
    };
  }, []);

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
          style: 'cancel'
        },
        {
          text: 'Open',
          onPress: async () => {
            const isUrl = data.startsWith('http://') || data.startsWith('https://');
            if (isUrl) {
              const supported = await Linking.canOpenURL(data);
              if (supported) {
                await Linking.openURL(data);
              } else {
                Alert.alert(`Cannot open URL: ${data}`);
              }
            } else {
              Alert.alert('Scanned data is not a valid URL.');
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

export default BarCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
