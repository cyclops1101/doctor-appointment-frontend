import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalDoctorTab from "../Components/HospitalDoctorsScreen/HospitalDoctorTab";
import HospitalListBig from "../Components/HospitalDoctorsScreen/HospitalListBig";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../../assets/Shared/Colors";
import DoctorListBig from "../Components/HospitalDoctorsScreen/DoctorListBig";

export default function HospitalDoctorList() {
  const param = useRoute().params;
  const category = param?.categoryName;

  const [activeTab, setActiveTab] = useState("Hospital");

  const [hospitalList, setHospitalList] = useState([]);

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getHospitalByCategory(category);
    getDoctorByCategory(category);
  }, []);

  const getHospitalByCategory = (category) => {
    GlobalApi.getHospitalByCategory(category)
      .then((resp) => {
        setHospitalList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };
  const getDoctorByCategory = (category) => {
    GlobalApi.getDoctorByCategory(category)
      .then((resp) => {
        setDoctorList(resp.data.data);
      })
      .catch((error) => {
        console.log("Axios error: ", error.message);
      });
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={category} />
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
