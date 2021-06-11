import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Book from '../../types/Book';
import colors from '../../styles/colors';

interface ComponentProps extends RectButtonProps {
  data: Book;
}

export default function BookCard({ data, ...rest }: ComponentProps) {
  return (
    <RectButton style={styles.container}
      {...rest}
    >
      <Image
      source={{
        uri: data.volumeInfo.imageLinks.smallThumbnail
      }}
      style={styles.image}
      />

    <View style={{display: 'flex', flexDirection: 'column'}}>
      <Text style={styles.textTitle}>
      {data.volumeInfo.title}
      </Text>
      <Text style={styles.textAuthor}>
        by {data.volumeInfo.authors}
      </Text>
    </View>

    </RectButton>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 142,
    maxWidth: '75%',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  textTitle: {
    maxWidth: 100,
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    left: 5,
  },
  textAuthor: {
    maxWidth: 100,
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    left: 5,
  },
  image: {
    height: 153,
    width: 99,
    alignSelf: 'center',
  }
})