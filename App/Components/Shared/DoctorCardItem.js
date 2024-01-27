import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function DoctorCardItem({ doctor }) {
  const navigate = useNavigation();

  return (
    <View
      style={{
        borderRadius: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
        backgroundColor: Colors.WHITE,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Image
          source={{ uri: doctor.attributes.Image.data[0].attributes.url }}
          style={{
            width: "40%",
            height: 140,
            borderRadius: 10,
            margin: 10,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "appfont-semi",
              fontSize: 18,
            }}
          >
            {doctor.attributes.Name}
          </Text>
          <FlatList
            data={doctor.attributes.categories.data}
            renderItem={({ item, index }) => {
              return (
                <Text
                  style={{
                    marginRight: 10,
                    color: Colors.LIGHT_GREY,
                  }}
                >
                  {item.attributes.Name}
                </Text>
              );
            }}
          />
          <Text
            style={{
              fontFamily: "appfont",
              fontSize: 14,
              color: Colors.PRIMARY,
            }}
          >
            {doctor.attributes.Years_of_Experience} yrs
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("doctor-detail", { doctor: doctor });
        }}
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          margin: 10,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "appfont-semi",
            fontSize: 14,
          }}
        >
          View Clinician
        </Text>
      </TouchableOpacity>
    </View>
  );
}
