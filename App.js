 import React, { useState, useEffect } from 'react';
 import { Keyboard, Text, Button, View, TextInput } from 'react-native';
 
 // Definiert eine React Komponente <App/>
 const App = () => {
   // Definiert einen interne States der React Komponente
   const [text, onChangeText] = useState();
   const [submitValue, setSubmitValue] = useState(false);
   const [keyboardStatus, setKeyboardStatus] = useState(undefined);
 
   // Lässt die Tastatur erscheinen, falls das Textfeld angeklickt wird
   useEffect(() => {
     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
       setKeyboardStatus("Keyboard Shown");
     });
     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
       setKeyboardStatus("Keyboard Hidden");
     });
 
     return () => {
       showSubscription.remove();
       hideSubscription.remove();
     };
   }, []);
 
   
   // Falls der Button gedrückt wird, wird der State auf den jetztigen Wert text gesetzt
   const handlePress = () => {
     setSubmitValue(text);
   }
 
   // Returnt jsx was dann in Native Komponenten umgewandelt wird
   return (
     <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
       }}>
        {/* Definiert die Textbox */}
       <TextInput
         style={{padding: 5, borderWidth: 0.5, borderRadius: 4}}
         // Ändert bei jeder Eingabe ins textfeld den state text
         onChangeText={onChangeText}
         value={text}
         onSubmitEditing={Keyboard.dismiss}
       />
       {/* Definiert den Button */}
       <Button
         // Falls der Button gedrückt wird handlePress ausgeführt
         onPress={handlePress}
         title="Submit"
         color="#841584"
         accessibilityLabel="Submit"
       />
       { /* Rendert das Output von handlePress */}
       <Text>{submitValue}</Text>
     </View>
   );
 }
 
 export default App;