import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = ({ imageSource, text, date }) => {
  return (
    <View style={styles.itemContainer}>

        <View style={styles.leftContainer}>
          <Image
            source={{ uri: imageSource }}
            style={{ width: 100, height: 100 }}
          />
          
        </View>

        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.textStyle}>
            {text}
          </Text>
          <Text style={styles.dateStyle}>
            {date}
          </Text>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({

  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    // 縦並びrow,横並びcolumn
    flexDirection: 'row',
  },

  leftContainer: {
    width: 100,
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },

  textStyle: {
    fontSize: 15,
  },

  dateStyle: {
    fontSize: 10,
    color: 'gray',
  }


});

export default ListItem;