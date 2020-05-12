import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: ['']};
      
  }

  // データ取得


  onPressHandler = () => {
    this.storeData(this.state.email);
  };

  checkData = () => {
    this.getData()
  }

  // データ保存
  storeData = async (email) => {
    if (email == '') {
      Alert.alert('emailを入力してください');
      return;
    } else {
      try {
        await AsyncStorage.setItem('email', email);
        Alert.alert('登録しました！');
        console.log(this.state);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // データ取得
  // getData = async () => {
  //   try{
  //     const value = await AsyncStorage.getItem('email');
  //     if(value !== null){
  //       Alert.alert("ユーザーのデータを取得しました。");
  //     }else{
  //       Alert.alert("ユーザーが登録されていません。");
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <View>
        <Text>emailを登録してください</Text>
        <TextInput
          placeholder='user@gmail.com'
          label='Email'
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <Button title='登録する' onPress={this.onPressHandler} />
      </View>
    );
  }
}

export default UserList;