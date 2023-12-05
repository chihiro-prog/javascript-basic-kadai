const changeText = document.getElementById("btn");

// setTimeout(() => {
//     changeText.addEventListener("click", () => {
//         const text = document.getElementById("text");
//         text.textContent = "ボタンをクリックしました";
//     })
// }, 2000);



changeText.addEventListener("click", () => {
  const text = document.getElementById("text");
  setTimeout(() => {text.textContent = "ボタンをクリックしました";

  }, 2000);
});

// function sss()={
//   setTimeout(() => {
//     text.textContent = "ボタンをクリックしました";
//   }, 2000);

// }
// changeText.addEventListener("click", sss());


