import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HospitalCardItem from "../Shared/HospitalCardItem";
import { useNavigation } from "@react-navigation/native";

export default function HospitalListBig({ hospitalList }) {
  const navigate = useNavigation();
  return (
    <View style={{ marginTop: 10, paddingBottom: 150 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={hospitalList}
          renderItem={({ item }) => {
            return (
              item &&
              item.attributes.Image && (
                <TouchableOpacity
                  onPress={() =>
                    navigate.navigate("Hospital-Detail", {
                      hospital: item,
                    })
                  }
                >
                  <HospitalCardItem hospital={item} />
                </TouchableOpacity>
              )
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
