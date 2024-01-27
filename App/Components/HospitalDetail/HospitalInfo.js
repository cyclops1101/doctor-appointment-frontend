import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import SubHeading from "../Home/SubHeading";
import Separator from "../Shared/Separator";
import { ScrollView } from "react-native-gesture-handler";

export default function HospitalInfo({ hospital }) {
  return (
    hospital &&
    hospital.attributes && (
      <View>
        <Text
          style={{
            fontFamily: "appfont-semi",
            fontSize: 23,
          }}
        >
          {hospital.attributes.Name}
        </Text>
        <FlatList
          horizontal={true}
          data={hospital.attributes.categories.data}
          renderItem={({ item, index }) => {
            return (
              <Text
                style={{
                  marginRight: 10,
                  color: Colors.LIGHT_GREY,
                }}
              >
                {item.attributes.Name}
              </Text>
            );
          }}
        />
        <View
          style={{
            margin: 5,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons name="location" size={20} color={Colors.PRIMARY} />
            <Text
              style={{
                fontSize: 18,
                fontFamily: "appfont",
                color: Colors.LIGHT_GREY,
              }}
            >
              {hospital.attributes.Address}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 6,
            }}
          >
            <Ionicons name="time" size={20} color={Colors.PRIMARY} />
            <Text
              style={{
                fontSize: 18,
                fontFamily: "appfont",
                color: Colors.LIGHT_GREY,
              }}
            >
              {hospital.attributes.Hours}
            </Text>
          </View>
          <Separator />
          <ActionButton data={hospital} />
          <Separator />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 200 }}
          >
            <SubHeading subHeadingTitle={"About"} seeAll={false} />
            {hospital &&
              hospital.attributes &&
              hospital.attributes.Description && (
                <View>
                  <FlatList
                    data={hospital.attributes.Description}
                    renderItem={({ item }) => {
                      return <Text>{item.children[0].text}</Text>;
                    }}
                  />
                </View>
              )}
          </ScrollView>
        </View>
      </View>
    )
  );
}
