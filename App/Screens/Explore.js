import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import HospitalDoctorTab from "../Components/HospitalDoctorsScreen/HospitalDoctorTab";
import HospitalListBig from "../Components/HospitalDoctorsScreen/HospitalListBig";
import DoctorListBig from "../Components/HospitalDoctorsScreen/DoctorListBig";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi";

export default function Explore() {
  const [hospitalList, setHospitalList] = useState();
  const [doctorList, setDoctorList] = useState();
  const [activeTab, setActiveTab] = useState("Hospital");

  useEffect(() => {
    getAllHospitals();
    getAllDoctors();
  }, []);

  const getAllHospitals = (category) => {
    GlobalApi.getAllHospitals(category)
      .then((resp) => {
        setHospitalList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };
  const getAllDoctors = (category) => {
    GlobalApi.getAllDoctors(category)
      .then((resp) => {
        setDoctorList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontFamily: "appfont-semi",
          fontSize: 26,
        }}
      >
        Explore
      </Text>
      <HospitalDoctorTab
        activeTab={(value) => {
          setActiveTab(value);
        }}
      />
      {!hospitalList?.length ? (
        <ActivityIndicator
          style={{ marginTop: "50%" }}
          size={"large"}
          color={Colors.PRIMARY}
        />
      ) : activeTab == "Hospital" ? (
        <HospitalListBig hospitalList={hospitalList} />
      ) : doctorList?.length ? (
        <DoctorListBig doctorList={doctorList} />
      ) : null}
    </View>
  );
}
