// product category Btn
const loadCetegoryBtn = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategroyBtn(data));
};
const displayCategroyBtn = (btns) => {
  const categoryBtn = document.getElementById("category-btn");
  console.log(categoryBtn);
  for (btn of btns) {
    categoryBtn.innerHTML += `
          <button class="btn btn-outline rounded-full">${btn}</button>
        `;
  }
};
loadCetegoryBtn();
