import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import moment from "moment";
import Separator from "../Shared/Separator";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";
import NotificationPopup from "../Shared/NotificationPopup";
import { useNavigation } from "@react-navigation/native";

export default function BookingSection({ hospital }) {
  const { user } = useUser();
  const [nextSevenDays, setNextSevenDays] = useState([]);
  const [times, setTimes] = useState([]);
  const [sendingData, setSendingData] = useState(false);
  const [appointmentSuccessful, setAppointementSuccessful] = useState(false);

  const [note, setNote] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState({});
  const [notification, setNotification] = useState(null);

  const navigation = useNavigation();

  const showNotification = (message) => {
    setNotification(message);
  };

  const closeNotification = () => {
    setNotification(null);
    navigation.navigate("Home");
    navigation.navigate("Appointment");
  };

  useEffect(() => {
    getDays();
    getTimes();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 0; i < 8; i++) {
      const date = moment();
      nextSevenDays.push({
        date: date.add(i, "days"),
        day: date.format("ddd"),
        formattedDate: date.format("Do MMM"),
      });
    }
    setNextSevenDays(nextSevenDays);
    setSelectedDate(nextSevenDays[0].date);
  };

  const getTimes = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      i < 12 &&
        timeList.push({
          time: i + ":30 AM",
        });
    }
    for (let i = 1; i <= 8; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimes(timeList);
    setSelectedTime(timeList[0].time);
  };

  const bookAppointment = () => {
    const datetime = convertDateTime({
      datetimeString: selectedDate,
      timeString: selectedTime,
    });
    const data = {
      data: {
        UserName: user.fullName,
        DateTime: datetime,
        Email: user.primaryEmailAddress.emailAddress,
        hospitals: hospital.id,
        Note: note,
      },
    };
    setSendingData(true);
    GlobalApi.createAppointment(data)
      .then((resp) => {
        setSendingData(false);
        setAppointementSuccessful(true);
        showNotification("Appointment successfully booked");
      })
      .catch((error) => console.log("Axios error: ", error.message));
  };

  const convertDateTime = ({ datetimeString, timeString }) => {
    const dateObject = moment(datetimeString);
    const timeObject = moment(timeString, "h:mm A");

    // Set the time part of the date object
    dateObject.set({
      hour: timeObject.hour(),
      minute: timeObject.minute(),
      second: 0, // Assuming you want to set seconds to 0
    });

    return dateObject;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingBottom: 280,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: Colors.GREY,
          }}
        >
          Book Appointment
        </Text>
        <SubHeading subHeadingTitle={"Day"} seeAll={false} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nextSevenDays}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedDate(item.date)}
              style={[
                selectedDate == item.date ? styles.active : styles.inactive,
                styles.selectButton,
              ]}
            >
              <Text
                style={[
                  {
                    fontFamily: "appfont",
                  },
                  selectedDate == item.date
                    ? { color: Colors.WHITE }
                    : { color: Colors.GREY },
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  {
                    fontFamily: "appfont-semi",
                  },
                  selectedDate == item.date
                    ? { color: Colors.WHITE }
                    : { color: Colors.GREY },
                ]}
              >
                {item.formattedDate}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Separator />
        <SubHeading subHeadingTitle="Time" seeAll={false} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={times}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTime(item.time)}
              style={[
                styles.selectButton,
                selectedTime == item.time ? styles.active : styles.inactive,
                { paddingVertical: 10 },
              ]}
            >
              <Text
                style={[
                  { fontFamily: "appfont-semi" },
                  selectedTime == item.time
                    ? { color: Colors.WHITE }
                    : { color: Colors.GREY },
                ]}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Separator />
        <SubHeading subHeadingTitle="Note" seeAll={false} />
        <TextInput
          onChangeText={(value) => setNote(value)}
          style={{
            backgroundColor: Colors.LIGHT_GREY,
            borderRadius: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.SECONDARY,
            textAlignVertical: "top",
          }}
          placeholder="Write Note Here"
          numberOfLines={3}
        />
        <TouchableOpacity
          disabled={sendingData || appointmentSuccessful}
          onPress={() => bookAppointment()}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 10,
            margin: 10,
            borderRadius: 99,
            marginBottom: 10,
            left: 0,
            right: 0,
            zIndex: 20,
            alignItems: "center",
          }}
        >
          {sendingData ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: "appfont-semi",
                fontSize: 17,
              }}
            >
              Make Appointment
            </Text>
          )}
        </TouchableOpacity>
        {appointmentSuccessful && (
          <NotificationPopup
            onClose={closeNotification}
            message={"Appointment successfully booked"}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.PRIMARY,
  },
  inactive: {
    backgroundColor: Colors.WHITE,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
  },
});
