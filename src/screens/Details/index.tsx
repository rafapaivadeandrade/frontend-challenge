import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Feather as Icon, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

export default function Details({ route }: any) {
  const navigation = useNavigation();
  const { detailedBook } = route.params;
  
  return (
  <>
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()}
        style={{ position: 'absolute', left: 32, top: 55 }} />
      <Image
      source={{
        uri: detailedBook.volumeInfo.imageLinks.smallThumbnail
      }}
      style={styles.image}/>
    </View>
      
    <View style={styles.content}>
        <Text style={styles.title}>{detailedBook.volumeInfo.title}</Text>
        <Text style={styles.subTitle}>{detailedBook.volumeInfo.subtitle}</Text>
        <Text style={styles.author}>{detailedBook.volumeInfo.authors}</Text>

        <ScrollView style={styles.scroll}>
         <Text style={styles.description}>{detailedBook.volumeInfo.description}</Text>
         <Text style={styles.description}>{detailedBook.volumeInfo.description}</Text>
        </ScrollView>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.readView}>
            <Icon name="book-open" size={20} color="#CFCBD2"/>
           <Text style={styles.read}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listenView}>
            <FontAwesome5 name="headphones" size={20} color="#CFCBD2" />
            <Text style={styles.listen}>Listen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareView}>
            <Icon name="share" size={20} color="#CFCBD2" />
            <Text style={styles.share}>Share</Text>
          </TouchableOpacity>
        </View>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height /3,
    maxWidth: '100%',
    borderBottomEndRadius: 100,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.secondWhite
  },
  image: {
    height: Dimensions.get('window').height /3.4,
    width: Dimensions.get('window').width * 0.3,
    alignSelf: 'center',
    marginTop: 50,
  },
  content: {
    flex: 1,
    marginTop: 50,
    backgroundColor: colors.secondWhite,
    maxWidth: '80%',
    left: 20,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitle: {
    fontWeight: 'normal',
    color: colors.black,
    fontSize: 24,
  },
  author: {
    marginTop: 10,
    letterSpacing: 0.67,
    color: colors.red,
    fontSize: 16,
  },
  description: {
    color:  colors.gray,
    lineHeight: 40
  },
  scroll: {
    height: 10,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
    top: -30,
    height: 60,
    zIndex: 8,
  },
  readView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 60,
  },
  listenView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: colors.lightGray,
    paddingLeft: 30,
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: colors.lightGray,
    paddingLeft: 30,
  },
  read: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  listen: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 10,
  },
  share: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
})