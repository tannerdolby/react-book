export default class OpenLibrary {
  constructor() {
    this.baseUrl = 'https://covers.openlibrary.org';
  }

  async getCover(book) {
    if (!book || !book.id || !book.size) {
      return '';
    }

    try {
      const apiUrl = `${this.baseUrl}/b/id/${book.id}-${book.size || 'L'}.jpg`;
      const response = await fetch(apiUrl);
      if (response && response.status === 200) {
        return response.url;
      }
    } catch (err) {
      throw err;
    }
  }

  async getCovers(coversObjList) {
    let covers = [];
    for (const cover of coversObjList) {
      const { key, id, size } = cover;
      covers.push(await this.getCover(key, id, size));
    }
    return covers;
  }
}
