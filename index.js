const realEstateContainer = document.querySelector("#realEstateContainer");

const realEstateTemplate = document.querySelector(
  "#realEstateTemplate"
).content;

function duplicateTemplate(template, container) {
  fetch("./data/houses.json")
    .then((response) => response.json())
    .then((data) => {
      data.houses.forEach((house) => {
        const realEstateItem = template.cloneNode(true);

        realEstateItem.querySelector(".realEstatePrice").textContent =
          house.size_sqft;
        realEstateItem.querySelector(".realEstateDescription").textContent =
          house.price;
        realEstateItem.querySelector(".realEstateSize").textContent =
          house.description;

        container.appendChild(realEstateItem);
      });
    });
}

duplicateTemplate(realEstateTemplate, realEstateContainer);
