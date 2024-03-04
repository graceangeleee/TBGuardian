import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './landing';
import Login from './login';

const Stack = createStackNavigator();

export default function LoginLayout(){
  return(
    <LoginNavigator/>
  )
}

function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="Patient Login">
        {() => <Login user_type="patient" />}
      </Stack.Screen>
      <Stack.Screen name="Worker Login">
        {() => <Login user_type="worker" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}


// import {View, Text, StyleSheet, StyleProp, TouchableOpacity, ViewStyle, GestureResponderEvent, Image} from 'react-native';
// import { Dimensions } from 'react-native';
// import Login from './login';
// import { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

// interface ButtonProps {
//     onPress: (event: GestureResponderEvent) => void;
//     content: string;
//     addStyle?: StyleProp<ViewStyle>;
//   }

// const Button: React.FC<ButtonProps> = ({ onPress, content, addStyle }) => {
//     return(
//       <TouchableOpacity onPress={onPress} style={[styles.button, addStyle]}>
//         <Text style={styles.buttonText}>{content}</Text>
//       </TouchableOpacity>
//     )
//   }

// export default function Landing() {
//     const [height, setScreenHeight] = useState(Dimensions.get('window').height);
//     const [width, setScreenWidth] = useState(Dimensions.get('window').width);
//     const navigation = useNavigation();
    

//     // const handleButtonPress = (user_type:string) => {
//     //   navigation.navigate('Login', { user_type });
//     // }

//     return(

    
//     <View style={styles.main}>
//          <View style={[styles.card, {height: height*0.55}]}>
//          {/* <Image source={require('C:\Users\grace\Desktop\TBGuardian\TBGuardian\assets\images\placeholder_icon.png.png')} /> */}
//             <Text style={[styles.appname, {paddingTop: height*0.4}]}>TBGuardian</Text>
//         </View>
//         <Text style={styles.chooseText}>Choose account type</Text>
//         <View style={styles.buttonContainer}>
//           <Button onPress={() => navigation.navigate('login')} content="Login as Patient" addStyle={{backgroundColor: '#023047'}}/>
//           <Button onPress={() => navigation.navigate('login')} content="Login as Healthcare Worker" addStyle={{backgroundColor: '#FB8500'}}/>
//         </View>
//         <View style={styles.footer}></View>
//       </View>
//       )
// }

// const styles = StyleSheet.create({
//     main:{
//       flexDirection: 'column',
//       flex: 1
//     },
//     appname:{
//         fontSize: 48,
//         fontFamily: 'AppName',
//         color: 'white',
//         flexDirection: 'column',
//         alignItems: 'center',
//         alignContent: 'center',
//         alignSelf: 'center'
//     },
//     card:{
//         borderBottomLeftRadius: 60,
//         borderBottomRightRadius: 60,
//         backgroundColor: '#219EBC'
//     },
//     button:{
//       borderRadius: 60,
//       padding: 25,
//       alignContent: 'center',
//       alignItems: 'center',
//       marginTop: 20,
//       marginHorizontal: 20
  
//     },
//     buttonText: {
//       fontFamily: "Poppins",
//       fontSize: 16,
//       color: 'white'
//     },
//     buttonContainer:{
//       marginTop: 30
//     },
//     chooseText:{
//       fontSize: 30,
//       fontFamily: 'Heading',
//       alignSelf: 'center',
//       marginTop: 30
//     },
//     footer:{
//       backgroundColor: '#219EBC',
//       height: 70,
//       position: 'absolute',
//       alignSelf: 'flex-end',
//       bottom: 0,
//       left:0,
//       right:0
//     }
//   })
  
// // import React from 'react';
// // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // import { Link, Tabs } from 'expo-router';
// // import { Pressable } from 'react-native';

// // import Colors from '@/constants/Colors';
// // import { useColorScheme } from '@/components/useColorScheme';
// // import { useClientOnlyValue } from '@/components/useClientOnlyValue';


// // // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// // function TabBarIcon(props: {
// //   name: React.ComponentProps<typeof FontAwesome>['name'];
// //   color: string;
// // }) {
// //   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// // }

// // // const InputField: React.FC<InputFieldProps> = ({ placeholder, onChangeText, value}) => {
// // //   return(
// // //     <TextInput
// // //       style={styles.input}
// // //       placeholder={placeholder}
// // //       onChangeText={onChangeText}
// // //       value={value}
// // //     />
// // //   )
// // // }




// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //       <Tabs
// //         screenOptions={{
// //           tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
// //           // Disable the static render of the header on web
// //           // to prevent a hydration error in React Navigation v6.
// //           headerShown: useClientOnlyValue(false, true),
// //         }}
// //       >
// //         <Tabs.Screen
// //           name="index"
// //           options={{
// //             title: 'Tab One',
// //             tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
// //             headerRight: () => (
// //               <Link href="/modal" asChild>
// //                 <Pressable>
// //                   {({ pressed }) => (
// //                     <FontAwesome
// //                       name="info-circle"
// //                       size={25}
// //                       color={Colors[colorScheme ?? 'light'].text}
// //                       style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
// //                     />
// //                   )}
// //                 </Pressable>
// //               </Link>
// //             ),
// //           }}
// //         />
// //         <Tabs.Screen
// //           name="two"
// //           options={{
// //             title: 'Tab Two',
// //             tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
// //           }}
// //         />
// //       </Tabs>
// //     ) 
// // }


