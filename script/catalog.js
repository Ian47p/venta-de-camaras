function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
function goBack() {
    window.history.back();
}
let cartCount = 0;

function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cart.length;
    cartCounter.style.display = 'inline';
}

// Initialize cart counter on page load
document.addEventListener('DOMContentLoaded', updateCartCounter);

function redirectToCart() {
    window.location.href = "purchase.html"; // Redirect to purchase page
}