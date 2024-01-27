import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalInfo from "../Components/HospitalDetail/HospitalInfo";
import Colors from "../../assets/Shared/Colors";
import BookAppointmentButton from "../Components/Shared/BookAppointmentButton";

export default function HospitalDetails() {
  const [hospital, setHospital] = useState([]);
  const param = useRoute().params;

  useEffect(() => {
    setHospital(param.hospital);
  }, []);

  return (
    hospital &&
    hospital.attributes && (
      <View style={{ backgroundColor: Colors.WHITE }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: Colors.WHITE,
            borderBottomWidth: 1,
            borderBottomColor: Colors.LIGHT_GREY,
          }}
        >
          <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
            <PageHeader title={""} />
          </View>
          <View>
            <Image
              source={{ uri: hospital.attributes.Image.data[0].attributes.url }}
              style={{
                width: "100%",
                height: 260,
              }}
            />
            <View
              style={{
                marginTop: -20,
                backgroundColor: Colors.WHITE,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                padding: 20,
              }}
            >
              <HospitalInfo hospital={hospital} />
            </View>
          </View>
        </ScrollView>
        <BookAppointmentButton hospital={hospital} />
      </View>
    )
  );
}
