import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import Search from "../Components/Home/Search";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import PremiumHospitals from "../Components/Home/PremiumHospitals";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <ScrollView style={{ padding: 20, marginTop: 20 }}>
      <Header />
      <Search setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories />
      <PremiumHospitals />
      {/* <Button title='SignOut'
            onPress={()=>signOut()}
        ></Button> */}
    </ScrollView>
  );
}
