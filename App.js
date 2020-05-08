import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text } from 'react-native';
import ListItem from './components/ListItem';
import posts from './dummies/posts';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* ヘッダー */}
      <View style={styles.headerContainer}>

        <View style={styles.leftHederStyle}>
          <Image 
            source={require('./assets/loremImage.jpg')}
            style={{ width: 40, height: 40 }} 
          />
          <Text style={styles.nameStyle}>太郎</Text>
        </View>

        <View style={styles.rightHeaderStyle}>
          <Text style={styles.leftNumStyle}>拍手できる: 100</Text>
          <Text style={styles.rightNumStyle}>拍手された: 0</Text>
        </View>

      </View>

      {/* 投稿欄 */}
      <View style={styles.textFieldContainer}>
      </View>

      {/* 表示欄 */}
      <View style={styles.postsContainer}>
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
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  headerContainer: {
    height: 70,
    backgroundColor: '#68a9cf',
    flexDirection: 'row',
  },
  leftHederStyle: {
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  nameStyle: {
    color: 'white',
  },
  rightHeaderStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  leftNumStyle: {
    fontSize: 15,
    color: 'white',
  },
  rightNumStyle: {
    fontSize: 15,
    color: 'white',
  },
  textFieldContainer: {
    height: 100,
    backgroundColor: 'blue',
  },
  postsContainer: {
    flex: 1,
  }


});
