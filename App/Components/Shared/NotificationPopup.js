import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../../assets/Shared/Colors";

export default function NotificationPopup({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    zIndex: 20,
    borderRadius: 99,
  },
  message: {
    fontFamily: "appfont-semi",
    color: Colors.GREY,
  },
  closeButton: {
    color: Colors.GREY,
    marginLeft: 8,
  },
});
