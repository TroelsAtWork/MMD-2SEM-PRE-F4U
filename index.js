const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate").content;

function duplicateTemplate(template, container) {
  fetch("https://kea-alt-del.dk/t7/api/products")
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
