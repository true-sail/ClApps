import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text, AsyncStorage, KeyboardAvoidingView, Platform,TextInput, Button, Alert } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
import ListItem from './components/ListItem';
import posts from './dummies/posts';
import Users from './objects/Users';
import Registration from './components/Registration';
export default function App() {

  return (

    <SafeAreaView style={styles.container}>


    <Registration/>
      {/* <Test/> */}

      {/* ヘッダー */}
      <Header>
        {/* // data={users}
        // userName={userName}
        // userImageSource={userImageSource}
        // clapNum={clapNum}
        // clappedNum={clappedNum} */}


      </Header>

      {/* 投稿欄 */}
      <Post/>
      <Users/>

      {/* 表示欄 */}
      {/* <FlatList 
        data={posts} // 表示したいデータの配列
        renderItem={({ item }) => (
          <ListItem  // 表示したい配列の1項目
          imageSource={item.imageSource}
          text={item.text}
          date={item.date}
          /> 
        )}
        keyExtractor={(item, index) => index.toString()}
      /> */}

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  postsContainer: {
    flex: 1,
  },

});
