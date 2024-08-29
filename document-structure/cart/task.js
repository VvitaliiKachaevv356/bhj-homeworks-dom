const cart = document.querySelector(".cart__products");
const valueButtons = document.querySelectorAll(".product__quantity-control");
const addButtons = document.querySelectorAll(".product__add");
valueButtons.forEach((button) => button.addEventListener("click", changeValue));
addButtons.forEach((button) => button.addEventListener("click", addToCart));
function changeValue(e) {
  let value = e.target.parentNode.querySelector(".product__quantity-value");
  let count = +value.innerText;
  value.innerText = +value.innerText + (e.target.classList.contains("product__quantity-control_inc") ? 1 : count > 1 ? -1 : 0);
}
function addToCart(e) {
  const product = e.target.closest(".product");
  const id = product.dataset.id;
  const countFromProduct = +product.querySelector(".product__quantity-value").innerText;
  const productInCart = Array.from(cart.children).find((item) => item.dataset.id === id);
  const productImg = product.querySelector(".product__image").src;
  if (productInCart) {
    const productCount = productInCart.querySelector(".cart__product-count");
    productCount.innerText = +productCount.innerText + countFromProduct;
  } else {
    const productImg = product.querySelector(".product__image").src;
    const productToCart = `
  <div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${productImg}" />
    <div class="cart__product-count">${countFromProduct}</div>
  </div>
`;
    cart.insertAdjacentHTML("beforeend", productToCart);
  }
}