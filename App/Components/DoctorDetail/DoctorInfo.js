import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import SubHeading from "../Home/SubHeading";
import Separator from "../Shared/Separator";
import ActionButton from "../HospitalDetail/ActionButton";

export default function DoctorInfo({ doctor }) {
  const convertTime = (time) => {
    const [hoursMinutes, seconds] = time.split(".");
    const [hours, minutes] = hoursMinutes.split(":");
    return `${hours}:${minutes}`;
  };

  return (
    doctor &&
    doctor.attributes && (
      <View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: doctor.attributes.Image.data[0].attributes.url }}
              style={{
                width: "40%",
                height: 200,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "appfont-semi",
                  fontSize: 24,
                }}
              >
                {doctor.attributes.Name}
              </Text>
              <Text
                style={{
                  fontFamily: "appfont",
                  fontSize: 18,
                  color: Colors.LIGHT_GREY,
                }}
              >
                {doctor.attributes.Years_of_Experience} years
              </Text>
              <FlatList
                horizontal={true}
                data={doctor.attributes.categories.data}
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
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Ionicons name="time" size={18} color={Colors.PRIMARY} />
                <Text
                  style={{
                    fontFamily: "appfont",
                    fontSize: 18,
                    color: Colors.LIGHT_GREY,
                  }}
                >
                  {convertTime(doctor.attributes.StartTime)}
                  {" - "}
                  {convertTime(doctor.attributes.EndTime)}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                <Text
                  style={{
                    fontFamily: "appfont",
                    fontSize: 18,
                    color: Colors.LIGHT_GREY,
                  }}
                >
                  {doctor.attributes.Address}
                </Text>
              </View>
            </View>
          </View>
          <Separator />
          <ActionButton />
          <Separator />
          <View
            style={{
              margin: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "appfont-semi",
                fontSize: 20,
              }}
            >
              About
            </Text>
            <View>
              <FlatList
                data={doctor.attributes.About}
                renderItem={({ item }) => {
                  return <Text>{item.children[0].text}</Text>;
                }}
              />
            </View>
          </View>
          <Separator />
        </View>
      </View>
    )
  );
}
