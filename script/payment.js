function processPayment(event) {
    event.preventDefault();

    // Show loading state
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    // Simulate payment processing delay
    setTimeout(() => {
        loading.style.display = 'none';
        alert('Pago realizado con éxito. ¡Gracias por su compra!');
        localStorage.removeItem('cart'); // Clear the cart
        window.location.href = "index.html"; // Redirect to the homepage
    }, 3000); // Simulate a 3-second delay
}