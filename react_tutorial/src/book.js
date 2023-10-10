export const Book = ({ image, title, author, id, index, getBook }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>
        #{index + 1} {title}
      </h2>
      <h4>{author}</h4>

      <button onClick={() => getBook(id)}>click</button>
    </article>
  )
}
