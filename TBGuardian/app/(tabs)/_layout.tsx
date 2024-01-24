import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, Text, StyleSheet, ViewStyle, StyleProp, TouchableOpacity, GestureResponderEvent, Touchable} from 'react-native';
import { Dimensions } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useState, useEffect } from 'react';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  content: string;
  addStyle?: StyleProp<ViewStyle>;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// const InputField: React.FC<InputFieldProps> = ({ placeholder, onChangeText, value}) => {
//   return(
//     <TextInput
//       style={styles.input}
//       placeholder={placeholder}
//       onChangeText={onChangeText}
//       value={value}
//     />
//   )
// }

const Button: React.FC<ButtonProps> = ({ onPress, content, addStyle }) => {
  return(
    <TouchableOpacity onPress={onPress} style={[styles.button, addStyle]}>
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  )
}


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [height, setScreenHeight] = useState(Dimensions.get('window').height);
  const [width, setScreenWidth] = useState(Dimensions.get('window').width);
  const handleButtonPress = () => {
    console.log("Button Pressed!")
  }

  return (
    isLoggedIn ? (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Tab One',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    ) : (
      <View style={styles.main}>
         <View style={[styles.card, {height: height*0.55}]}>
            {/* <Image source={require('C:\Users\grace\Desktop\practice_mobile_app\screens\Login\login_assets\logo.svg')} /> */}
            <Text style={[styles.appname, {paddingTop: height*0.4}]}>TBGuardian</Text>
        </View>
        <Text style={styles.chooseText}>Choose account type</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={handleButtonPress} content="Login as Patient" addStyle={{backgroundColor: '#023047'}}/>
          <Button onPress={handleButtonPress} content="Login as Healthcare Worker" addStyle={{backgroundColor: '#FB8500'}}/>
        </View>
        <View style={styles.footer}></View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
    flex: 1
  },
  appname:{
      fontSize: 48,
      fontFamily: 'Inter',
      color: 'white',
      fontWeight: '900', 
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center'
  },
  card:{
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,
      backgroundColor: '#219EBC'
  },
  button:{
    borderRadius: 60,
    padding: 25,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20

  },
  buttonText: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: 'white'
  },
  buttonContainer:{
    marginTop: 30
  },
  chooseText:{
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 30
  },
  footer:{
    backgroundColor: '#219EBC',
    height: 70,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    left:0,
    right:0
  }
})
