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
  console.log(formValues)
  let book = new Book(...formValues)
  console.log(book)
  console.log(book.info())
  form.reset();
  toggleForm()
}
