import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

export default function Slider() {
  const [sliderList, setSliderList] = useState();

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider()
      .then((resp) => {
        setSliderList(resp.data.data);
      })
      .catch((error) => {
        console.log("axios request failed: ", error.message);
      });
  };
  if (!sliderList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliderList}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data[0].attributes.url }}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
              borderRadius: 10,
              margin: 2,
            }}
          />
        )}
      />
    </View>
  );
}
