import {View, Text, StyleSheet, StyleProp, TouchableOpacity, ViewStyle, GestureResponderEvent, Image} from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Link } from '@react-navigation/native';

interface ButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    content: string;
    addStyle?: StyleProp<ViewStyle>;
  }

const Button: React.FC<ButtonProps> = ({ onPress, content, addStyle }) => {
    return(
      <TouchableOpacity onPress={onPress} style={[styles.button, addStyle]}>
        <Text style={styles.buttonText}>{content}</Text>
      </TouchableOpacity>
    )
  }

export default function Landing() {
    const [height, setScreenHeight] = useState(Dimensions.get('window').height);
    const [width, setScreenWidth] = useState(Dimensions.get('window').width);
    const navigation = useNavigation();
    

    const handleButtonPress = (login_type:string) => {
      console.log("Button pressed")
      navigation.navigate(login_type as never)
    }

    return(

    
    <View style={styles.main}>
         <View style={[styles.card, {height: height*0.55}]}>
         {/* <Image source={require('C:\Users\grace\Desktop\TBGuardian\TBGuardian\assets\images\placeholder_icon.png.png')} /> */}
            <Text style={[styles.appname, {paddingTop: height*0.4}]}>TBGuardian</Text>
        </View>
        <Text style={styles.chooseText}>Choose account type</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => handleButtonPress('Patient Login')} content="Login as Patient" addStyle={{backgroundColor: '#023047'}}/>
          <Button onPress={() => handleButtonPress('Worker Login')} content="Login as Healthcare Worker" addStyle={{backgroundColor: '#FB8500'}}/>
        </View>
        <View style={styles.footer}></View>
      </View>
      )
}

const styles = StyleSheet.create({
    main:{
      flexDirection: 'column',
      flex: 1
    },
    appname:{
        fontSize: 48,
        fontFamily: 'AppName',
        color: 'white',
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
      fontFamily: 'Heading',
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