import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import app from "./../../assets/images/app.png";
import Colors from "../../assets/Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";
import Loader from "../Components/Shared/Loader";

export default function Login() {
  const [signInProcessing, setSignInProcessing] = useState(false);

  return (
    <Loader loading={signInProcessing}>
      <View style={{ alignItems: "center" }}>
        <Image source={app} style={styles.appImage} />
        <View
          style={{
            backgroundColor: Colors.WHITE,
            padding: 25,
            alignItems: "center",
            marginTop: -30,
          }}
        >
          <Text style={styles.heading}>Your ultimate doctor</Text>
          <Text style={styles.heading}>Appointment Boooking App</Text>
          <Text>Book Appointments Effortlessly and manage your health</Text>
          <SignInWithOAuth setSignInProcessing={setSignInProcessing} />
        </View>
      </View>
    </Loader>
  );
}

const styles = StyleSheet.create({
  appImage: {
    height: 600,
    objectFit: "contain",
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
    width: Dimensions.get("screen").width * 0.7,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
