import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import createBook from './pages/createBook';
import showbook from './pages/showBook';
import editBook from './pages/editBook';
import deleteBook from './pages/deleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {Home}/>
      <Route path='/book/create' element = {createBook}/>
      <Route path='/book/details/:id' element = {showbook}/>
      <Route path='/book/edit/:id' element = {editBook}/>
      <Route path='/book/delete/:id' element = {deleteBook}/>
    </Routes>
  )
}

export default App
