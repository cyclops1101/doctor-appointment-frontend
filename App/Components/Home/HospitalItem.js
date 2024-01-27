import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function HospitalItem({ hospital }) {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate("Hospital-Detail", {
          hospital,
        });
      }}
      style={{
        marginRight: 10,
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GREY,
      }}
    >
      <Image
        source={{ uri: hospital.attributes.Image.data[0].attributes.url }}
        style={{
          width: "100%",
          height: 110,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "appfont-semi", fontSize: 16 }}>
          {hospital.attributes.Name}
        </Text>
        <Text style={{ color: Colors.GREY }}>
          {hospital.attributes.Address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
