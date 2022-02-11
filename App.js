import React, { useState } from "react";
import { View, Picker, Image } from "react-native";
import Apfel from "./assets/Apfel.jpg";
import Banane from "./assets/Banane.jpg";
import Birne from "./assets/Birne.jpg";
import Weintraube from "./assets/Weintraube.jpg";

const App = () => {
  const [selectedValue, setSelectedValue] = useState(Apfel);

  const handlePick = (val) => {
    switch (val) {
      case "Apfel":
        setSelectedValue(Apfel);
        break;
      case "Banane":
        setSelectedValue(Banane);
        break;
      case "Birne":
        setSelectedValue(Birne);
        break;
      case "Weintraube":
        setSelectedValue(Weintraube);
        break;
      default:
        break;
    }
  }

  return (
    <View style={{
      flex: 1,
      paddingTop: 40,
      alignItems: "center"}}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => handlePick(itemValue)}
      >
        <Picker.Item label="Apfel" value="Apfel" />
        <Picker.Item label="Banane" value="Banane" />
        <Picker.Item label="Birne" value="Birne" />
        <Picker.Item label="Weintraube" value="Weintraube" />
      </Picker>
      <Image style={{height: 200, width: 200}} source={selectedValue} />
    </View>
  );
}

export default App;