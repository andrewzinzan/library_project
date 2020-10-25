let library = [];
let newBook;

// Add book to library
    document.querySelector("#addBookBtn").addEventListener('click', addBookToLibrary);
//

// Display form for new book entry
    let form = document.querySelector('#form')

    document.querySelector('#new-book-btn').addEventListener('click', () => {
        form.style.display = 'block'
    });

    document.querySelector('#close-btn').addEventListener('click', () => {
        closeForm()
    });
//

// Function to close form 

function closeForm() {
    form.style.display = 'none'
}

//

//Function to reset form

function resetForm() {
    form.reset();
}

//

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

// Function to add book to library

function addBookToLibrary() {
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    newBook = new Book(title, author, genre, pages, read)

    library.push(newBook);
    displayBook(newBook);
    closeForm();
    resetForm();
}

//

// Function to display book 
function displayBook(newBook) {

    let toReadColumn = document.getElementById("toread-col")
    let readingColumn = document.getElementById("reading-col")
    let readColumn = document.getElementById("read-col")

    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card');

        // New book card elements

        let cardDeleteBtn = document.createElement('i');
        cardDeleteBtn.classList.add('fa', 'fa-close')

        let cardTitle = document.createElement('h4');
        cardTitle.textContent = newBook.title;

        let cardAuthor = document.createElement('p');
        cardAuthor.textContent = newBook.author;

        let cardGenre = document.createElement('p');
        cardGenre.textContent = newBook.genre;

        let cardPages = document.createElement('p');
        cardPages.textContent = newBook.pages + " pages";

        let cardRead = document.createElement('p');
        cardRead.textContent = newBook.read;

        //

        //

    // Function to change card status

        // Function to change icon fill

        let changeStatus = document.createElement('span');
        changeStatus.classList.add('fas', 'fa-bookmark');

        changeStatus.addEventListener('mouseover', () => {
            changeStatus.classList.remove('fas');
            changeStatus.classList.add('far');

            changeStatus.addEventListener('mouseleave', () => {
                changeStatus.classList.remove('far');
                changeStatus.classList.add('fas');
            })
        })

        //

        // Function to change book status

        changeStatus.addEventListener('click', () => {
            if (cardRead.innerHTML === "To Read") {
                cardRead.innerHTML = "Reading"
                readingColumn.appendChild(newBookCard)
            } else if (cardRead.innerHTML === "Reading") {
                cardRead.innerHTML = "Read"
                readColumn.appendChild(newBookCard) 
            } else if (cardRead.innerHTML === "Read") {
                cardRead.innerHTML = "To Read"
                toReadColumn.appendChild(newBookCard)
            }
        })

        //

    //

    newBookCard.append(cardDeleteBtn, cardTitle, cardAuthor, cardGenre, cardPages, cardRead, changeStatus);

    // Function to determine column

    for (book in library) {
        if (newBook.read === "To Read") {
            toReadColumn.appendChild(newBookCard);
        } else if (newBook.read === "Reading") {
            readingColumn.appendChild(newBookCard);
        } else if (newBook.read === "Read") {
            readColumn.appendChild(newBookCard);
        }
    }

    cardDeleteBtn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.removeChild(newBookCard);
        library.splice(newBook, 1);
    })

    //

}
 
//





