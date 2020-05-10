
import React from 'react';
import { StyleSheet, View, Button, Alert, AsyncStorage } from 'react-native';

const Users = () => {
  return (
    <View style={styles.container}>
      {/* <Button title='保存' onPress={() => storeData('fuga')} /> */}
      <Button title='取得' onPress={() => getData()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('content');
    if (value !== null) {
      Alert.alert('getData() returned value: ' + value);
      console.log(AsyncStorage);
    } else {
      Alert.alert('getData() did not return value');
    }
  } catch (error) {
    console.log(error);
  }
};

export default Users;