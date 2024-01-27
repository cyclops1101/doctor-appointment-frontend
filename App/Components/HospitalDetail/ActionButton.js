import { View, Text, TouchableOpacity, Share, Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../../assets/Shared/Colors";

export default function ActionButton({ data }) {
  const actionButtonList = [
    {
      id: 1,
      name: "Website",
      icon: "earth",
      action: () => {
        const url = data.attributes.Website; // Replace with your website URL

        Linking.canOpenURL(url).then((supported) => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.error("Cannot open URL:", url);
          }
        });
      },
    },
    {
      id: 2,
      name: "Email",
      icon: "chatbubble-ellipses",
      action: () => Linking.openURL(`mailto:${data.attributes.email}`),
    },
    {
      id: 3,
      name: "Phone",
      icon: "call",
      action: () => Linking.openURL(`tel:${data.attributes.Phone}`),
    },
    {
      id: 4,
      name: "Directions",
      icon: "map",
      action: () => {
        const encodedAddress = encodeURIComponent(data.attributes.Address);
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

        Linking.openURL(url);
      },
    },
    {
      id: 5,
      name: "Share",
      icon: "share-sharp",
      action: () => {
        const message = "Check out this awesome app!";

        Share.share({
          message: `${message}\n${data.attributes.Website}`,
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      },
    },
  ];
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <FlatList
        numColumns={5}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        data={actionButtonList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={item.action}
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: Colors.SECONDARY,
                  padding: 13,
                  borderRadius: 99,
                  alignItems: "center",
                }}
              >
                <Ionicons name={item.icon} size={26} color={Colors.PRIMARY} />
              </View>
              <Text
                style={{
                  fontFamily: "appfont-semi",
                  marginTop: 5,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
