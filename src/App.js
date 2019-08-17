import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { CategoryList } from './components/CategoryList';
import { PhotoCard } from './components/PhotoCard';

const App = () => (
    <>
      <GlobalStyle />
      <CategoryList />
      <PhotoCard />
    </>
  );


export default App;