import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import createBook from './pages/createBook';
import ShowBook from './pages/showBook';
import editBook from './pages/editBook';
import deleteBook from './pages/deleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/books/create' element = {<createBook/>}/>
      <Route path='/books/details/:id' element = {<ShowBook/>}/>
      <Route path='/books/edit/:id' element = {editBook}/>
      <Route path='/books/delete/:id' element = {<deleteBook/>}/>
    </Routes>
  )
};

export default App;
