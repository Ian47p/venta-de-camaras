function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function goBack() {
    window.history.back();
}

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear existing items

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="item-details">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            </div>
            <p>$${item.price}</p>
            <button class="delete-button" onclick="removeFromCart(${index})">x</button>
        `;
        cartContainer.appendChild(itemElement);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from array
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
    renderCart(); // Re-render cart
    updateCartCounter(); // Update cart counter
}

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = cartItems.length;
    cartCounter.style.display = cartItems.length > 0 ? 'inline' : 'none';
}

function completePurchase() {
    // Redirect to the payment page
    window.location.href = "payment.html";
}

renderCart();
updateCartCounter();
