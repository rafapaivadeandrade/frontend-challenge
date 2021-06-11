import React from 'react';
import Routes from './src/routes/routes';
import { BookProvider } from "./src/hooks";
import {ThemeContextProvider} from './theme';

export default function App() {
  return (
    <BookProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
   </BookProvider> 
  );
}