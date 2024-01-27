import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "./SubHeading";
import HospitalItem from "./HospitalItem";

export default function PremiumHospitals() {
  const [hospitalList, setPremiumHospitalList] = useState([]);

  useEffect(() => {
    getPremiumHospitals();
  }, []);

  const getPremiumHospitals = () => {
    GlobalApi.getPremiumHospitals()
      .then((resp) => {
        setPremiumHospitalList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };

  return (
    hospitalList && (
      <View style={{ marginTop: 10 }}>
        <SubHeading subHeadingTitle={"Our Premium Hospitals"} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={hospitalList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <HospitalItem hospital={item} />}
        />
      </View>
    )
  );
}
