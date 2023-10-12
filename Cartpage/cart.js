let cart = [];
let total = 0;

function updateCartDisplay() {
    const cartContent = document.getElementById('cartContent');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const totalPrice = document.getElementById('totalPrice');
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');

    cartContent.innerHTML = ''; // Clear existing content

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        totalPrice.style.display = 'none';
        continueShoppingBtn.style.display = 'inline-block';
    } else {
        emptyCartMessage.style.display = 'none';
        totalPrice.style.display = 'block';
        continueShoppingBtn.style.display = 'none';

        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart_item');

            // Create HTML for item
            cartItemDiv.innerHTML = `
                <div class="img_box">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="detail">
                    <div class="info">
                        <h4>Product Info</h4>
                        <h3>${item.title}</h3>
                        <p>Product description goes here.</p>
                        <div class="qty">
                            <button class="incqty" onclick="increaseQuantity(${item.id})">+</button>
                            <input type="text" value="${item.quantity}" id="qty_${item.id}" readonly>
                            <button class="decqty" onclick="decreaseQuantity(${item.id})">-</button>
                        </div>
                        <div class="subtotal">
                            Subtotal: $${(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                    <div class="close">
                        <button onclick="removeItem(${item.id})">Remove</button>
                    </div>
                </div>
            `;

            cartContent.appendChild(cartItemDiv);
        });
    }

    // Update the total price
    totalPrice.textContent = `Total Price: $${total.toFixed(2)}`;
}

function addToCart(product) {
    // Check if item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }

    total += product.price;

    // Update the display
    updateCartDisplay();
}

function increaseQuantity(productId) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (item) {
        item.quantity++;
        total += item.price;
        document.getElementById(`qty_${productId}`).value = item.quantity;
        updateCartDisplay();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        total -= item.price;
        document.getElementById(`qty_${productId}`).value = item.quantity;
        updateCartDisplay();
    }
}

function removeItem(productId) {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === productId);
    if (itemIndex !== -1) {
        total -= cart[itemIndex].price * cart[itemIndex].quantity;
        cart.splice(itemIndex, 1);
        updateCartDisplay();
    }
}

// Function to simulate adding a product to the cart
function simulateAddToCart() {
    const product = {
        id: 1,
        title: 'Sample Product',
        price: 50.00,
        img: 'path_to_your_image'
    };

    addToCart(product);
}

// Simulate adding a product to the cart on page load
simulateAddToCart();