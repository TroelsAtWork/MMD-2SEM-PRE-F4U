const categoryList = document.querySelector("#categoryList");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="?category=${category.category}"=>${category.category}</a></li>`;
    });
  });

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate").content;
const params = new URLSearchParams(document.location.search);
let url = undefined;

if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${params.get("category")}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}

function duplicateTemplate(template, container) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const templateClone = template.cloneNode(true);

        templateClone.querySelector(".category").textContent = product.category;
        templateClone.querySelector(".price").textContent = product.price;
        templateClone.querySelector(".brand").textContent = product.brandname;
        templateClone.querySelector("#seemore").setAttribute("href", `details.html?productid=${product.id}`);
        if (product.soldout) {
          templateClone.querySelector("#soldoutLabel").classList.add("soldout");
        }

        container.appendChild(templateClone);
      });
    })
    .catch((error) => console.log(error));
}

duplicateTemplate(productTemplate, productContainer);
