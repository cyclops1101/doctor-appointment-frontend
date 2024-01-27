import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loader({ loading, children }) {
  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        children
      )}
    </View>
  );
}
