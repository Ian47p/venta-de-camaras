 // Slideshow functionality
 let slideIndex = 0;
        showSlides();

        function showSlides() {
            const slides = document.querySelectorAll(".slides");
            slides.forEach(slide => slide.style.display = "none");
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

        function redirectToCart() {
            window.location.href = "purchase.html"; // Redirect to purchase page
        }

        function redirectToCatalog(type) {
            window.location.href = `${type}-catalog.html`; // Redirect to the respective catalog page
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }

        function goBack() {
            window.history.back();
        }

        let cartCount = 0;

        function addToCart() {
            cartCount++;
            const cartCounter = document.getElementById('cart-counter');
            cartCounter.textContent = cartCount;
            cartCounter.style.display = 'inline';
        }
