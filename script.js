/* =====================================================
   TechZone – Main JavaScript File
   Handles: Products, Cart, Auth, Search, Filters,
            Toast, Ratings, Product Detail
   ===================================================== */


/* ══════════════════════════════════════════════════════
   1. PRODUCT DATA
   25 products across 5 categories, each with:
   id, name, category, price, oldPrice, rating,
   reviews, discount, image, images (gallery), features
   ══════════════════════════════════════════════════════ */

const products = [

  /* ─── MOBILES ─── */
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    category: "Mobiles",
    price: 134999,
    oldPrice: 159999,
    rating: 4.8,
    reviews: 3421,
    discount: 16,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
    ],
    features: ["6.8\" Dynamic AMOLED 2X display", "200MP main camera", "5000mAh battery", "Snapdragon 8 Gen 3 processor", "12GB RAM / 256GB Storage"]
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max",
    category: "Mobiles",
    price: 159900,
    oldPrice: 179900,
    rating: 4.9,
    reviews: 5120,
    discount: 11,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
    ],
    features: ["6.7\" Super Retina XDR ProMotion", "48MP main + 3x telephoto camera", "A17 Pro chip", "Titanium design", "USB-C with USB 3 speed"]
  },
  {
    id: 3,
    name: "OnePlus 12R 5G",
    category: "Mobiles",
    price: 39999,
    oldPrice: 49999,
    rating: 4.5,
    reviews: 1802,
    discount: 20,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80"
    ],
    features: ["6.78\" Fluid AMOLED 120Hz", "50MP Sony IMX890 camera", "Snapdragon 8 Gen 2", "5500mAh battery", "100W SUPERVOOC charging"]
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    category: "Mobiles",
    price: 89999,
    oldPrice: 106000,
    rating: 4.6,
    reviews: 2134,
    discount: 15,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"
    ],
    features: ["6.7\" LTPO OLED 120Hz", "50MP main + 48MP ultrawide", "Google Tensor G3 chip", "AI-powered features", "7 years of OS updates"]
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    category: "Mobiles",
    price: 99999,
    oldPrice: 114999,
    rating: 4.7,
    reviews: 987,
    discount: 13,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80"
    ],
    features: ["6.73\" WQHD+ AMOLED 120Hz", "Leica quad-camera system", "Snapdragon 8 Gen 3", "5000mAh + 90W wired", "IP68 water resistance"]
  },

  /* ─── LAPTOPS ─── */
  {
    id: 6,
    name: "Apple MacBook Pro 14\" M3 Pro",
    category: "Laptops",
    price: 214900,
    oldPrice: 239900,
    rating: 4.9,
    reviews: 4210,
    discount: 10,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80"
    ],
    features: ["14.2\" Liquid Retina XDR display", "Apple M3 Pro chip (11-core CPU)", "18GB unified memory", "512GB SSD storage", "Up to 18 hours battery life"]
  },
  {
    id: 7,
    name: "Dell XPS 15 OLED",
    category: "Laptops",
    price: 189990,
    oldPrice: 219990,
    rating: 4.7,
    reviews: 1876,
    discount: 14,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
    ],
    features: ["15.6\" 3.5K OLED 120Hz display", "Intel Core i9-14900H", "32GB DDR5 RAM", "1TB NVMe SSD", "NVIDIA RTX 4070 8GB"]
  },
  {
    id: 8,
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 129990,
    oldPrice: 149990,
    rating: 4.6,
    reviews: 2340,
    discount: 13,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"
    ],
    features: ["14\" QHD+ 165Hz ROG Nebula Display", "AMD Ryzen 9 8945HS", "16GB DDR5 RAM", "1TB SSD", "NVIDIA RTX 4060 8GB"]
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptops",
    price: 169990,
    oldPrice: 199990,
    rating: 4.8,
    reviews: 3102,
    discount: 15,
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"
    ],
    features: ["14\" IPS 2.8K OLED display", "Intel Core Ultra 7 165U", "32GB LPDDR5 RAM", "1TB NVMe SSD", "Military-grade durability (MIL-SPEC)"]
  },
  {
    id: 10,
    name: "HP Spectre x360 14",
    category: "Laptops",
    price: 149990,
    oldPrice: 174990,
    rating: 4.5,
    reviews: 1567,
    discount: 14,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
    ],
    features: ["13.5\" OLED 2.8K 120Hz touchscreen", "Intel Core Ultra 7", "32GB RAM", "2-in-1 convertible design", "Intel Arc GPU"]
  },

  /* ─── GAMING ─── */
  {
    id: 11,
    name: "Razer BlackWidow V4 Pro",
    category: "Gaming",
    price: 16999,
    oldPrice: 21999,
    rating: 4.7,
    reviews: 2890,
    discount: 23,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80",
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80"
    ],
    features: ["Razer Yellow Optical switches", "Per-key RGB Chroma lighting", "8000Hz HyperPolling wireless", "Magnetic wrist rest included", "Dedicated media keys"]
  },
  {
    id: 12,
    name: "Logitech G Pro X Superlight 2",
    category: "Gaming",
    price: 12999,
    oldPrice: 15999,
    rating: 4.9,
    reviews: 4521,
    discount: 19,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80"
    ],
    features: ["HERO 2 25K sensor", "Ultralight 60g design", "95-hour battery life", "LIGHTSPEED wireless", "5 programmable buttons"]
  },
  {
    id: 13,
    name: "ASUS ROG Swift 27\" 360Hz Monitor",
    category: "Gaming",
    price: 54999,
    oldPrice: 69999,
    rating: 4.8,
    reviews: 1230,
    discount: 21,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80"
    ],
    features: ["27\" IPS 360Hz 1ms response", "1080p Full HD resolution", "NVIDIA G-SYNC Compatible", "ASUS ROG Aura Sync RGB", "DisplayHDR 400 support"]
  },
  {
    id: 14,
    name: "SteelSeries Arctis Nova Pro",
    category: "Gaming",
    price: 27999,
    oldPrice: 34999,
    rating: 4.6,
    reviews: 987,
    discount: 20,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80"
    ],
    features: ["Hi-Res audio certified", "Active Noise Cancellation", "Dual wireless system", "Hot-swap battery system", "ClearCast Gen 2 microphone"]
  },
  {
    id: 15,
    name: "Xbox Elite Wireless Controller Series 2",
    category: "Gaming",
    price: 18999,
    oldPrice: 22999,
    rating: 4.7,
    reviews: 3456,
    discount: 17,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&q=80"
    ],
    features: ["40 hours rechargeable battery", "Adjustable-tension thumbsticks", "Interchangeable paddles", "Wrap-around rubberized grip", "USB-C charging"]
  },

  /* ─── HEADPHONES ─── */
  {
    id: 16,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29990,
    oldPrice: 34990,
    rating: 4.9,
    reviews: 8721,
    discount: 14,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
    ],
    features: ["Industry-leading ANC", "30-hour battery life", "Multipoint connection (2 devices)", "Speak-to-chat feature", "30mm driver units"]
  },
  {
    id: 17,
    name: "Apple AirPods Pro 2nd Gen",
    category: "Headphones",
    price: 24900,
    oldPrice: 29900,
    rating: 4.8,
    reviews: 12340,
    discount: 17,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
    ],
    features: ["H2 chip with advanced ANC", "Adaptive Transparency mode", "Personalized Spatial Audio", "Up to 30 hrs with charging case", "MagSafe + USB-C charging"]
  },
  {
    id: 18,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: 26990,
    oldPrice: 32990,
    rating: 4.7,
    reviews: 5234,
    discount: 18,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80"
    ],
    features: ["World-class ANC technology", "24-hour battery life", "Aware Mode transparency", "Lightweight folding design", "USB-C and 3.5mm"]
  },
  {
    id: 19,
    name: "Sennheiser Momentum 4 Wireless",
    category: "Headphones",
    price: 22990,
    oldPrice: 29990,
    rating: 4.6,
    reviews: 1890,
    discount: 23,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80"
    ],
    features: ["60-hour battery — best in class", "Adaptive ANC with 3 modes", "Sound Personalization EQ", "Wireless multipoint (2 devices)", "Touch control panel"]
  },
  {
    id: 20,
    name: "Nothing Ear (2)",
    category: "Headphones",
    price: 8999,
    oldPrice: 10999,
    rating: 4.4,
    reviews: 3210,
    discount: 18,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80"
    ],
    features: ["High-Res Audio certified", "Personalized ANC with pressure relief", "11.6mm dual-chamber driver", "36-hour total battery", "Transparent design"]
  },

  /* ─── SMARTWATCHES ─── */
  {
    id: 21,
    name: "Apple Watch Ultra 2",
    category: "Smartwatches",
    price: 89900,
    oldPrice: 99900,
    rating: 4.9,
    reviews: 6780,
    discount: 10,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"
    ],
    features: ["49mm titanium case", "Brightest Apple Watch display (3000 nits)", "60-hour battery in Low Power Mode", "Dual-frequency GPS", "100m water resistance (EN 13319)"]
  },
  {
    id: 22,
    name: "Samsung Galaxy Watch 6 Classic",
    category: "Smartwatches",
    price: 34999,
    oldPrice: 42999,
    rating: 4.7,
    reviews: 3421,
    discount: 19,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80"
    ],
    features: ["47mm Super AMOLED display", "Rotating Bezel for navigation", "BioActive Sensor (ECG, BIA)", "Samsung BioActive health suite", "IP68 + 5ATM water resistance"]
  },
  {
    id: 23,
    name: "Garmin Fenix 7X Solar",
    category: "Smartwatches",
    price: 79990,
    oldPrice: 94990,
    rating: 4.8,
    reviews: 1987,
    discount: 16,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80"
    ],
    features: ["Solar charging + 28-day battery", "Multi-band GPS with all systems", "Advanced health & training metrics", "Military-grade (MIL-STD-810) durability", "Topographic maps built-in"]
  },
  {
    id: 24,
    name: "Fitbit Sense 2",
    category: "Smartwatches",
    price: 19999,
    oldPrice: 25999,
    rating: 4.4,
    reviews: 2345,
    discount: 23,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
    ],
    features: ["Continuous EDA sensor (stress)", "Heart rate + SpO2 24/7", "ECG app on wrist", "6+ day battery", "Built-in GPS + Alexa"]
  },
  {
    id: 25,
    name: "OnePlus Watch 2",
    category: "Smartwatches",
    price: 24999,
    oldPrice: 29999,
    rating: 4.5,
    reviews: 1654,
    discount: 17,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&q=80",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80"
    ],
    features: ["1.43\" AMOLED 60Hz display", "100-hour smart mode battery", "Dual-chip Wear OS 4", "100+ workout modes", "5ATM water resistance"]
  }

];  // end of products array


/* ══════════════════════════════════════════════════════
   2. CART — using localStorage for persistence
   ══════════════════════════════════════════════════════ */

// Load cart from localStorage, or start with empty array
function getCart() {
  return JSON.parse(localStorage.getItem('tz_cart')) || [];
}

// Save cart back to localStorage
function saveCart(cart) {
  localStorage.setItem('tz_cart', JSON.stringify(cart));
  updateCartCount();
}

// Get total number of items in cart
function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.qty, 0);
}

// Update the cart badge number in the navbar
function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = getCartCount();
}

// Add a product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    // Product already in cart — increase quantity
    existingItem.qty += 1;
    showToast(`${product.name} quantity updated!`, 'info');
  } else {
    // New product — add to cart
    cart.push({ id: product.id, qty: 1 });
    showToast(`✓ Added to cart: ${product.name}`, 'success');
  }

  saveCart(cart);
  refreshCartButtons(); // update all "Add to Cart" buttons on current page
}

// Remove a product from cart completely
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart(); // re-render cart page
}

// Increase quantity of a cart item
function increaseQty(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += 1;
    saveCart(cart);
    renderCart();
  }
}

// Decrease quantity; remove if qty reaches 0
function decreaseQty(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty -= 1;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart(cart);
    renderCart();
  }
}

// Calculate total price of all items in cart
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

// Check if a product is already in cart
function isInCart(productId) {
  return getCart().some(item => item.id === productId);
}


/* ══════════════════════════════════════════════════════
   3. RENDER PRODUCT CARD (used across all pages)
   ══════════════════════════════════════════════════════ */

// Build star HTML string from a rating number (0–5)
function buildStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i - rating < 1) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// Format a number as Indian Rupees: ₹1,29,999
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

// Render a product card HTML string
function createProductCard(product) {
  const inCart = isInCart(product.id);
  return `
    <div class="product-card" data-id="${product.id}">
      <img
        class="product-card-img"
        src="${product.image}"
        alt="${product.name}"
        onclick="window.location.href='product-details.html?id=${product.id}'"
        loading="lazy"
      />
      <div class="product-card-body">
        <p class="product-category-badge">${product.category}</p>
        <p class="product-name" onclick="window.location.href='product-details.html?id=${product.id}'">${product.name}</p>
        <div class="product-rating">
          <span class="stars">${buildStars(product.rating)}</span>
          <span class="rating-count">${product.rating} (${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          <span class="product-price-old">${formatPrice(product.oldPrice)}</span>
          <span class="product-discount">${product.discount}% off</span>
        </div>
        <button
          class="btn-add-cart ${inCart ? 'in-cart' : ''}"
          onclick="addToCart(${product.id})"
          id="cartBtn-${product.id}"
        >
          <i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
          ${inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  `;
}

// Render an array of products into a grid element by its ID
function renderProductGrid(containerId, productArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (productArray.length === 0) {
    container.innerHTML = '<p class="no-results">No products found.</p>';
    return;
  }
  container.innerHTML = productArray.map(p => createProductCard(p)).join('');
}

// Helper: get products by category
function getByCategory(category) {
  return products.filter(p => p.category === category);
}

// After adding to cart, update button states on the current page
function refreshCartButtons() {
  products.forEach(product => {
    const btn = document.getElementById(`cartBtn-${product.id}`);
    if (btn) {
      const inCart = isInCart(product.id);
      btn.className = `btn-add-cart ${inCart ? 'in-cart' : ''}`;
      btn.innerHTML = `<i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i> ${inCart ? 'Added' : 'Add to Cart'}`;
    }
  });
}


/* ══════════════════════════════════════════════════════
   4. PRODUCTS PAGE — Filter, Search, Sort
   ══════════════════════════════════════════════════════ */

// Apply all active filters together
function applyFilters() {
  // Get selected category from radio buttons
  const selectedCat = document.querySelector('input[name="category"]:checked');
  const category = selectedCat ? selectedCat.value : 'All';

  // Get search term
  const searchEl = document.getElementById('searchInput');
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';

  // Get sort option
  const sortEl = document.getElementById('sortSelect');
  const sort = sortEl ? sortEl.value : 'default';

  // Get max price
  const priceEl = document.getElementById('priceRange');
  const maxPrice = priceEl ? parseInt(priceEl.value) : 999999;

  // Step 1: Filter by category
  let filtered = category === 'All' ? [...products] : products.filter(p => p.category === category);

  // Step 2: Filter by search term (name or category)
  if (search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search)
    );
  }

  // Step 3: Filter by price
  filtered = filtered.filter(p => p.price <= maxPrice);

  // Step 4: Sort
  if (sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Render
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (noResults) noResults.style.display = 'flex';
    } else {
      if (noResults) noResults.style.display = 'none';
      renderProductGrid('productsGrid', filtered);
    }
  }

  if (resultsCount) {
    resultsCount.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  }
}

// Search filter (called from search input on products page)
function filterBySearch() {
  applyFilters();
}

// Update the price display label
function updatePriceDisplay() {
  const priceEl = document.getElementById('priceRange');
  const displayEl = document.getElementById('priceDisplay');
  if (priceEl && displayEl) {
    displayEl.textContent = formatPrice(parseInt(priceEl.value));
  }
}

// Clear all filters and reset
function clearFilters() {
  // Reset category to All
  const allRadio = document.querySelector('input[value="All"]');
  if (allRadio) allRadio.checked = true;

  // Reset search
  const searchEl = document.getElementById('searchInput');
  if (searchEl) searchEl.value = '';

  // Reset sort
  const sortEl = document.getElementById('sortSelect');
  if (sortEl) sortEl.value = 'default';

  // Reset price
  const priceEl = document.getElementById('priceRange');
  if (priceEl) {
    priceEl.value = 300000;
    updatePriceDisplay();
  }

  applyFilters();
}

// Toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.querySelector('.filters-sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}


/* ══════════════════════════════════════════════════════
   5. CART PAGE RENDER
   ══════════════════════════════════════════════════════ */

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartItemsContainer');
  const emptyCart = document.getElementById('emptyCart');
  const cartSummary = document.getElementById('cartSummary');

  if (!container) return;

  if (cart.length === 0) {
    // Show empty state
    container.innerHTML = '';
    if (emptyCart) emptyCart.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  // Hide empty state, show summary
  if (emptyCart) emptyCart.style.display = 'none';
  if (cartSummary) cartSummary.style.display = 'block';

  // Build cart items HTML
  let html = '';
  let subtotal = 0;
  let totalSavings = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const itemTotal = product.price * item.qty;
    const saving = (product.oldPrice - product.price) * item.qty;
    subtotal += itemTotal;
    totalSavings += saving;

    html += `
      <div class="cart-item">
        <img
          class="cart-item-img"
          src="${product.image}"
          alt="${product.name}"
          onclick="window.location.href='product-details.html?id=${product.id}'"
        />
        <div class="cart-item-info">
          <p class="cart-item-name" onclick="window.location.href='product-details.html?id=${product.id}'">
            ${product.name}
          </p>
          <p class="cart-item-category">${product.category}</p>
          <p class="cart-item-price">${formatPrice(product.price)} <span style="font-size:12px;color:#94a3b8;text-decoration:line-through;">${formatPrice(product.oldPrice)}</span></p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="decreaseQty(${product.id})">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="increaseQty(${product.id})">+</button>
            <button class="btn-remove" onclick="removeFromCart(${product.id})">
              <i class="fas fa-trash-alt"></i> Remove
            </button>
          </div>
        </div>
        <div style="text-align:right;font-weight:700;font-size:1rem;white-space:nowrap;">
          ${formatPrice(itemTotal)}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Update summary panel
  const totalItems = cart.reduce((t, i) => t + i.qty, 0);
  const grandTotal = subtotal; // free delivery

  document.getElementById('summaryCount').textContent = totalItems;
  document.getElementById('summarySubtotal').textContent = formatPrice(subtotal);
  document.getElementById('summaryTotal').textContent = formatPrice(grandTotal);
  document.getElementById('summaryDiscount').textContent = '-' + formatPrice(totalSavings);

  const savingsMsg = document.getElementById('savingsMsg');
  if (savingsMsg) {
    savingsMsg.textContent = totalSavings > 0
      ? `🎉 You're saving ${formatPrice(totalSavings)} on this order!`
      : '';
  }
}

// Checkout button handler
function checkout() {
  const user = JSON.parse(localStorage.getItem('tz_user')) || null;
  if (!user) {
    showToast('Please log in to proceed to checkout.', 'error');
    setTimeout(() => window.location.href = 'login.html', 1200);
    return;
  }
  showToast('Order placed successfully! 🎉 (Demo)', 'success');
  // In real app, redirect to payment gateway
  setTimeout(() => {
    localStorage.removeItem('tz_cart');
    updateCartCount();
    renderCart();
  }, 1500);
}


/* ══════════════════════════════════════════════════════
   6. PRODUCT DETAIL PAGE
   ══════════════════════════════════════════════════════ */

function renderProductDetail(product) {
  const container = document.getElementById('productDetailPage');
  if (!container) return;

  const inCart = isInCart(product.id);
  const savings = product.oldPrice - product.price;

  // Build gallery thumbnails HTML
  const thumbsHTML = product.images.map((img, i) =>
    `<img
      class="gallery-thumb ${i === 0 ? 'active' : ''}"
      src="${img}"
      alt="${product.name} view ${i+1}"
      onclick="switchGalleryImage('${img}', this)"
    />`
  ).join('');

  // Build features list HTML
  const featuresHTML = product.features.map(f =>
    `<li><i class="fas fa-check"></i> ${f}</li>`
  ).join('');

  container.innerHTML = `
    <div class="product-detail-layout">

      <!-- Left: Gallery -->
      <div>
        <img
          class="gallery-main"
          id="galleryMain"
          src="${product.images[0]}"
          alt="${product.name}"
        />
        <div class="gallery-thumbs">
          ${thumbsHTML}
        </div>
      </div>

      <!-- Right: Info -->
      <div>
        <p class="detail-category">${product.category}</p>
        <h1 class="detail-name">${product.name}</h1>

        <div class="detail-rating">
          <span class="rating-badge">
            ${product.rating} <i class="fas fa-star"></i>
          </span>
          <span style="font-size:13px;color:#475569;">${product.reviews.toLocaleString()} reviews</span>
        </div>

        <div class="detail-price-row">
          <span class="detail-price">${formatPrice(product.price)}</span>
          <span class="detail-price-old">${formatPrice(product.oldPrice)}</span>
          <span class="detail-discount">${product.discount}% OFF</span>
        </div>
        <p class="detail-savings">You save ${formatPrice(savings)}</p>

        <div class="detail-features">
          <h4>Key Features</h4>
          <ul>${featuresHTML}</ul>
        </div>

        <div class="detail-stock in-stock">
          <i class="fas fa-circle"></i> In Stock — Free Delivery
        </div>

        <div class="detail-actions">
          <button
            class="btn-detail-cart"
            id="detailCartBtn"
            onclick="addToCart(${product.id}); updateDetailCartBtn(${product.id})"
          >
            <i class="fas fa-cart-plus"></i>
            ${inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <button
            class="btn-detail-wishlist"
            id="wishlistBtn"
            onclick="toggleWishlist(this)"
            title="Add to Wishlist"
          >
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Switch the main gallery image when a thumbnail is clicked
function switchGalleryImage(src, thumbEl) {
  const mainImg = document.getElementById('galleryMain');
  if (mainImg) mainImg.src = src;

  // Remove active from all thumbs, add to clicked
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

// Update the cart button on product detail page after adding
function updateDetailCartBtn(productId) {
  const btn = document.getElementById('detailCartBtn');
  if (btn) {
    btn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
  }
}

// Wishlist toggle (visual only, no backend)
function toggleWishlist(btn) {
  btn.classList.toggle('wishlisted');
  const icon = btn.querySelector('i');
  if (btn.classList.contains('wishlisted')) {
    icon.className = 'fas fa-heart';
    showToast('Added to Wishlist!', 'info');
  } else {
    icon.className = 'far fa-heart';
    showToast('Removed from Wishlist.', 'info');
  }
}


/* ══════════════════════════════════════════════════════
   7. TOAST NOTIFICATION
   ══════════════════════════════════════════════════════ */

let toastTimer = null;

// Show a toast at the bottom-right of the screen
// type: 'success' | 'error' | 'info'
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  // Clear any existing timer so toasts don't overlap weirdly
  if (toastTimer) clearTimeout(toastTimer);

  toast.textContent = message;
  toast.className = `toast toast-${type} show`;

  // Hide after 2.5 seconds
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}


/* ══════════════════════════════════════════════════════
   8. AUTH — Login & Register
   ══════════════════════════════════════════════════════ */

// ── Login Form Handler ──
function handleLogin(event) {
  event.preventDefault(); // stop page from refreshing

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  let valid = true;

  // Clear previous errors
  setError('loginEmailError', '');
  setError('loginPasswordError', '');

  // Validate email
  if (!email) {
    setError('loginEmailError', 'Email is required.');
    valid = false;
  } else if (!isValidEmail(email)) {
    setError('loginEmailError', 'Enter a valid email address.');
    valid = false;
  }

  // Validate password
  if (!password) {
    setError('loginPasswordError', 'Password is required.');
    valid = false;
  } else if (password.length < 6) {
    setError('loginPasswordError', 'Password must be at least 6 characters.');
    valid = false;
  }

  if (!valid) return;

  // Check if user exists in localStorage
  const users = JSON.parse(localStorage.getItem('tz_users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    setError('loginPasswordError', 'Invalid email or password.');
    return;
  }

  // Login successful — save current user session
  localStorage.setItem('tz_user', JSON.stringify({ name: user.firstName, email: user.email }));
  showToast(`Welcome back, ${user.firstName}! 👋`, 'success');

  setTimeout(() => window.location.href = 'index.html', 1000);
}

// ── Register Form Handler ──
function handleRegister(event) {
  event.preventDefault();

  const firstName = document.getElementById('regFirstName').value.trim();
  const lastName  = document.getElementById('regLastName').value.trim();
  const email     = document.getElementById('regEmail').value.trim();
  const phone     = document.getElementById('regPhone').value.trim();
  const password  = document.getElementById('regPassword').value;
  const confirm   = document.getElementById('regConfirmPassword').value;
  const terms     = document.getElementById('regTerms').checked;
  let valid = true;

  // Clear all errors
  ['regFirstName','regLastName','regEmail','regPhone','regPassword','regConfirmPassword','regTerms']
    .forEach(id => setError(id + 'Error', ''));

  if (!firstName) { setError('regFirstNameError', 'First name is required.'); valid = false; }
  if (!lastName)  { setError('regLastNameError', 'Last name is required.'); valid = false; }

  if (!email) {
    setError('regEmailError', 'Email is required.'); valid = false;
  } else if (!isValidEmail(email)) {
    setError('regEmailError', 'Enter a valid email address.'); valid = false;
  }

  if (!phone) {
    setError('regPhoneError', 'Phone number is required.'); valid = false;
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    setError('regPhoneError', 'Enter a valid 10-digit Indian mobile number.'); valid = false;
  }

  if (!password) {
    setError('regPasswordError', 'Password is required.'); valid = false;
  } else if (password.length < 8) {
    setError('regPasswordError', 'Password must be at least 8 characters.'); valid = false;
  }

  if (!confirm) {
    setError('regConfirmPasswordError', 'Please confirm your password.'); valid = false;
  } else if (password !== confirm) {
    setError('regConfirmPasswordError', 'Passwords do not match.'); valid = false;
  }

  if (!terms) { setError('regTermsError', 'You must agree to the Terms.'); valid = false; }

  if (!valid) return;

  // Check if email already registered
  const users = JSON.parse(localStorage.getItem('tz_users')) || [];
  if (users.find(u => u.email === email)) {
    setError('regEmailError', 'This email is already registered.'); return;
  }

  // Save new user
  users.push({ firstName, lastName, email, phone, password });
  localStorage.setItem('tz_users', JSON.stringify(users));

  // Auto-login
  localStorage.setItem('tz_user', JSON.stringify({ name: firstName, email }));
  showToast(`Account created! Welcome, ${firstName}! 🎉`, 'success');

  setTimeout(() => window.location.href = 'index.html', 1000);
}

// Helper: show error text under a field
function setError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = message;
}

// Helper: basic email validation regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Toggle password visibility
function togglePwd(inputId, btn) {
  const input = document.getElementById(inputId);
  const icon = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// Password strength checker (used on register page)
function checkPasswordStrength(password) {
  const fill  = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');
  if (!fill || !label) return;

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { pct: '0%',   color: 'transparent', text: '' },
    { pct: '25%',  color: '#ef4444',     text: 'Weak' },
    { pct: '50%',  color: '#f97316',     text: 'Fair' },
    { pct: '75%',  color: '#eab308',     text: 'Good' },
    { pct: '100%', color: '#22c55e',     text: 'Strong' },
  ];

  fill.style.width = levels[score].pct;
  fill.style.background = levels[score].color;
  label.textContent = levels[score].text;
  label.style.color  = levels[score].color;
}

// Logout current user
function logoutUser() {
  localStorage.removeItem('tz_user');
  showToast('Logged out successfully.', 'info');
  setTimeout(() => window.location.href = 'index.html', 800);
}


/* ══════════════════════════════════════════════════════
   9. NAVBAR — Auth State & Mobile Menu
   ══════════════════════════════════════════════════════ */

// Update navbar links based on whether a user is logged in
function updateNavAuth() {
  const user = JSON.parse(localStorage.getItem('tz_user'));
  const loginLink    = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const navUser      = document.getElementById('navUser');
  const navUserName  = document.getElementById('navUserName');
  const logoutBtn    = document.getElementById('logoutBtn');
  const mobileLogin  = document.getElementById('mobileLoginLink');
  const mobileReg    = document.getElementById('mobileRegisterLink');
  const mobileLogout = document.getElementById('mobileLogoutLink');

  if (user) {
    // User is logged in
    if (loginLink) loginLink.style.display = 'none';
    if (registerLink) registerLink.style.display = 'none';
    if (navUser) { navUser.style.display = 'flex'; }
    if (navUserName) navUserName.textContent = user.name;
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (mobileLogin) mobileLogin.style.display = 'none';
    if (mobileReg) mobileReg.style.display = 'none';
    if (mobileLogout) mobileLogout.style.display = 'flex';
  } else {
    // User is logged out
    if (loginLink) loginLink.style.display = 'inline-block';
    if (registerLink) registerLink.style.display = 'inline-block';
    if (navUser) navUser.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (mobileLogin) mobileLogin.style.display = 'flex';
    if (mobileReg) mobileReg.style.display = 'flex';
    if (mobileLogout) mobileLogout.style.display = 'none';
  }
}

// Mobile hamburger menu toggle
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }
}

// Homepage search button redirect
function initSearchBar() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const q = searchInput.value.trim();
      if (q && window.location.pathname.includes('index')) {
        window.location.href = `products.html?q=${encodeURIComponent(q)}`;
      }
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') searchBtn.click();
    });
  }
}

// On products page, apply search from URL query string
function applyURLSearch() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  const searchEl = document.getElementById('searchInput');
  if (q && searchEl) {
    searchEl.value = q;
    applyFilters();
  }
}


/* ══════════════════════════════════════════════════════
   10. INITIALIZATION — runs on every page load
   ══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();  // always show correct cart badge
  updateNavAuth();    // show login/logout based on session
  initHamburger();    // wire hamburger button
  initSearchBar();    // wire search bar
  applyURLSearch();   // apply URL search params if any
});
