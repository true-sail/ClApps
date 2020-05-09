import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Post = () => {
  const [content, inputContent] = useState('アイウエオ'); 

  return (
    <View style={styles.postContainer}>
      <Text style={styles.messageStyle}>
        あなたの仲間のステキな行動を褒めようゼ!
      </Text>

      <View style={styles.squaresContainer}>

          <Text style={styles.arrowStyle}>→</Text>

        <View style={styles.leftPost}>
          <Image 
            source={{uri: 'https://i.picsum.photos/id/1048/200/300.jpg'}}
            style={{ height: 50, width: 50}} 
          />
          <Text style={styles.nameStyle}>Taro</Text>
        </View>

        {/* textField */}
        <TextInput
          multiline 
          style={styles.middlePost}
          placeholder='ここに入力してください'
          onChangeText={(val) => inputContent(val)}
        >
          <Text>{content}</Text>
        </TextInput>


        {/* 投稿ボタン */}
        <TouchableOpacity　style={styles.rightPost}>
          <Text style={styles.buttonTitleStyle}>投稿</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  postContainer: {
    backgroundColor: 'red',
    height: 100,
    backgroundColor: '#f5f5f5',
    // flexDirection: 'column',
  },
  squaresContainer: {
    flexDirection: 'row',
  },
  arrowStyle: {
    fontSize: 30,
    marginVertical: 10,
    marginLeft: 5,
  },
  messageStyle: {
    fontSize: 17,
    margin: 3,
    paddingLeft: 5,
  },
  leftPost: {
    flexDirection: 'column',
    width: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
  },
  nameStyle: {
    fontSize: 15,
  },
  middlePost: {
    height:65,
    width: 220,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
  },
  rightPost: {
    backgroundColor: '#68a9cf',
    height: 65,
    width: 55,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {
    color: 'white',
    fontSize: 18,
  },

});

export default Post;
