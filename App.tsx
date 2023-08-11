import React,{useState,useEffect} from 'react'
import {View,Text, StyleSheet,Image} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useCountdown } from 'react-native-countdown-circle-timer'

const App = () => {

     
    


  
    const generateCode = () => {
      const codeLength = 6;
      const characters = '0123456789';
      let code = '';
  
      for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
      }
  
      return code;
    };
    const [code, setCode] = useState(generateCode());

    useEffect(() => {
      const interval = setInterval(() => {
        setCode(generateCode());
      }, 60000);
  
      return () => clearInterval(interval);
    }, []);



  return (

 <View style={styles.contenedor}>

  <View style={{margin:4,flexDirection:'row'}}>
<CountdownCircleTimer
        isPlaying={true}
        duration={60}
        colors={["#F7B801", "#F7B801", "#F7B801", "#F7B801"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true })}
        updateInterval={1}
   size={54}
     
    >
    {({ remainingTime, color }) => (
        <Image source={require('./assests/descarga.png')} style={styles.imagen} />
      )}
    </CountdownCircleTimer>
<View style={{margin:15}}>
  <Text>{code}</Text>
  </View>
    </View>
 </View>

  )
}

const styles=  StyleSheet.create({

  contenedor:{
    width:150,
    height:60,
    margin:30,
    borderRadius:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
    

  },
  imagen:{
    width:20,
    height:20
  }
})

export default App