let cart = [];

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

function toggleCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
  renderCartItems();
}

function addToCart(productId, productName, productPrice) {
  const product = {
    id: productId,
    name: productName,
    price: productPrice
  };

  cart.push(product);
  updateCartCount();
  alert(`${productName} has been added to your cart!`);
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear existing items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  alert('Proceeding to checkout...');
  // Here you could implement a real checkout functionality, like payment gateway integration.
  cart = []; // Empty the cart after checkout
  updateCartCount();
  toggleCart();
}

// Attach event listeners to product buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productId = productCard.dataset.id;
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

    addToCart(productId, productName, productPrice);
  });
});
