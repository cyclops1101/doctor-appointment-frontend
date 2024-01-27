import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HospitalDoctorList from "../Screens/HospitalDoctorListScreen";
import Home from "../Screens/Home";
import HospitalDetails from "../Screens/HospitalDetails";
import DoctorDetail from "../Screens/DoctorDetail";
import BookAppointment from "../Screens/BookAppointment";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Hospital-Doctor-List"
        component={HospitalDoctorList}
      />
      <Stack.Screen name="Hospital-Detail" component={HospitalDetails} />
      <Stack.Screen name="doctor-detail" component={DoctorDetail} />
      <Stack.Screen name="book-appointment" component={BookAppointment} />
    </Stack.Navigator>
  );
}
