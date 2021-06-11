interface Book {
      volumeInfo: {
        title: string,
        subtitle: string,
        authors: [string],
        description: string,
        imageLinks: {
          smallThumbnail: string,
          thumbnail: string,
        }
      }
    }
export default Book;