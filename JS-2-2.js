function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`
    }
}

let HP = new Book('Harry Potter', 'J.K. Rowling', '300', 1)

console.log(HP.info())
