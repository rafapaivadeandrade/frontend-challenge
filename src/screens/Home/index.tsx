import React from 'react'
import { ActivityIndicator, FlatList} from 'react-native'
import SearchBar from '../../components/SearchBar';
import colors from '../../styles/colors';
import { Container, GreetingsText, GreetingsView, UserNameText, BooksView } from './styles'
import BookCard from '../../components/BookCard';
import Book from '../../types/Book';
import { useNavigation } from '@react-navigation/native';
import { useBook } from "../../hooks";

export default function Home() {
  const {filteredBooks, fetchBooks, setLoadingMore,setPage, loading, loadingMore } : any = useBook();
  const navigation = useNavigation();

  function handleSelectedBook(item : Book) {
    navigation.navigate("Details", {detailedBook: item})
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;
    
    setLoadingMore(true)
    setPage((oldValue: number) => oldValue + 1)
    fetchBooks()
  }

  if (loading)
    return <ActivityIndicator style={{alignItems: 'center', justifyContent: 'center'}} color={colors.green} />

  return (
    <Container>
      <SearchBar />
      <GreetingsView>
        <GreetingsText>Hi, </GreetingsText>
        <UserNameText>Rafael 👋</UserNameText>
      </GreetingsView>

      <BooksView>
        <FlatList
          data={filteredBooks}
          keyExtractor={(item: any, index: number) => index}
          renderItem={({item}) => {
            return <BookCard  data={item}
            onPress={() => handleSelectedBook(item)}
            />
          }
        }
        style={ { width: '110%' }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
        }
        />
      </BooksView>
    </Container>
  )
}
