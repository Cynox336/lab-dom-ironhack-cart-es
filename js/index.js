// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll(".product"); //
  let total = 0;
  products.forEach((prod) => {
    total += updateSubtotal(prod);
    console.log("total: ", total);
  });
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const abuelo = target.parentNode.parentNode;
  abuelo.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelectorAll(".btn-remove").forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
  //... your code goes here
});
