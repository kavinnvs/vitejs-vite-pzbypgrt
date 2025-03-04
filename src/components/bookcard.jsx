const BookCard = () => {
    const books = [
      {
        id: 1,
        image:
          'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
        name: 'The Great Adventure',
        genre: 'Fiction',
        author: 'Jane Doe',
      },
      {
        id: 2,
        image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
        name: 'Mysteries of the Universe',
        genre: 'Science',
        author: 'John Smith',
      },
      {
        id: 3,
        image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
        name: 'History Revisited',
        genre: 'Non-Fiction',
        author: 'Emily Johnson',
      },
      {
        id: 4,
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
        name: 'Culinary Delights',
        genre: 'Cooking',
        author: 'Michael Brown',
      },
    ];
  
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md bg-white">
            <img 
              src={book.image} 
              alt={book.name} 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
            <p className="text-gray-600"><strong>Genre:</strong> {book.genre}</p>
            <p className="text-gray-600"><strong>Author:</strong> {book.author}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BookCard;
  
