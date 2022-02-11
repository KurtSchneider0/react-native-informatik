import React, { useState } from "react";
import { View, Picker, Image } from "react-native";
import Apfel from "./assets/Apfel.jpg";
import Banane from "./assets/Banane.jpg";
import Birne from "./assets/Birne.jpg";
import Weintraube from "./assets/Weintraube.jpg";

// Definiert eine React Komponente <App/>
const App = () => {
  // Definiert einen internen State der React Komponente
  const [selectedValue, setSelectedValue] = useState(Apfel);

  // Setzt den internen State der Komponente zu einem passendem Bild
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

  // Returnt jsx was dann in Native Komponenten umgewandelt wird
  return (
    <View style={{
      flex: 1,
      paddingTop: 40,
      alignItems: "center"}}>
      {/* Definiert die select Komponente */}
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        // Wenn eine Auswahl getroffen wird, die Funktion handlePick getriggered
        onValueChange={(itemValue, itemIndex) => handlePick(itemValue)}
      >
        <Picker.Item label="Apfel" value="Apfel" />
        <Picker.Item label="Banane" value="Banane" />
        <Picker.Item label="Birne" value="Birne" />
        <Picker.Item label="Weintraube" value="Weintraube" />
      </Picker>
      {/* Zeigt das Bild */}
      <Image style={{height: 200, width: 200}} source={selectedValue} />
    </View>
  );
}

export default App;