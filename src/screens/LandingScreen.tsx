import React, { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import {connect} from 'react-redux'
import {onUpdateLocation,UserState,ApplicationState} from '../redux'


import { useNavigation } from "../utils";
//import {Location} from 'expo';
const screenWidth = Dimensions.get("screen").width;

interface LandingProps{
  userReducer: UserState,
  onUpdateLocation: Function
}

const _LandingScreen: React.FC<LandingProps> = (props) => {
  const {userReducer,onUpdateLocation} = props;
  
  const { navigate } = useNavigation();
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.Address>();

  const [displayAddress, setDisplayAddress] = useState(
    "Waiting for current location"
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
      }
      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          setAddress(item);
          onUpdateLocation(address)
          let currentAddress = `${item.name},${item.street}, ${item.postalCode}, ${item.country}`;
          setDisplayAddress(currentAddress);

          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigate("homeStack");
            }, 2000);
          }

          return;
        }
      } else {
        // something is wrong
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  navigation: {
    flex: 2,
    //backgroundColor: "red",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  footer: {
    flex: 1,
    // backgroundColor: "cyan",
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7D7D7D",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },
});

const mapToStateProps = (state: ApplicationState) =>({
  userReducer: state.userReducer
})

const LandingScreen = connect(mapToStateProps,{onUpdateLocation})(_LandingScreen)

export { LandingScreen}