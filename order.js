// Product data
const products = {
    processors: [
        { id: 'p1', name: 'AMD Ryzen 9 5950X', price: 799.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' },
        { id: 'p2', name: 'Intel Core i9-12900K', price: 589.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' },
        { id: 'p3', name: 'AMD Ryzen 7 5800X', price: 449.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' },
        { id: 'p4', name: 'Intel Core i7-12700K', price: 409.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' },
        { id: 'p5', name: 'AMD Ryzen 5 5600X', price: 299.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' },
        { id: 'p6', name: 'Intel Core i5-12600K', price: 279.99, image: 'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-12/newsroom-intel-13th-gen-hx-processors-1.jpg' }
    ],
    graphics: [
        { id: 'g1', name: 'NVIDIA RTX 4090', price: 1599.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'g2', name: 'AMD RX 7900 XTX', price: 999.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'g3', name: 'NVIDIA RTX 4080', price: 1199.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'g4', name: 'AMD RX 7800 XT', price: 649.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'g5', name: 'NVIDIA RTX 4070', price: 599.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'g6', name: 'AMD RX 6700 XT', price: 479.99, image: 'https://th.bing.com/th/id/OIP.3OdETEEtMvSPUrlAIrluEAHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
    ],
    motherboards: [
        { id: 'm1', name: 'ASUS ROG X570', price: 299.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'm2', name: 'MSI MPG B550', price: 179.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'm3', name: 'GIGABYTE Z690', price: 229.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'm4', name: 'ASRock B450M', price: 99.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'm5', name: 'ASUS PRIME H610', price: 109.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'm6', name: 'MSI PRO Z690', price: 249.99, image: 'https://th.bing.com/th/id/OIP.Cfym0Am_842N7CGtnzej4AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
    ],
    ram: [
        { id: 'r1', name: 'Corsair 32GB DDR4', price: 159.99, image: 'https://th.bing.com/th/id/OIP.CikHLUOiR6nw1z53BWbTkAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'r2', name: 'G.SKILL 16GB DDR4', price: 89.99, image: 'https://th.bing.com/th/id/OIP.CikHLUOiR6nw1z53BWbTkAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'r3', name: 'Crucial 64GB DDR4', price: 299.99, image: 'https://th.bing.com/th/id/OIP.CikHLUOiR6nw1z53BWbTkAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 'r4', name: 'Kingston 16GB DDR5', price: 149.99, image: 'https://th.bing.com/th/id/OIP.CikHLUOiR6nw1z53BWbTkAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
    ],
    storage: [
        { id: 's1', name: 'Samsung 970 EVO 1TB', price: 99.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 's2', name: 'WD Black 2TB', price: 229.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 's3', name: 'Crucial P5 500GB', price: 79.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 's4', name: 'Seagate 4TB HDD', price: 89.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 's5', name: 'Kingston 2TB SSD', price: 179.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
        { id: 's6', name: 'Samsung 980 PRO 2TB', price: 279.99, image: 'https://th.bing.com/th/id/OIP.cA0drTHMbaRcr0LnPqoTDgHaFE?w=247&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
    ]
};

let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render all product sections
    Object.keys(products).forEach(category => {
        renderProductSection(category);
    });

    // Add event listeners for favorite buttons
    document.getElementById('save-favorite').addEventListener('click', saveFavorite);
    document.getElementById('apply-favorite').addEventListener('click', applyFavorite);
    document.getElementById('buy-now').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
});

// Render product cards for a section
function renderProductSection(category) {
    const section = document.querySelector(`#${category} .cards-grid`);
    section.innerHTML = '';

    products[category].forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="quantity-control">
                <input type="number" min="0" value="0" id="qty-${product.id}">
                <button onclick="addToCart('${product.id}', '${category}')">Add to Cart</button>
            </div>
        `;
        section.appendChild(card);
    });
}

// Add item to cart
function addToCart(productId, category) {
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    if (quantity <= 0) return;

    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    updateCartTable();
    document.getElementById(`qty-${productId}`).value = 0;
}

// Update cart table
function updateCartTable() {
    const tbody = document.getElementById('cart-items');
    tbody.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td data-label="Item">${item.name}</td>
            <td data-label="Quantity">${item.quantity}</td>
            <td data-label="Price">$${item.price.toFixed(2)}</td>
            <td data-label="Total">$${itemTotal.toFixed(2)}</td>
            <td data-label="Action"><button onclick="removeFromCart('${item.id}')">Remove</button></td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartTable();
}

// Save cart as favorite
function saveFavorite() {
    localStorage.setItem('favoriteOrder', JSON.stringify(cart));
    alert('Order saved to favorites!');
}

// Apply favorite order
function applyFavorite() {
    const savedCart = localStorage.getItem('favoriteOrder');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartTable();
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}
