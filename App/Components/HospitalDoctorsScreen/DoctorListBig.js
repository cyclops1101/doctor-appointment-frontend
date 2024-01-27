import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import DoctorCardItem from "../Shared/DoctorCardItem";

export default function DoctorListBig({ doctorList }) {
  return (
    <View style={{ marginTop: 10, paddingBottom: 150 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={doctorList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <DoctorCardItem doctor={item} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
