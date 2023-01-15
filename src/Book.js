class Book {
    // added __$ to end of each attribute in case a title or author contains the name of the attribute for string splitting
    constructor(title, author, pageCount, hasRead, key) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.hasRead = hasRead;
        this.key = key;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPageCount() {
        return this.pageCount;
    }

    getHasRead() {
        return this.hasRead;
    }

    getKey() {
        return this.key;
    }
}

export default Book;