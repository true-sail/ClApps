import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  onPressHandler = () => {
    this.storeData(this.state.email);
  };
  storeData = async (email) => {
    if (email == '') {
      Alert.alert('emailを入力してください');
      return;
    } else {
      try {
        await AsyncStorage.setItem('email', email);

        Alert.alert('登録しました！');
      } catch (error) {
        console.log(error);
      }
    }
  };

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