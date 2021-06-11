import React, { createContext, useState, useContext, useEffect } from "react";
import api from '../services/api';
import Book from "../types/Book";
import NameProps from "../types/name";

type BookContextType = {
  name: string;
  searchBook: (name: string) => Book;
}

const BookContext = createContext<BookContextType | {}>({});

export const BookProvider = ({ children }: any) => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('harry potter')
  const [loadingMore, setLoadingMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [searchedBook, setSearchedBook] = useState<NameProps>();

  async function fetchBooks() {

    if (searchedBook)
    {
      searchBook(searchedBook)
    }

    else
    {
      const { data } = await api.get(`${query}?_sort=name&_order=asc&_page=${page}&_limit=2`);
      
      if (!data)
        return setLoading(true)
      
      if (page > 1)
      {
        setFilteredBooks(oldValue => [...oldValue, ...data.items])
  
      }
      else
      {
        setFilteredBooks(data.items);
      }
  
      setLoading(false)
      setLoadingMore(false)
    }

  }

  async function searchBook(name: NameProps | undefined) {

    setSearchedBook(name)

    if (name?.name.length === 0)
    {
      const { data } = await api.get(`${query}?_sort=name&_order=asc&_page=${page}`);
      setFilteredBooks(data.items);
    }
    else
    {
      const { data } = await api.get(`${name?.name}?_sort=name&_order=asc&_page=${page}`);
      setFilteredBooks(data.items);
      if (page > 1)
      {
        setFilteredBooks(oldValue => [...oldValue, ...data.items])
      }
    }

    setLoading(false)
    setLoadingMore(false)
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <BookContext.Provider value={{searchBook, filteredBooks, fetchBooks,  setLoadingMore,setPage, loading, loadingMore}}>
      {children}
    </BookContext.Provider>
  );
};

export function useBook() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("User must be used within an BookProvider");
  }

  return context;
}
