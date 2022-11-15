function handleSubmit() {
  const num = Number(document.querySelector(".num").value);
  if (!num) {
    alert("Please enter the number");
  } else {
    let x = "";
    let img = "<img src='https://i.ibb.co/L55byXJ/gift.png' />";
    const gifts = document.querySelector(".gifts");
    gifts.innerHTML = "";
    for (let i = 0; i < num; i++) {
      x += img;
    }
    gifts.innerHTML = x;
  }
}
