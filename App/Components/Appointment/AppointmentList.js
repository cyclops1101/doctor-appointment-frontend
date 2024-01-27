import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "../Home/SubHeading";
import Separator from "../Shared/Separator";
import GlobalApi from "../../Services/GlobalApi";
import moment from "moment";
import AppointmentItemCard from "./AppointmentItemCard";
import Loader from "../Shared/Loader";

export default function AppointmentList() {
  const [futureAppointmentList, setFutureAppointmentList] = useState([]);
  const [pastAppointmentList, setPastAppointmentList] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = () => {
    GlobalApi.getAppointments()
      .then((resp) => {
        sortDates(resp.data.data);
        setFetchingData(false);
      })
      .catch((error) => console.log("Axios error: ", error.message));
  };

  const sortDates = (dates) => {
    const { future, past } = dates.reduce(
      (acc, appointment) => {
        const time = isDatetimeInFutureOrPast(appointment.attributes.DateTime);
        if (time == "future") {
          acc.future.push(appointment);
        } else {
          acc.past.push(appointment);
        }
        return acc;
      },
      { future: [], past: [] }
    );
    setPastAppointmentList(past);
    setFutureAppointmentList(future);
  };

  const isDatetimeInFutureOrPast = (datetimeString) => {
    const currentDate = new Date();
    const targetDate = new Date(datetimeString);

    if (isNaN(targetDate)) {
      // Handle invalid date
      throw new Error("Invalid datetime format");
    }

    if (targetDate > currentDate) {
      return "future";
    } else if (targetDate < currentDate) {
      return "past";
    } else {
      return "present";
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SubHeading subHeadingTitle={"Upcoming Appointments"} seeAll={false} />
      <Loader loading={fetchingData}>
        {futureAppointmentList.length ? (
          <FlatList
            data={futureAppointmentList}
            renderItem={({ item }) => (
              <AppointmentItemCard appointment={item} />
            )}
          />
        ) : (
          <Text>No Upcoming Appointments</Text>
        )}
      </Loader>
      <Separator />
      <SubHeading subHeadingTitle={"Past Appointments"} seeAll={false} />
      <Loader loading={fetchingData}>
        {pastAppointmentList.length ? (
          <FlatList
            data={pastAppointmentList}
            renderItem={({ item }) => (
              <AppointmentItemCard appointment={item} />
            )}
          />
        ) : (
          <Text>No Past Appointments</Text>
        )}
      </Loader>
    </ScrollView>
  );
}
