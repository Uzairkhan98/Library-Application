let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`
    }
}

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  let root = document.body;
  
  isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
  
  root.classList.toggle("lightMode");
}

function toggleForm() {
    let form = document.getElementById("form-container")
    if (form.style.display === "none" ) {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
}

function formSubmission() {
  let formValues = []
  let form = document.querySelector("form");
  Array.from(form.elements).forEach(
    element => element.className === "checkbox" ? 
      formValues.push(element.checked) : 
      formValues.push(element.value) 
  )
  formValues.pop()
  let book = new Book(...formValues)
  myLibrary.push(book)
  form.reset();
  toggleForm();
  createLibrary();
}

function createLibrary(){
  const container = document.querySelector('.book-container')
  let elements = myLibrary.map( book => {

    const article = document.createElement('article')
    article.classList.add('book-details')

    const title = document.createElement('h4')
    title.textContent = book.title

    const author = document.createElement('h4')
    author.textContent = `By ${book.author}`
    
    const pages = document.createElement('h4')
    pages.textContent = `${book.pages} pages`

    const readButton = document.createElement('button')
    readButton.setAttribute("id" , 'read-button')
    readButton.textContent = "Mark as Read"

    const removeButton = document.createElement('button')
    removeButton.setAttribute("id" , 'remove-button')
    removeButton.textContent = "Remove Book"

    article.appendChild(title)
    article.appendChild(author)
    article.appendChild(pages)
    article.appendChild(readButton)
    article.appendChild(removeButton)

    return article

  })

  container.replaceChildren(...elements);
3}
