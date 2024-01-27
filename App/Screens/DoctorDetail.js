import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import DoctorInfo from "../Components/DoctorDetail/DoctorInfo";
import { useRoute } from "@react-navigation/native";
import BookAppointmentButton from "../Components/Shared/BookAppointmentButton";
import PageHeader from "../Components/Shared/PageHeader";

export default function DoctorDetail() {
  const [doctor, setDoctor] = useState([]);

  const param = useRoute().params;

  useEffect(() => {
    setDoctor(param.doctor);
  }, []);
  return (
    <View>
      <View
        style={{
          margin: 15,
          marginBottom: 0,
        }}
      >
        <PageHeader title="" />
      </View>
      <DoctorInfo doctor={doctor} />
      <BookAppointmentButton data={doctor} type="doctor" />
    </View>
  );
}
