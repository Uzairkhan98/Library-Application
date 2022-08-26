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
  console.log(myLibrary)
  const container = document.querySelector('.book-container')
  let elements = myLibrary.map( (book,i) => {

    const article = document.createElement('article')
    article.classList.add('book-details')
    article.setAttribute('data-index', i)

    const title = document.createElement('h4')
    title.textContent = book.title

    const author = document.createElement('h4')
    author.textContent = `By ${book.author}`
    
    const pages = document.createElement('h4')
    pages.textContent = `${book.pages} pages`

    const readButton = document.createElement('button')
    readButton.setAttribute("id" , 'read-button')
    readButton.textContent = "Mark as Read"

    if(book.read){
      readButton.setAttribute('style', 'background-color: gray') ;
      readButton.disabled
    }
    else{
      readButton.setAttribute('style', 'background-color: rgba(0, 128, 0, 0.47)') ;
      readButton.setAttribute('onClick', 'readBook(event)')
      readButton.setAttribute('data-index',i) ;
    }


    const removeButton = document.createElement('button')
    removeButton.setAttribute("id" , 'remove-button')
    removeButton.textContent = "Remove Book"
    removeButton.setAttribute('data-index',i) ;
    removeButton.setAttribute('onClick', 'removeBook(event)')
    

    article.appendChild(title)
    article.appendChild(author)
    article.appendChild(pages)
    article.appendChild(readButton)
    article.appendChild(removeButton)

    article.setAttribute('style', `border:  solid 2px ${book.read ? 'green' : 'red'}`);    

    return article

  })
  container.replaceChildren(...elements);
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

function removeBook(event){
  bookIndex = event.target.getAttribute('data-index')
  myLibrary = myLibrary.filter((book,i) => i!=bookIndex)
  createLibrary()
}

function readBook(event){
  bookIndex = event.target.getAttribute('data-index')
  myLibrary = myLibrary.map((book,i) => {
    if(i==bookIndex) 
      book.read = true
    return book
  })
  createLibrary()
}