const getBookCover = (isbn: string): Promise<string> => {
  return fetch(`https://api.bookcover.longitood.com/bookcover/${isbn}`, {})
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data.url;
    });
};

export default getBookCover;
