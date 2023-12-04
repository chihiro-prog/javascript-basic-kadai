const changeText = document.getElementById("btn");
// const parent = document.querySelector("body");

changeText.addEventListener("click", () => {
    // console.log("ボタンをクリックしました");
    //   text.style.display = "none";
    // const text2 = document.createElement("h2");
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました";
    // parent.appendChild(text2);
});