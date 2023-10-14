export default class OpenLibrary {
  constructor() {
    this.baseUrl = 'https://covers.openlibrary.org';
  }

  async getCover(openLibraryId, size='L') {
    if (!openLibraryId) {
      return '';
    }

    try {
      const asset = `${openLibraryId}-${size}.jpg`;
      const apiUrl = `${this.baseUrl}/b/olid/${asset}`;
      return await fetch(apiUrl);
    } catch (err) {
      throw err;
    }
  }

  async getCovers(coversObjList) {
    let covers = [];
    for (const cover of coversObjList) {
      covers.push(await this.getCover(cover.id, cover.size));
    }
    return covers;
  }
}
