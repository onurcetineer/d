import React from 'react'
import { Link } from "react-router-dom";

function Homepage (){
  return (
    <div className='container'>
      
      <Link to="/">
      <div className='button type--A'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/" className='button__text'>HOME</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>


    <Link to="/Publisher">
    <div className='button type--B'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/Publisher" className='button__text'>PUBLISHER</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>


    <Link to="/Category">
    <div className='button type--B'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/Category" className='button__text'>CATEGORY</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>

    <Link to="/Book">
    <div className='button type--B'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/Book" className='button__text'>BOOK</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>

    <Link to="/Writer">
    <div className='button type--B'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/Writer" className='button__text'>WRITER</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>

    <Link to="/AddBook">
    <div className='button type--B'>
      <div className='button__line'></div>
      <div className='button__line'></div>
    <Link to="/AddBook" className='button__text'>ADD BOOK</Link>
    <div className='button__drow1'></div>
    <div className='button__drow2'></div>
    </div>
    </Link>

    
    
    </div>
  )
}

export default Homepage