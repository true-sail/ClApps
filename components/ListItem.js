import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListItem = ({ imageSource, text, date }) => {

  const [clapNum, countClaps] = useState(0);
  const onPress = () => countClaps(prevCount => prevCount + 1);

  return (

    <View style={styles.listContainer}>

      <View style={styles.upperContainer}>
        <View style={styles.fromUserStyle}>
          <Image
            source={{ uri: imageSource }}
            style={{ width: 35, height: 35 }}
          />
        </View>
        <Text style={styles.arrowStyle}>→</Text>
        <View style={styles.toUserStyle}>
          <Image
            source={{ uri: imageSource }}
            style={{ width: 35, height: 35 }}
          />
        </View>
      </View>  

      <View style={styles.middleContainer}>
        <Text numberOfLines={2} style={styles.textStyle}>
          {text}
        </Text>
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.claps}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image 
              source={require('../assets/clap-hands.png')}
              style={{ height: 22, width:22 }}
            />
          </TouchableOpacity>
          {/* 拍手の数 */}
          <Text style={styles.clapNum}>{clapNum}</Text>
         </View>
        <Text style={styles.dateStyle}>
          {date}
        </Text>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  listContainer: {
    height: 120,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    // 横並びrow,縦並びcolumn
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 5,
    flex: 1
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
  },
  fromUserStyle: {
  },
  arrowStyle: {
    fontSize: 20,
    padding: 6,
  },
  toUserStyle: {
  },
  middleContainer: {
    alignItems: 'center',
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  claps: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,

  },
  clapNum: {
    fontSize: 13,
    marginLeft: 5
  },
  dateStyle: {
    fontSize: 10,
    color: 'gray',
  }

});

export default ListItem;