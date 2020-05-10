import React, { useState }from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text, AsyncStorage, KeyboardAvoidingView, Platform,TextInput, Button, Alert } from 'react-native';

const Registration = () => {

const [userName, onChangeText] = React.useState();

  return (


      <View>
        <Text>ユーザー情報を登録してください</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder='名前を入力してください'
            editable
            maxLength={10} // 最長
            onChangeText={text => onChangeText(text)}
            // value={content}
        />
        <Button 
          title='登録する' 
          onPress={() => {
            if (userName.length < 1 ) {
              Alert.alert('名前を入力してください');
              return;
            } else {
              storeData(userName)
              console.log({userName})
              // 投稿できた後、toUserの画像とtextFieldの内容を消す
            }
          }}
        />

      </View>

  );

};


const storeData = async (userName) => {
  try {
    await AsyncStorage.setItem('userName', userName);
    console.log(userName);
  } catch (error) {
    console.log(error);
  }
  Alert.alert('登録しました！');
};

export default Registration;