import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random(),
      name: '',
    };
    // this.userList = [];

      
  }

  // データ取得


  onPressHandler = () => {
    this.storeData(this.state.name);
  };

  // checkData = () => {
  //   this.getData()
  // }

  // データ保存
  storeData = async (name) => {
    if (name == '') {
      Alert.alert('空欄を入力してください');
      return;
    } else {
      try {
        await AsyncStorage.setItem('name', name);
        Alert.alert('登録しました！');
        console.log(this.state);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <View>
        <Text>名前を登録してください</Text>
        <TextInput
          placeholder='日本太郎'
          label='名前'
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        />
        <Button title='登録する' onPress={this.onPressHandler} />
      </View>
    );
  }
}

export default UserList;