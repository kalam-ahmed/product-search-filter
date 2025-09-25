const products = [
  {
    id: "001",
    productImage: "./images/cap (2).jpg",
    productName: "Fancy Cap",
    productPrice: 299,
  },
  {
    id: "002",
    productImage: "./images/cap.jpg",
    productName: "Fancy Cap",
    productPrice: 299,
  },
  {
    id: "003",
    productImage: "./images/fashion-shoes-sneakers.jpg",
    productName: "fashion-shoes-sneakers",
    productPrice: 499,
  },
  {
    id: "004",
    productImage: "./images/jacket (1).jpg",
    productName: "jacket",
    productPrice: 799,
  },
  {
    id: "005",
    productImage: "./images/jacket (2).jpg",
    productName: "jacket",
    productPrice: 999,
  },
  {
    id: "006",
    productImage: "./images/jacket (3).jpg",
    productName: "jacket",
    productPrice: 999,
  },
  {
    id: "007",
    productImage: "./images/jacket (4).jpg",
    productName: "jacket",
    productPrice: 999,
  },
  {
    id: "008",
    productImage: "./images/jacket (5).jpg",
    productName: "shirt",
    productPrice: 999,
  },
  {
    id: "009",
    productImage: "./images/jacket.jpg",
    productName: "jacket",
    productPrice: 999,
  },
  {
    id: "010",
    productImage: "./images/men-shoes.jpg",
    productName: "men-shoes",
    productPrice: 399,
  },
  {
    id: "011",
    productImage: "./images/pants (1).WEBP",
    productName: "pants",
    productPrice: 599,
  },
  {
    id: "012",
    productImage: "./images/pants (2).WEBP",
    productName: "pants",
    productPrice: 599,
  },
  {
    id: "013",
    productImage: "./images/pants (3).WEBP",
    productName: "pants",
    productPrice: 599,
  },
  {
    id: "014",
    productImage: "./images/pants (4).WEBP",
    productName: "pants",
    productPrice: 599,
  },
  {
    id: "015",
    productImage: "./images/pants (5).WEBP",
    productName: "pants",
    productPrice: 599,
  },
  {
    id: "016",
    productImage: "./images/shirt (2).jpg",
    productName: "shirt",
    productPrice: 499,
  },
  {
    id: "017",
    productImage: "./images/shirt.jpg",
    productName: "shirt",
    productPrice: 599,
  },
  {
    id: "018",
    productImage: "./images/shoes (1).jpg",
    productName: "shoes",
    productPrice: 599,
  },
  {
    id: "019",
    productImage: "./images/shoes (2).jpg",
    productName: "shoes",
    productPrice: 599,
  },
  {
    id: "020",
    productImage: "./images/shoes.jpg",
    productName: "shoes",
    productPrice: 599,
  },
];

for (let product of products) {
  // card div
  let card = document.createElement("div");
  card.classList.add("card", "hide");
  // image tag
  let image = document.createElement("img");
  image.setAttribute("src", product.productImage);
  // product name
  let itemsName = document.createElement("h4");
  itemsName.classList.add("item-name");
  itemsName.innerText = product.productName;
  // product price
  let itemPrice = document.createElement("h5");
  itemPrice.innerText = "Rs." + product.productPrice;
  card.appendChild(image);
  card.appendChild(itemsName);
  card.appendChild(itemPrice);
  document.querySelector(".products-container").appendChild(card);
}

document.querySelector("#search").addEventListener("click", () => {
  let inputElement = document.getElementById("search-input");
  let inputValue = inputElement.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  let itemsName = document.querySelectorAll(".item-name");
  itemsName.forEach((val, idx) => {
    if (val.innerText.toLowerCase().includes(inputValue)) {
      cards[idx].classList.remove("hide");
    } else {
      cards[idx].classList.add("hide");
    }
  });
  inputElement.value = "";
});

function filterItem(value) {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let itemsName = card.querySelector(".item-name").innerText.toLowerCase();
    if (
      itemsName.includes(value.toLowerCase()) ||
      value.toLowerCase() === "all"
    ) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

window.onload = () => {
  filterItem("all");
};
