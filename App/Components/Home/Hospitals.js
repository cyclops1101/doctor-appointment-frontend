import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";
import HospitalItem from "./HospitalItem";

export default function Hospitals() {
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = () => {
    GlobalApi.getHospitals()
      .then((resp) => {
        setHospitalList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };

  if (!hospitalList) {
    return null;
  }

  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "appfont-semi",
            fontSize: 20,
          }}
        >
          Nearby Hospitals
        </Text>
        <Text
          style={{
            fontFamily: "appfont",
            color: Colors.PRIMARY,
          }}
        >
          See All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={hospitalList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HospitalItem hospital={item} />}
      />
    </View>
  );
}
