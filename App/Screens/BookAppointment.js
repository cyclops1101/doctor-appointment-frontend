import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Components/Shared/PageHeader";
import { useRoute } from "@react-navigation/native";
import Separator from "../Components/Shared/Separator";
import ActionButton from "../Components/HospitalDetail/ActionButton";
import BookingSection from "../Components/BookAppointment/BookingSection";
import AppointmentHospitalInfo from "../Components/BookAppointment/AppointmentHospitalInfo";

export default function BookAppointment() {
  const param = useRoute().params;
  const hospital = param.hospital;
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <PageHeader title="Book Appointment" />
      <AppointmentHospitalInfo hospital={hospital} />
      <Separator />
      <ActionButton />
      <Separator />
      <BookingSection hospital={hospital} />
    </View>
  );
}
