import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books.js'
import { Book } from './book.js'

const BookList = () => {
  const getBook = (id) => {
    let book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        <em>Best Sellers</em>
      </h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book {...book} key={book.id} index={index} getBook={getBook} />
        ))}
      </section>
    </>
  )
}

// "https://www.amazon.com.au/gp/bestsellers/books"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
