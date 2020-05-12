import React, { Component }from 'react';
import { View, TextInput, Text, Button, Alert, AsyncStorage } from 'react-native';

class UserList extends Component {

  state = {email: ''};

  render() {
    
    return (

      <View>
        <Text>
          emailを登録してください
        </Text>
        <TextInput
          placeholder='user@gmail.com'
          label="Email"
          value={this.state.email}
          onChangeText={ email => this.setState({ email })}
        />
        <Button 
          title='登録する' 
          onPress={ (email) => this.storeData(email) }
        />
      </View>

    );
  };

  storeData = async (email) => {
    if (this.state.email == '' ) {
      Alert.alert('emailを入力してください');
      return;
    } else {
      try {
        await AsyncStorage.setItem(state.email, email);
        console.log(state.email);
        Alert.alert('登録しました！');
      } catch (error) {
        console.log(error);
      }
      
    }
  };

};

export default UserList;