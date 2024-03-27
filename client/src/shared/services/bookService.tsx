import BookData from '../interfaces/bookData';

export async function fetchBooks(searchTerm: string): Promise<BookData[]> {
  try {
    const response = await fetch('/key');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const apiKey = await response.text();
    const bookResponse = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`,
    );
    if (!bookResponse.ok) {
      throw new Error(`HTTP error! status: ${bookResponse.status}`);
    }
    const data = await bookResponse.json();
    return data.items.map((book: any) => ({
      id: book.id,
      volumeInfo: {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        imageLinks: {
          thumbnail: book.volumeInfo.imageLinks.thumbnail,
        },
        description: book.volumeInfo.description,
      },
    }));
  } catch (error) {
    console.log('Fetch error: ', error);
    return [];
  }
}
