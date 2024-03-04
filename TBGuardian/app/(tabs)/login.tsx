import { View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import { useState } from 'react';
import Palette from '@/constants/Palette';

interface LogInProps {
    // No need to declare user_type here
    user_type: string
}
  
  const Login: React.FC<LogInProps> = ({user_type}) => {
    // console.log(user_type) //patient or worker
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nameFocus, setNameFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
      
 
    console.log(username);
    console.log(password);
    
    const handleButtonPress = () => {
        console.log("Login");
    }
    
    return (
      <View style={styles.main}>
        <Text style={styles.welcome}>Welcome back</Text>
        <View style={styles.inputcontainer}>
            <TextInput onFocus={()=> setNameFocus(true)} 
                onBlur={()=> setNameFocus(false)} 
                style={styles.inputfield} 
                placeholder='Username' 
                onChangeText={setUsername}/>
            <TextInput onFocus={() => setPassFocus(true)} 
                onBlur={() => setPassFocus(false)} 
                style={styles.inputfield} 
                placeholder='Password' 
                onChangeText={setPassword}/>
            <Pressable onPress={handleButtonPress} style={styles.loginbutton}>
                <Text style={{color: 'white', fontSize: 16, fontFamily: 'Poppins'}}>Login</Text>
            </Pressable>
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
  
  export default Login;

const styles = StyleSheet.create({
    main:{
        flexDirection: 'column',
        flex: 1
    },
    welcome:{
        fontFamily:'Heading',
        fontSize: 30,
        marginLeft: '7%',
        marginTop: 40
    },
    footer:{
        backgroundColor: '#219EBC',
        height: 70,
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        left:0,
        right:0
    },
    inputfield:{
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 16,
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 60,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    focus:{
        borderColor: Palette.focused,
        color: Palette.focused,
    },
    inputcontainer:{
        marginTop: 10
    },
    loginbutton:{
        marginHorizontal: 20,
        backgroundColor: Palette.buttonOrLines,
        borderRadius: 60,
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
        alignContent: 'center'
    }

})
  

// export default function Login () {
//     return (
//         <View>

//         </View>
//     )
// }