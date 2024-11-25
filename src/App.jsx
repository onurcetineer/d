import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Publisher from './pages/Publisher';
import Category from './pages/Category';
import Book from './pages/Book';
import Writer from './pages/Writer';
import AddBook from './pages/AddBook';
import Homepage from './components/Homepage';
// Routes Route

function App() {
    
  return (
    <div>
      <Homepage/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Publisher' element={<Publisher/> }/>
        <Route path='/Category' element={<Category/> }/>
        <Route path='/Book' element={<Book/> }/>
        <Route path='/Writer' element={<Writer/> }/>
        <Route path='/AddBook' element={<AddBook/> }/>
      </Routes>
    </div>
  )
}

export default App