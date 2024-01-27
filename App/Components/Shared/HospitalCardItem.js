import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function HospitalCardItem({ hospital }) {
  return (
    hospital &&
    hospital.attributes && (
      <View
        style={{
          borderRadius: 10,
          marginBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: Colors.LIGHT_GREY,
        }}
      >
        <Image
          source={{ uri: hospital.attributes.Image.data[0].attributes.url }}
          style={{
            width: "100%",
            height: 140,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            padding: 10,
            backgroundColor: Colors.WHITE,
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
            {hospital.attributes.Name}
          </Text>
          <FlatList
            horizontal={true}
            data={hospital.attributes.categories.data}
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
          <View
            style={{
              margin: 5,
              marginBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Ionicons name="location" size={20} color={Colors.PRIMARY} />
              <Text>{hospital.attributes.Address}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginTop: 4,
              }}
            >
              <Ionicons name="eye-sharp" size={20} color={Colors.PRIMARY} />
              <Text>665 Views</Text>
            </View>
          </View>
        </View>
      </View>
    )
  );
}
