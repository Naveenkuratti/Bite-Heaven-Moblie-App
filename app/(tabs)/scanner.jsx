import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  Platform,
  AppState,
  Linking,
  Alert,
  Animated,
  Easing,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Stack } from "expo-router";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState(null);
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  
  useEffect(() => {
    if (!scannedData) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scanLineAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scanLineAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [scannedData]);

  
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });
    return () => subscription.remove();
  }, []);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.text}>We need your permission to use the camera</Text>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    if (qrLock.current) return;
    qrLock.current = true;
    setScannedData({ type, data });

    if (data.startsWith("http")) {
      Linking.openURL(data).catch(() =>
        Alert.alert("Invalid URL", "Cannot open this link.")
      );
    } else {
      Alert.alert("QR Code Scanned!", `Type: ${type}\nData: ${data}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "QR Scanner", headerShown: false }} />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}

      {!scannedData ? (
        <>
          <CameraView
            style={StyleSheet.absoluteFillObject}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
            onBarcodeScanned={handleBarCodeScanned}
          />
          {/* Overlay frame */}
          <View style={styles.overlay}>
            <View style={styles.topBottomOverlay} />
            <View style={styles.middleRow}>
              <View style={styles.sideOverlay} />
              <View style={styles.frame}>
                <Animated.View
                  style={[
                    styles.scanLine,
                    {
                      transform: [
                        {
                          translateY: scanLineAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200], // adjust according to frame height
                          }),
                        },
                      ],
                    },
                  ]}
                />
              </View>
              <View style={styles.sideOverlay} />
            </View>
            <View style={styles.topBottomOverlay} />
          </View>
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Scanned QR Data:</Text>
          <Text style={styles.data}>{scannedData.data}</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              qrLock.current = false;
              setScannedData(null);
            }}
          >
            <Text style={styles.buttonText}>Scan Again</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  centerContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: { color: "white", fontSize: 18, textAlign: "center", marginBottom: 20 },
  title: { color: "white", fontSize: 24, marginBottom: 20, textAlign: "center" },
  data: { color: "#0E7AFE", fontSize: 18, textAlign: "center", marginBottom: 30 },
  button: {
    backgroundColor: "#0E7AFE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: { color: "white", fontSize: 18 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  topBottomOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  middleRow: {
    flexDirection: "row",
  },
  sideOverlay: {
    width: "15%",
    height: 200,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  frame: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#0E7AFE",
    overflow: "hidden",
  },
  scanLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#0E7AFE",
  },
});
