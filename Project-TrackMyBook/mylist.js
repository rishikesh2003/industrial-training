const bookListDiv = document.querySelector(".book-list");
let bookList = JSON.parse(localStorage.getItem("books"));
bookList.forEach((book) => {
  if (book.completedPages != book.pageCount) {
    const myListDiv = document.createElement("div");
    myListDiv.classList.add("list-card");

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = book.name;
    bookTitle.classList.add("book-title");

    const pages = document.createElement("p");
    pages.innerText = book.completedPages + "/" + book.pageCount;

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    const bookThumbNail = document.createElement("img");
    bookThumbNail.src = book.src;

    const progress = document.createElement("div");
    progress.style.width =
      String(
        parseInt((Number(book.completedPages) / Number(book.pageCount)) * 100)
      ) + "%";
    progress.classList.add("progress");
    const progressContainer = document.createElement("div");

    progressContainer.classList.add("progress-container");
    progressContainer.appendChild(progress);

    const pagesInput = document.createElement("input");
    pagesInput.placeholder = "Enter the pages";
    pagesInput.classList.add("pages");

    const add = document.createElement("button");
    add.innerText = "+";

    add.onclick = function () {
      let bookList = JSON.parse(localStorage.getItem("books"));
      bookList.forEach((b) => {
        if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
          if (
            Number(document.querySelector(".pages").value) + b.completedPages >
            b.pageCount
          ) {
            alert("Page count is greater than the total pages!");
          } else {
            b.completedPages =
              b.completedPages + Number(document.querySelector(".pages").value);
          }
        }
      });
      localStorage.setItem("books", JSON.stringify(bookList));
      bookList = JSON.parse(localStorage.getItem("books"));
      bookList.forEach((b) => {
        if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
          progress.style.width =
            String(
              parseInt((Number(b.completedPages) / Number(b.pageCount)) * 100)
            ) + "%";
          pages.innerText = b.completedPages + "/" + b.pageCount;
        }
      });
    };

    const remove = document.createElement("button");
    remove.innerText = "-";
    remove.classList.add("red");
    remove.onclick = function () {
      let bookList = JSON.parse(localStorage.getItem("books"));
      bookList.forEach((b) => {
        if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
          if (
            b.completedPages < Number(document.querySelector(".pages").value)
          ) {
            alert("Page count is greater than the completed pages");
          } else {
            b.completedPages =
              b.completedPages - Number(document.querySelector(".pages").value);
          }
        }
      });
      localStorage.setItem("books", JSON.stringify(bookList));
      bookList = JSON.parse(localStorage.getItem("books"));
      bookList.forEach((b) => {
        if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
          progress.style.width =
            String(
              parseInt((Number(b.completedPages) / Number(b.pageCount)) * 100)
            ) + "%";
          pages.innerText = b.completedPages + "/" + b.pageCount;
        }
      });
    };

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("list-btns");
    buttonContainer.appendChild(add);
    buttonContainer.appendChild(remove);

    myListDiv.appendChild(bookThumbNail);
    textDiv.appendChild(bookTitle);
    textDiv.appendChild(pages);
    textDiv.appendChild(progressContainer);
    textDiv.appendChild(pagesInput);
    textDiv.appendChild(buttonContainer);
    myListDiv.appendChild(textDiv);
    bookListDiv.appendChild(myListDiv);
  }
});

document.querySelector("select").onchange = function (e) {
  if (e.target.value == "Completed") {
    bookList = JSON.parse(localStorage.getItem("books"));
    bookListDiv.innerHTML = "";
    bookList.forEach((book) => {
      if (book.completedPages == book.pageCount) {
        const myListDiv = document.createElement("div");
        myListDiv.classList.add("list-card");

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.innerText = book.name;
        bookTitle.classList.add("book-title");

        const pages = document.createElement("p");
        pages.innerText = book.completedPages + "/" + book.pageCount;

        const textDiv = document.createElement("div");
        textDiv.classList.add("text-div");

        const bookThumbNail = document.createElement("img");
        bookThumbNail.src = book.src;

        const progress = document.createElement("div");
        progress.style.width =
          String(
            parseInt(
              (Number(book.completedPages) / Number(book.pageCount)) * 100
            )
          ) + "%";
        progress.classList.add("progress");
        const progressContainer = document.createElement("div");

        progressContainer.classList.add("progress-container");
        progressContainer.appendChild(progress);
        myListDiv.appendChild(bookThumbNail);
        textDiv.appendChild(bookTitle);
        textDiv.appendChild(pages);
        textDiv.appendChild(progressContainer);
        myListDiv.appendChild(textDiv);
        bookListDiv.appendChild(myListDiv);
      }
    });
  } else {
    bookList = JSON.parse(localStorage.getItem("books"));
    bookListDiv.innerHTML = "";
    bookList.forEach((book) => {
      if (book.completedPages != book.pageCount) {
        const myListDiv = document.createElement("div");
        myListDiv.classList.add("list-card");

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.innerText = book.name;
        bookTitle.classList.add("book-title");

        const pages = document.createElement("p");
        pages.innerText = book.completedPages + "/" + book.pageCount;

        const textDiv = document.createElement("div");
        textDiv.classList.add("text-div");

        const bookThumbNail = document.createElement("img");
        bookThumbNail.src = book.src;

        const progress = document.createElement("div");
        progress.style.width =
          String(
            parseInt(
              (Number(book.completedPages) / Number(book.pageCount)) * 100
            )
          ) + "%";
        progress.classList.add("progress");
        const progressContainer = document.createElement("div");

        progressContainer.classList.add("progress-container");
        progressContainer.appendChild(progress);

        const pagesInput = document.createElement("input");
        pagesInput.placeholder = "Enter the pages";
        pagesInput.classList.add("pages");

        const add = document.createElement("button");
        add.innerText = "+";

        add.onclick = function () {
          let bookList = JSON.parse(localStorage.getItem("books"));
          bookList.forEach((b) => {
            if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
              if (
                Number(document.querySelector(".pages").value) +
                  b.completedPages >
                b.pageCount
              ) {
                alert("Page count is greater than the total pages!");
              } else {
                b.completedPages =
                  b.completedPages +
                  Number(document.querySelector(".pages").value);
              }
            }
          });
          localStorage.setItem("books", JSON.stringify(bookList));
          bookList = JSON.parse(localStorage.getItem("books"));
          bookList.forEach((b) => {
            if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
              progress.style.width =
                String(
                  parseInt(
                    (Number(b.completedPages) / Number(b.pageCount)) * 100
                  )
                ) + "%";
              pages.innerText = b.completedPages + "/" + b.pageCount;
            }
          });
        };

        const remove = document.createElement("button");
        remove.innerText = "-";
        remove.classList.add("red");
        remove.onclick = function () {
          let bookList = JSON.parse(localStorage.getItem("books"));
          bookList.forEach((b) => {
            if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
              if (
                b.completedPages <
                Number(document.querySelector(".pages").value)
              ) {
                alert("Page count is greater than the completed pages");
              } else {
                b.completedPages =
                  b.completedPages -
                  Number(document.querySelector(".pages").value);
              }
            }
          });
          localStorage.setItem("books", JSON.stringify(bookList));
          bookList = JSON.parse(localStorage.getItem("books"));
          bookList.forEach((b) => {
            if (b.name.toLowerCase() == bookTitle.innerText.toLowerCase()) {
              progress.style.width =
                String(
                  parseInt(
                    (Number(b.completedPages) / Number(b.pageCount)) * 100
                  )
                ) + "%";
              pages.innerText = b.completedPages + "/" + b.pageCount;
            }
          });
        };

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("list-btns");
        buttonContainer.appendChild(add);
        buttonContainer.appendChild(remove);

        myListDiv.appendChild(bookThumbNail);
        textDiv.appendChild(bookTitle);
        textDiv.appendChild(pages);
        textDiv.appendChild(progressContainer);
        textDiv.appendChild(pagesInput);
        textDiv.appendChild(buttonContainer);
        myListDiv.appendChild(textDiv);
        bookListDiv.appendChild(myListDiv);
      }
    });
  }
};
