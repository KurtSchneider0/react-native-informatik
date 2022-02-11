 import React, { useState, useEffect } from 'react';
 import { Keyboard, StyleSheet, Text, Button, View, TextInput } from 'react-native';
 
 const App = () => {
   const [text, onChangeText] = useState();
   const [submitValue, setSubmitValue] = useState(false);
   const [keyboardStatus, setKeyboardStatus] = useState(undefined);
 
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
 
   const handlePress = () => {
     setSubmitValue(text);
   }
 
   return (
     <View style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
       }}>
       <TextInput
         style={{padding: 5, borderWidth: 0.5, borderRadius: 4}}
         onChangeText={onChangeText}
         value={text}
         onSubmitEditing={Keyboard.dismiss}
       />
       <Button
         onPress={handlePress}
         title="Submit"
         color="#841584"
         accessibilityLabel="Submit"
       />
       <Text>{submitValue}</Text>
     </View>
   );
 }
 
 export default App;