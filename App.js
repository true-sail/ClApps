import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text } from 'react-native';
import ListItem from './components/ListItem';
import Header from './components/Header';
import posts from './dummies/posts';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* ヘッダー */}
      {/* <View style={styles.headerContainer}> */}
        <Header/>
      {/* </View> */}


      {/* 投稿欄 */}
      <View style={styles.textFieldContainer}>
      </View>

      {/* 表示欄 */}
      {/* <View style={styles.itemContainer}> */}
      <FlatList 
        data={posts} // 表示したいデータの配列
        renderItem={({ item }) => (
          <ListItem  // 表示したい配列の1項目
          imageSource={item.imageSource}
          text={item.text}
          date={item.date}
          /> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* </View> */}
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  textFieldContainer: {
    height: 100,
    backgroundColor: 'blue',
  },
  postsContainer: {
    flex: 1,
  }


});
