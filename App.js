import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

class Card extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <Text>Ok, This is epic!</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.master}>
        <View style={styles.headerView}>
          <Image
            style={styles.tinyLogo}
            resizeMethod={"resize"}
            source={require("./assets/picker_logo.png")}
          />
        </View>

        <View style={styles.contentView}>
          <Card />
          <Card />
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addbuttonText}>Add Picker</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  master: {
    flex: 1,
    flexDirection: "column",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "stretch",
    alignContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 5,
    paddingBottom: 5,
    backgroundColor: "white",
  },
  contentView: {
    alignItems: "stretch",
    alignContent: "center",
    backgroundColor: "yellow",
  },
  footerView: {
    position: "absolute",
    width: "100%",
    height: "7%",
    justifyContent: "flex-end",
    bottom: 0,
    backgroundColor: "white",
  },
  addButton: {
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  addbuttonText: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: "100%",
  },
  cardStyle: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    backgroundColor: "dodgerblue",
    borderRadius: 25,
    paddingHorizontal: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  tinyLogo: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    resizeMode: "contain",
    justifyContent: "center",
  },
});

/*import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  //console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    //justifyContent: "center",
    //paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});//*/
