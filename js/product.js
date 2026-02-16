// product category Btn

function getSafeId(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "-");
}

const loadCetegoryBtn = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategroyBtn(data));
};
const displayCategroyBtn = (btns) => {
  const categoryBtn = document.getElementById("category-btn");
  for (btn of btns) {
    const safeId = getSafeId(btn);
    categoryBtn.innerHTML += `
           <button id="category-btn-${btn}" onclick="productShowCategory(\`${btn}\`)" class="btn btn-outline rounded-full cetegroy-btn">${btn}</button>
        `;
  }
};

// product category Btn end
// product card display
const productCard = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductCard(data));
};

const displayProductCard = (products) => {
  const productCarDiv = document.getElementById("product-container");
  productCarDiv.innerHTML = "";
  products.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "border",
      "border-gray-200",
      "rounded-lg",
      "overflow-hidden",
      "flex",
      "flex-col",
    );
    cardDiv.innerHTML = `
        <div class="bg-gray-100 py-5 px-10">
              <img
                class="mx-auto h-64 object-contain"
                src="${product.image}"
              />
            </div>

            <div class="space-y-5 p-5">
              <div class="flex justify-between">
                <p
                  class="bg-[#EDF0FE] px-3 rounded-full text-sm text-[#4f39f6]"
                >
                  ${product.category}
                </p>
                <span>
                  <i class="fa-solid fa-star text-[#FFD43B]"></i>
                  ${product.rating.rate} (${product.rating.count})
                </span>
              </div>

              <div>
                <p class="truncate text-lg font-medium">${product.title}</p>
                <h3 class="text-lg font-bold">$${product.price}</h3>
              </div>

              <div class="flex justify-between gap-5 mt-3">
                <button onclick='productDetail(${product.id})' class="bg-[#EDF0FE] btn rounded-xl flex-1 py-2">
                  <i class="fa-regular fa-eye"></i> Details
                </button>
                <button
                  class="bg-blue-600 btn text-white rounded-xl flex-1 py-2"
                >
                  <i class="fa-solid fa-cart-shopping"></i> Add
                </button>
              </div>
            </div>

    `;
    productCarDiv.appendChild(cardDiv);
  });
};
// product card display end

// product modal js
const productDetail = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetailProduct(data));
};

const displayDetailProduct = (detail) => {
  const modalConatiler = document.getElementById("product_dtail_modal");
  modalConatiler.innerHTML = `
    <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <img class='h-64 mx-auto mb-5' src="${detail.image}" />
         <div class="space-y-5 p-5">
          <div class="flex justify-between">
            <p class="bg-[#EDF0FE] px-3 rounded-full text-sm text-[#4f39f6]">
              ${detail.category}
            </p>
           
            <span>
              <i class="fa-solid fa-star text-[#FFD43B]"></i> ${detail.rating.rate} (${detail.rating.count})
            </span>
          </div>

          <h3 class="text-lg font-bold">Price: $${detail.price}</h3>

          <div class"space-y-3">
            <p class=" text-lg font-bold mb-5">
              ${detail.title}
            </p>
             <p>${detail.description}</p>
            
          </div>
          <button class="bg-blue-600 btn text-white rounded-xl w-full py-2">
           <i class="fa-solid fa-cart-shopping"></i> Add to cart
          </button>
        </div>
      </div>
  `;
  document.getElementById("product_dtail_modal").showModal();
};
// product modal js end

// product category filter
const productShowCategory = (category) => {
  console.log(category);
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickCategoryBtn = document.getElementById(
        `category-btn-${category}`,
      );

      clickCategoryBtn.classList.add("active-btn");
      console.log(clickCategoryBtn);
      filterCategroy(data);
    });
};

const filterCategroy = (products) => {
  const productCarDiv = document.getElementById("product-container");
  productCarDiv.innerHTML = "";
  products.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "border",
      "border-gray-200",
      "rounded-lg",
      "overflow-hidden",
      "flex",
      "flex-col",
    );
    cardDiv.innerHTML = `
        <div class="bg-gray-100 py-5 px-10">
              <img
                class="mx-auto h-64 object-contain"
                src="${product.image}"
              />
            </div>

            <div class="space-y-5 p-5">
              <div class="flex justify-between">
                <p
                  class="bg-[#EDF0FE] px-3 rounded-full text-sm text-[#4f39f6]"
                >
                  ${product.category}
                </p>
                <span>
                  <i class="fa-solid fa-star text-[#FFD43B]"></i>
                  ${product.rating.rate} (${product.rating.count})
                </span>
              </div>

              <div>
                <p class="truncate text-lg font-medium">${product.title}</p>
                <h3 class="text-lg font-bold">$${product.price}</h3>
              </div>

              <div class="flex justify-between gap-5 mt-3">
                <button onclick='productDetail(${product.id})' class="bg-[#EDF0FE] btn rounded-xl flex-1 py-2">
                  <i class="fa-regular fa-eye"></i> Details
                </button>
                <button
                  class="bg-blue-600 btn text-white rounded-xl flex-1 py-2"
                >
                  <i class="fa-solid fa-cart-shopping"></i> Add
                </button>
              </div>
            </div>

    `;
    productCarDiv.appendChild(cardDiv);
  });
};
// product category filter end

// remove active btn
const removeActive = () => {
  const categoryBtn = document.querySelectorAll(".cetegroy-btn");
  console.log(categoryBtn);
  categoryBtn.forEach((btn) => btn.classList.remove("active-btn"));
};

// all btn er active class add
// by Defaul All btn active
window.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.getElementById("category-btn-all");
  allBtn.classList.add("active-btn");
  productCard();
});
const toggleAllButton = () => {
  const allBtn = document.getElementById("category-btn-all");
  const isActive = allBtn.classList.contains("active-btn");

  if (!isActive) {
    // remove active from other buttons
    removeActive();
    // add active to All button
    allBtn.classList.add("active-btn");
  }

  // always show all products
  productCard();
};

loadCetegoryBtn();
