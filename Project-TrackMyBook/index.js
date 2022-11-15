async function search() {
  try {
    const bookName = document.querySelector(".book").value;
    if (!bookName) {
      return alert("Please enter a book name");
    }
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
    );
    const jRes = await res.json();
    document.querySelector(".books").style.display = "block";
    const container = document.querySelector(".book-container");
    container.innerHTML = "";
    document.querySelector("footer").classList.add("pos-footer");
    jRes.items.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const bookTitle = document.createElement("p");
      bookTitle.classList.add("book-title");
      bookTitle.innerText = book.volumeInfo.title;

      const pages = document.createElement("p");
      if (!book.volumeInfo.pageCount) {
        pages.innerText = "Pagecount not availabe";
      } else {
        pages.innerText = "Pagecount: " + book.volumeInfo.pageCount;
      }
      const bookThumbNail = document.createElement("img");
      if (!book.volumeInfo.imageLinks) {
        bookThumbNail.src = "";
      } else {
        bookThumbNail.src = book.volumeInfo.imageLinks.thumbnail;
      }
      const addToList = document.createElement("button");
      addToList.innerText = "Add to List";
      addToList.onclick = function () {
        const bookList = localStorage.getItem("books");
        const bobj = {
          name: bookTitle.innerText,
          pageCount: book.volumeInfo.pageCount,
          src: bookThumbNail.src,
          completedPages: 0,
        };
        if (!bookList) {
          const bL = [];
          bL.push(bobj);
          localStorage.setItem("books", JSON.stringify(bL));
          alert("Book successfully added to list");
        } else {
          const bookList = JSON.parse(localStorage.getItem("books"));
          let isExist = false;
          bookList.forEach((book) => {
            if (bobj.name.toLowerCase() == book.name.toLowerCase()) {
              isExist = true;
            }
          });
          if (isExist) {
            alert("You already have that book on your list!");
          } else {
            bookList.push(bobj);
            localStorage.setItem("books", JSON.stringify(bookList));
            alert("Book successfully added to list");
          }
        }
      };

      bookCard.appendChild(bookThumbNail);
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(pages);
      bookCard.appendChild(addToList);
      container.appendChild(bookCard);
    });
  } catch (err) {
    console.log(err.message);
  }
}
