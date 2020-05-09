import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; 
      
  const Header = () => {
    return (

      <View style={styles.headerContainer}>


      <View style={styles.leftHederStyle}>
        <Image 
          source={require('../assets/loremImage.jpg')}
          style={{ width: 40, height: 40 }} 
        />
        <Text style={styles.nameStyle}>太郎</Text>
      </View>

      <View style={styles.rightHeaderStyle}>
        <Text style={styles.leftNumStyle}>拍手できる: 100</Text>
        <Text style={styles.rightNumStyle}>拍手された: 0</Text>
      </View>

      </View>

    );
  };

  const styles = StyleSheet.create({
    
    headerContainer: {
      height: 70,
      backgroundColor: '#68a9cf',
      flexDirection: 'row',
    },
    leftHederStyle: {
      width: 80,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 5,
      marginLeft: 5
    },
    nameStyle: {
      fontSize: 13,
      color: 'white',
    },
    rightHeaderStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    leftNumStyle: {
      fontSize: 15,
      color: 'white',
    },
    rightNumStyle: {
      fontSize: 15,
      color: 'white',
    },

  });  

export default Header;