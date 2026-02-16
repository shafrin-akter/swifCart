// Select all nav links
const links = document.querySelectorAll(".nav-link");

// Get full current path, e.g. "/product.html" or "/contact/index.html"
const currentPath = window.location.pathname;

// Loop through each nav link
links.forEach((link) => {
  // Create absolute URL object from href
  const linkUrl = new URL(link.href, window.location.origin);

  // If pathname matches current page, add active classes
  if (linkUrl.pathname === currentPath) {
    link.classList.add("text-[#4F39F6]", "font-semibold");
  }
});

// menu active end

// tranding product
const tradingProduct = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTrandingProduct(data));
};

// {
//     "id": 17,
//     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     "price": 39.99,
//     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
//     "rating": {
//         "rate": 3.8,
//         "count": 679
//     }
// }

const displayTrandingProduct = (products) => {
  const trandingContainer = document.getElementById("tranding-container");
  trandingContainer.innerHTML = "";

  const topRated = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  topRated.forEach((product) => {
    const trandingDiv = document.createElement("div");
    trandingDiv.classList.add(
      "border",
      "border-gray-200",
      "rounded-lg",
      "overflow-hidden",
      "flex",
      "flex-col",
    );

    trandingDiv.innerHTML = `
      <div class="bg-gray-100 py-5 px-10">
        <img class="mx-auto  h-64 object-contain" src="${product.image}" />
      </div>

      <div class="space-y-5 p-5">
        <div class="flex justify-between">
          <p class="bg-[#EDF0FE] px-3 rounded-full text-sm text-[#4f39f6]">
            ${product.category}
          </p>
          <span>
            <i class="fa-solid fa-star text-[#FFD43B]"></i> ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <div>
          <p class="truncate text-lg font-medium">
            ${product.title}
          </p>
          <h3 class="text-lg font-bold">$${product.price}</h3>
        </div>

        <div class="flex justify-between gap-5 mt-3">
          <button onclick='productDetail(${product.id})'
             class="bg-[#EDF0FE] btn rounded-xl flex-1 py-2">
            <i class="fa-regular fa-eye"></i> Details
          </button>
          <button class="bg-blue-600 btn text-white rounded-xl flex-1 py-2">
           <i class="fa-solid fa-cart-shopping"></i> Add
          </button>
        </div>
      </div>
    `;

    trandingContainer.appendChild(trandingDiv);
  });
};

// product modal js
const productDetail = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetailProduc(data));
};

// {
//     "id": 3,
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
//     "rating": {
//         "rate": 4.7,
//         "count": 500
//     }
// }

const displayDetailProduc = (detail) => {
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

tradingProduct();
// tanding product end
