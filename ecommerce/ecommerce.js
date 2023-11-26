const myForm = document.querySelector("#myform");
const myProduct = document.querySelector("#name");
const myPrice = document.querySelector("#price");
const productList = document.querySelector("#product-list");
const totalPriceDisplay = document.querySelector("#total-price");

const apiUrl =
  "https://crudcrud.com/api/92224fd071fb4473b2667ba79b57a66c/product";

let totalPrice = 0;

function createElement(product) {
  const li = document.createElement("li");
  li.innerHTML = `
                <span>${product.name}: $${product.price.toFixed(2)}</span>
                <button class="delete-btn">DELETE</button>
            `;
  productList.appendChild(li);

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    const productId = product._id;

    axios
      .delete(`${apiUrl}/${productId}`)
      .then((response) => {
        console.log(response);
        li.remove();
        totalPrice -= product.price;
        updateTotalPrice();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function updateTotalPrice() {
  totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = myProduct.value;
  const productPrice = parseFloat(myPrice.value);

  if (productName && !isNaN(productPrice)) {
    const productData = {
      name: productName,
      price: productPrice,
    };

    axios
      .post(apiUrl, productData)
      .then((response) => {
        console.log(response);
        createElement(response.data);
        totalPrice += productPrice;
        updateTotalPrice();
      })
      .catch((err) => {
        console.log(err);
      });

    myProduct.value = "";
    myPrice.value = "";
  } else {
    alert("Please enter valid product information.");
  }
});


axios.get(apiUrl).then((response) => {
  response.data.forEach((product) => {
    createElement(product);
    totalPrice += product.price;
  });
  updateTotalPrice();
});
