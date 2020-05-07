import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import posts from './dummies/posts';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
