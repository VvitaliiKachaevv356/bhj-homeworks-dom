const cart = document.querySelector(".cart__products");
const valueButtons = document.querySelectorAll(".product__quantity-control");
const addButtons = document.querySelectorAll(".product__add");
valueButtons.forEach((button) => button.addEventListener("click", changeValue));
addButtons.forEach((button) => button.addEventListener("click", addToCart));
function changeValue(e) {
  let value = e.target.parentNode.querySelector(".product__quantity-value");
  let count = +value.innerText;
  value.innerText = +(value.innerText) + (e.target.classList.contains("product__quantity-control_inc") ? 1 : (count > 1 ? -1 : 0));
}
function addToCart(e) {
  const product = e.target.closest(".product");
  const id = product.dataset.id;
  const countFromProduct = +e.target.parentNode.querySelector(
    ".product__quantity-value"
  ).innerText;
  for (let item of cart.children) {
    if (item.dataset.id === id) {
      let productCount = item.querySelector(".cart__product-count");
      let total = +productCount.innerText;
      productCount.innerText = total + countFromProduct;
      return false;
    }
  }
  const productImg = product.querySelector(".product__image").src;
  const count = product.querySelector(".product__quantity-value").innerText;
  const productToCart = 
    `<div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${productImg}"/>
        <div class="cart__product-count">${count}</div>
    </div>`;
  cart.insertAdjacentHTML("beforeend", productToCart);
}