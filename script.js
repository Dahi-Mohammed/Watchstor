// ============================================================
//  ChronoLux - script.js
// ============================================================

// قاعدة بيانات المنتجات
// stock = عدد القطع المتوفرة من المنتج
const products = [
    { id: 1, name: "ساعة رولكس كلاسيك", category: "mens", price: 3500, image: "./images/img1.webp", desc: "ساعة رجالية فاخرة مصممة من الستانلس ستيل المقاوم للصدأ ومقاومة للماء.", stock: 5 },
    { id: 2, name: "ساعة أوميغا الرياضية", category: "mens", price: 2800, image: "./images/images.jpeg", desc: "ساعة رياضية عملية تناسب الأنشطة اليومية والمغامرات الخارجية.", stock: 8 },
    { id: 3, name: "ساعة سيكو أوتوماتيك", category: "mens", price: 1800, image: "./images/img3.webp", desc: "ساعة أوتوماتيكية بحركة ميكانيكية دقيقة وتصميم كلاسيكي أنيق.", stock: 3 },
    { id: 4, name: "ساعة تيسو كلاسيك", category: "mens", price: 2200, image: "./images/Img4.webp", desc: "ساعة رجالية بسوار جلد طبيعي وتصميم رسمي يناسب العمل.", stock: 10 },
    { id: 5, name: "ساعة كاسيو جي شوك", category: "mens", price: 1500, image: "./images/Img5.jpeg", desc: "ساعة قوية مقاومة للصدمات والماء، مثالية للاستخدام الشاق.", stock: 6 },
    { id: 6, name: "ساعة تاغ هوير", category: "mens", price: 4200, image: "./images/Img6.webp", desc: "ساعة كرونوغراف فاخرة بتصميم رياضي وزجاج مقاوم للخدش.", stock: 2 },
    { id: 7, name: "ساعة سيتزن إيكو درايف", category: "mens", price: 1700, image: "/Img7.webp", desc: "ساعة تعمل بالطاقة الضوئية بدون الحاجة لتغيير البطارية.", stock: 7 },
    { id: 8, name: "ساعة فوسيل جلد", category: "mens", price: 1300, image: "./images/Img8.webp", desc: "ساعة عصرية بسوار جلدي ولوحة سوداء أنيقة.", stock: 12 },
    { id: 9, name: "ساعة هاميلتون خاكي", category: "mens", price: 3000, image: "./images/Img9.webp", desc: "ساعة بتصميم عسكري كلاسيكي وأداء موثوق.", stock: 4 },
    { id: 10, name: "ساعة دانيال ويلنغتون", category: "mens", price: 1600, image: "./images/Img10.webp", desc: "ساعة بسيطة وأنيقة بتصميم رفيع يناسب كل المناسبات.", stock: 9 },
    { id: 11, name: "ساعة كارتير النسائية", category: "womens", price: 3200, image: "./images/Img11.webp", desc: "ساعة نسائية أنيقة مرصعة بتصميم فريد يبرز أناقتك.", stock: 6 },
    { id: 12, name: "ساعة غوتشي الفاخرة", category: "womens", price: 2500, image: "./images/Img12.webp", desc: "تصميم عصري جذاب يلائم السهرات والمناسبات الخاصة.", stock: 4 },
    { id: 13, name: "ساعة مايكل كورس ", category: "womens", price: 2300, image: "./images/Img13.webp", desc: "ساعة نسائية بلون ذهبي لامع وتفاصيل مرصعة.", stock: 9 },
    { id: 14, name: "ساعة سواروفسكي كريستال", category: "womens", price: 2700, image: "./images/Img14.webp", desc: "ساعة مرصعة بكريستال لامع تضيف لمسة فخامة لإطلالتك.", stock: 2 },
    { id: 15, name: "ساعة جيس روز جولد", category: "womens", price: 1900, image: "./images/Img15.webp", desc: "ساعة بلون الروز جولد وسوار معدني ناعم.", stock: 7 },
    { id: 16, name: "ساعة كالفن كلاين ميني", category: "womens", price: 1400, image: "./images/Img16.jpeg", desc: "ساعة صغيرة الحجم بتصميم بسيط وراقٍ.", stock: 11 },
    { id: 17, name: "ساعة أرماني سيراميك", category: "womens", price: 2600, image: "./images/Img17.webp", desc: "ساعة بسوار سيراميك أبيض مقاوم للخدش.", stock: 5 },
    { id: 18, name: "ساعة تيسو ليدي", category: "womens", price: 2000, image: "./images/Img18.jpeg", desc: "ساعة نسائية كلاسيكية بميناء صدفي رقيق.", stock: 8 },
    { id: 19, name: "ساعة سكاجن رفيعة", category: "womens", price: 1500, image: "./images/Img19.jpeg", desc: "ساعة خفيفة وأنيقة بتصميم اسكندنافي بسيط.", stock: 3 },
    { id: 20, name: "ساعة بانادورا لؤلؤ", category: "womens", price: 1750, image: "./images/Img20.jpeg", desc: "ساعة نسائية بسوار لؤلؤي وتصميم رومانسي.", stock: 10 },
    { id: 21, name: "ساعة حائط خشبية كلاسيكية", category: "wall", price: 900, image: "./images/Img21.jpeg", desc: "ساعة حائط مصنوعة من الخشب الطبيعي الفاخر لتزيين صالة المنازل.", stock: 8 },
    { id: 22, name: "ساعة حائط حديثة ليد", category: "wall", price: 1200, image: "./images/Img22.jpeg", desc: "ساعة حائط رقمية بإضاءة LED عصرية ومميزة.", stock: 6 },
    { id: 23, name: "ساعة حائط معدنية ذهبية", category: "wall", price: 1100, image: "./images/Img23.jpeg", desc: "ساعة كبيرة بإطار معدني ذهبي تناسب الصالونات الفخمة.", stock: 5 },
    { id: 24, name: "ساعة حائط بندول", category: "wall", price: 1500, image: "./images/Img24.jpeg", desc: "ساعة بندول كلاسيكية بصوت هادئ وتصميم تراثي.", stock: 3 },
    { id: 25, name: "ساعة حائط دائرية بسيطة", category: "wall", price: 450, image: "./images/Img25.jpeg", desc: "ساعة بتصميم مينيمال تناسب المطبخ والمكتب.", stock: 12 },
    { id: 26, name: "ساعة حائط رومانية", category: "wall", price: 800, image: "./images/Img26.jpeg", desc: "ساعة بأرقام رومانية وإطار أسود أنيق.", stock: 9 },
    { id: 27, name: "ساعة حائط كبيرة الحجم", category: "wall", price: 1700, image: "./images/Img27.jpeg", desc: "ساعة بقطر كبير تعطي حضوراً قوياً للحائط.", stock: 4 },
    { id: 28, name: "ساعة حائط فينتج", category: "wall", price: 950, image: "./images/Img28.jpeg", desc: "ساعة بطابع قديم وألوان دافئة تضفي دفئاً للمكان.", stock: 7 },
    { id: 29, name: "ساعة حائط زجاجية", category: "wall", price: 1050, image: "./images/Img29.jpeg", desc: "ساعة بزجاج شفاف وتصميم عصري يلائم الديكور الحديث.", stock: 10 },
    { id: 30, name: "ساعة حائط للأطفال", category: "wall", price: 600, image: "./images/Img30.jpeg", desc: "ساعة بألوان مرحة وأرقام واضحة لغرف الأطفال.", stock: 15 }
];

// نسبة الخصم عند الدفع بالفيزا (2%)
const VISA_DISCOUNT = 0.02;

// ------------------------------------------------------------
//  أدوات مساعدة
// ------------------------------------------------------------
function fmt(n) {
    return Number(Number(n).toFixed(2)).toLocaleString('en-US');
}

function loadJSON(key, fallback) {
    try {
        const v = JSON.parse(localStorage.getItem(key));
        return v === null || v === undefined ? fallback : v;
    } catch (e) {
        return fallback;
    }
}

function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

function findProduct(id) {
    return products.find(p => p.id === Number(id));
}

// ------------------------------------------------------------
//  الحالة: المخزون + السلة (محفوظين في المتصفح)
// ------------------------------------------------------------
let stockOverrides = loadJSON('stock_v2', {});   // الكميات بعد عمليات الشراء
let cart = sanitizeCart(loadJSON('cart_v2', [])); // [{ id, qty }]
let currentCategory = null;

// عدد القطع المتوفرة حالياً من منتج
function getStock(id) {
    const p = findProduct(id);
    if (!p) return 0;
    return stockOverrides[p.id] !== undefined ? stockOverrides[p.id] : p.stock;
}

function sanitizeCart(raw) {
    if (!Array.isArray(raw)) return [];
    const out = [];
    raw.forEach(it => {
        const p = it ? findProduct(it.id) : null;
        const qty = it ? parseInt(it.qty) : 0;
        if (p && qty > 0) {
            const q = Math.min(qty, getStock(p.id));
            if (q > 0) out.push({ id: p.id, qty: q });
        }
    });
    return out;
}

function saveCart() { saveJSON('cart_v2', cart); }

function calcSubtotal() {
    return cart.reduce((sum, i) => sum + findProduct(i.id).price * i.qty, 0);
}

// ------------------------------------------------------------
//  الأيقونات (SVG داخلية - بدون الحاجة لإنترنت)
// ------------------------------------------------------------
const ICONS = {
    'house': 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    'magnifying-glass': 'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    'cart-shopping': 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
    'xmark': 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    'arrow-right': 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
    'trash': 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    'credit-card': 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
    'lock': 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
    'receipt': 'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
    'circle-check': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    'money-bill-wave': 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
    'moon': 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    'sun': 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zM11 20h2v3h-2zM1 11h3v2H1zM20 11h3v2h-3zM4.2 5.6l1.4-1.4 2.1 2.1-1.4 1.4zM16.3 17.7l1.4-1.4 2.1 2.1-1.4 1.4zM4.2 18.4l2.1-2.1 1.4 1.4-2.1 2.1zM16.3 6.3l2.1-2.1 1.4 1.4-2.1 2.1z'
};

function icon(name) {
    return `<i class="icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg></i>`;
}

// تحويل كل عنصر فيه data-icon إلى أيقونة
function renderIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        if (ICONS[name]) el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;
    });
}

// تمييز زر الصفحة الحالية في الهيدر
function highlightNav() {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-btn').forEach(a => {
        if (a.getAttribute('href') === current) a.classList.add('active');
    });
}

// ------------------------------------------------------------
//  الوضع الداكن (الاختيار بيتحفظ في المتصفح)
// ------------------------------------------------------------
function isDark() {
    return document.documentElement.classList.contains('dark');
}

// تحديث شكل الزر (قمر في الوضع الفاتح / شمس في الوضع الداكن)
function updateThemeIcon() {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        const ic = btn.querySelector('.icon');
        if (ic) ic.setAttribute('data-icon', isDark() ? 'sun' : 'moon');
        btn.title = isDark() ? 'الوضع الفاتح' : 'الوضع الداكن';
    });
}

function toggleTheme() {
    const dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    updateThemeIcon();
    renderIcons();
}

// ------------------------------------------------------------
//  تشغيل عند تحميل أي صفحة
// ------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
    renderIcons();
    highlightNav();
    updateCart();
    loadHomeProducts();
});

// بديل للصور اللي مبتظهرش: يرسم صورة بسيطة فيها اسم المنتج
document.addEventListener('error', (e) => {
    const img = e.target;
    if (!img || img.tagName !== 'IMG' || img.dataset.fallback) return;
    img.dataset.fallback = "1";
    const label = (img.alt || "ChronoLux").replace(/[<>&"]/g, "");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">
        <rect width="100%" height="100%" fill="#222"/>
        <text x="50%" y="50%" fill="#d4af37" font-size="22" font-family="Tahoma, Arial" text-anchor="middle" dominant-baseline="middle">⌚ ${label}</text>
    </svg>`;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}, true);

// ------------------------------------------------------------
//  عرض المنتجات
// ------------------------------------------------------------

// نص حالة التوفر
function stockHTML(id) {
    const s = getStock(id);
    if (s <= 0) return '<div class="stock out">نفدت الكمية</div>';
    const unit = s === 1 ? 'قطعة واحدة' : `${s} قطع`;
    if (s <= 3) return `<div class="stock low">المتوفر: ${unit} فقط!</div>`;
    return `<div class="stock in">المتوفر: ${unit}</div>`;
}

// بطاقة منتج
function productCardHTML(p) {
    const soldOut = getStock(p.id) <= 0;
    return `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}" onclick="openProduct(${p.id})">
            <div class="product-info">
                <h3 onclick="openProduct(${p.id})">${p.name}</h3>
                <div class="price">${fmt(p.price)} جنيه</div>
                ${stockHTML(p.id)}
                <button onclick="addToCart(${p.id})" ${soldOut ? 'disabled' : ''}>${soldOut ? 'نفدت الكمية' : 'أضف إلى السلة'}</button>
            </div>
        </div>
    `;
}

// منتجات قسم معين (صفحات الأقسام)
function loadCategoryProducts(categoryKey) {
    currentCategory = categoryKey;
    const grid = document.getElementById("category-products");
    if (!grid) return;
    grid.innerHTML = products
        .filter(p => p.category === categoryKey)
        .map(productCardHTML).join('');
}

// كل المنتجات (الصفحة الرئيسية)
function loadHomeProducts() {
    const grid = document.getElementById("home-products");
    if (!grid) return;
    grid.innerHTML = products.map(productCardHTML).join('');
}

// الانتقال إلى صفحة تفاصيل المنتج
function openProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// صفحة تفاصيل المنتج
function loadProductDetails() {
    const container = document.getElementById("product-details");
    if (!container) return;

    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const product = findProduct(productId);

    if (!product) {
        container.innerHTML = "<p>المنتج غير موجود.</p>";
        return;
    }

    const soldOut = getStock(product.id) <= 0;
    container.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="details-info">
            <h2>${product.name}</h2>
            <div class="price">${fmt(product.price)} جنيه</div>
            ${stockHTML(product.id)}
            <p>${product.desc}</p>
            <button class="add-btn" onclick="addToCart(${product.id})" ${soldOut ? 'disabled' : ''}>${soldOut ? 'نفدت الكمية' : 'أضف إلى السلة'}</button>
        </div>
    `;
}

// إعادة رسم المنتجات (بعد الشراء مثلاً) عشان الكميات تتحدث
function refreshViews() {
    if (currentCategory) loadCategoryProducts(currentCategory);
    loadHomeProducts();
    if (document.getElementById('product-details')) loadProductDetails();
}

// ------------------------------------------------------------
//  البحث (Enter أو الضغط على أيقونة البحث)
// ------------------------------------------------------------
function handleSearch(event) {
    if (event.key === 'Enter') runSearch();
}

function runSearch() {
    const input = document.getElementById("search-input");
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    if (query.includes("رجال")) {
        window.location.href = "mens.html";
    } else if (query.includes("حريم") || query.includes("نساء") || query.includes("نسائي")) {
        window.location.href = "womens.html";
    } else if (query.includes("حائط") || query.includes("جدار")) {
        window.location.href = "wall.html";
    } else {
        const found = products.find(p => p.name.toLowerCase().includes(query));
        if (found) {
            window.location.href = `product.html?id=${found.id}`;
        } else {
            alert("عذراً، لم يتم العثور على ما تبحث عنه.");
        }
    }
}

// ------------------------------------------------------------
//  السلة
// ------------------------------------------------------------
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.toggle("open");
}

function openCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.add("open");
}

function closeCart() {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.remove("open");
}

function addToCart(productId) {
    const p = findProduct(productId);
    if (!p) return;

    const stock = getStock(p.id);
    const item = cart.find(i => i.id === p.id);
    const current = item ? item.qty : 0;

    if (stock <= 0) {
        alert("عذراً، هذا المنتج نفدت كميته.");
        return;
    }
    if (current >= stock) {
        alert(`لا يمكن إضافة أكثر من الكمية المتوفرة (${stock}).`);
        return;
    }

    if (item) item.qty++;
    else cart.push({ id: p.id, qty: 1 });

    saveCart();
    updateCart();
    openCart();
}

// زيادة/تقليل كمية منتج داخل السلة
function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const newQty = item.qty + delta;
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    if (newQty > getStock(productId)) {
        alert(`الكمية المتوفرة من هذا المنتج ${getStock(productId)} فقط.`);
        return;
    }
    item.qty = newQty;
    saveCart();
    updateCart();
}

// حذف منتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCart();
}

// تحديث عرض السلة والعداد والإجمالي
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    if (cartCount) cartCount.innerText = cart.reduce((s, i) => s + i.qty, 0);

    if (cartItems && totalPrice) {
        if (cart.length === 0) {
            cartItems.innerHTML = "<p style='text-align:center; color:#777;'>السلة فارغة</p>";
            totalPrice.innerText = "0";
        } else {
            cartItems.innerHTML = cart.map(i => {
                const p = findProduct(i.id);
                return `
                    <div class="cart-item">
                        <div class="cart-item-details">
                            <h4>${p.name}</h4>
                            <p>${fmt(p.price * i.qty)} جنيه</p>
                            <div class="qty-controls">
                                <button onclick="changeQty(${p.id}, -1)" aria-label="تقليل">−</button>
                                <span>${i.qty}</span>
                                <button onclick="changeQty(${p.id}, 1)" aria-label="زيادة">+</button>
                            </div>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${p.id})" title="حذف من السلة">${icon('trash')}</button>
                    </div>
                `;
            }).join('');
            totalPrice.innerText = fmt(calcSubtotal());
        }
    }

    // لو إحنا في صفحة الدفع، حدّث ملخص الطلب
    if (document.getElementById('pay-summary')) loadPaymentPage();
}

// ------------------------------------------------------------
//  بيانات التوصيل (الاسم + الموبايل + المحافظة + العنوان)
// ------------------------------------------------------------
const GOVERNORATES = [
    "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "البحر الأحمر", "البحيرة", "الفيوم",
    "الغربية", "الإسماعيلية", "المنوفية", "المنيا", "القليوبية", "الوادي الجديد", "السويس",
    "الشرقية", "أسوان", "أسيوط", "بني سويف", "بورسعيد", "دمياط", "جنوب سيناء",
    "كفر الشيخ", "مطروح", "الأقصر", "قنا", "شمال سيناء", "سوهاج"
];

// حماية النصوص اللي بيكتبها العميل قبل عرضها في الصفحة
function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// توحيد شكل رقم الموبايل (أرقام عربي، +20، مسافات...)
function normalizePhone(raw) {
    let p = String(raw)
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
        .replace(/[\s\-()]/g, '');
    if (p.startsWith('+20')) p = '0' + p.slice(3);
    else if (p.startsWith('0020')) p = '0' + p.slice(4);
    else if (/^20\d{10}$/.test(p)) p = '0' + p.slice(2);
    return p;
}

// حقول التوصيل (prefix = بادئة الـ id عشان نستخدمها في أكتر من مكان)
function deliveryFieldsHTML(p) {
    const options = GOVERNORATES.map(g => `<option value="${g}">${g}</option>`).join('');
    return `
        <div class="form-group">
            <label for="${p}-name">الاسم بالكامل</label>
            <input type="text" id="${p}-name" autocomplete="name" placeholder="الاسم الأول والأخير">
        </div>
        <div class="form-group">
            <label for="${p}-phone">رقم الموبايل (للتواصل معك)</label>
            <input type="tel" id="${p}-phone" inputmode="numeric" autocomplete="tel" maxlength="14" placeholder="01XXXXXXXXX" dir="ltr">
        </div>
        <div class="form-group">
            <label for="${p}-gov">المحافظة</label>
            <select id="${p}-gov">
                <option value="">اختر المحافظة</option>
                ${options}
            </select>
        </div>
        <div class="form-group">
            <label for="${p}-address">العنوان بالتفصيل</label>
            <textarea id="${p}-address" rows="3" autocomplete="street-address" placeholder="المدينة / المنطقة، الشارع، رقم العمارة، الدور، علامة مميزة"></textarea>
        </div>
    `;
}

function readDelivery(p) {
    const val = id => { const el = document.getElementById(`${p}-${id}`); return el ? el.value.trim() : ''; };
    return {
        name: val('name'),
        phone: normalizePhone(val('phone')),
        governorate: val('gov'),
        address: val('address')
    };
}

// بيرجّع نص الخطأ (أو نص فاضي لو كل حاجة تمام)
function validateDelivery(d) {
    if (d.name.length < 3) return "اكتب اسمك بالكامل.";
    if (!/^01[0125]\d{8}$/.test(d.phone)) return "اكتب رقم موبايل صحيح (11 رقم يبدأ بـ 01).";
    if (!d.governorate) return "اختر المحافظة.";
    if (d.address.length < 10) return "اكتب عنوان التوصيل بالتفصيل (المنطقة والشارع ورقم العمارة).";
    return "";
}

function deliverySummaryHTML(d) {
    return `
        <div class="delivery-summary">
            <div><b>الاسم:</b> ${esc(d.name)}</div>
            <div><b>الموبايل:</b> <span dir="ltr">${esc(d.phone)}</span></div>
            <div><b>العنوان:</b> ${esc(d.governorate)} - ${esc(d.address)}</div>
        </div>
    `;
}

// عرض رسالة خطأ في عنصر معين وتمرير الصفحة لحد ما تظهر
function showError(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerText = msg;
    el.style.display = msg ? 'block' : 'none';
    if (msg && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ------------------------------------------------------------
//  إتمام الشراء
// ------------------------------------------------------------

// تأكد إن الكميات في السلة لسه متوفرة
function validateCartStock() {
    let changed = false;
    cart = cart.filter(i => {
        const s = getStock(i.id);
        if (s <= 0) { changed = true; return false; }
        if (i.qty > s) { i.qty = s; changed = true; }
        return true;
    });
    if (changed) {
        saveCart();
        updateCart();
        alert("تم تعديل السلة لتتوافق مع الكميات المتوفرة حالياً.");
    }
    return cart.length > 0;
}

function checkout() {
    if (cart.length === 0) {
        alert("سلتك فارغة بالفعل!");
        return;
    }
    if (!validateCartStock()) return;
    showPaymentModal();
}

// نافذة اختيار طريقة الدفع
function showPaymentModal() {
    closeModal();
    const subtotal = calcSubtotal();
    const visaTotal = subtotal * (1 - VISA_DISCOUNT);

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay show';
    overlay.id = 'payment-modal';
    overlay.innerHTML = `
        <div class="modal">
            <h3>اختر طريقة الدفع</h3>
            <p class="modal-sub">إجمالي الطلب: <b>${fmt(subtotal)} جنيه</b></p>

            <button class="pay-option" onclick="chooseCash()">
                <span class="pay-title">${icon('money-bill-wave')} الدفع عند الاستلام</span>
                <small>المبلغ المطلوب: ${fmt(subtotal)} جنيه</small>
            </button>

            <button class="pay-option visa" onclick="chooseVisa()">
                <span class="pay-title">${icon('credit-card')} الدفع بالفيزا <span class="discount-tag">خصم 2%</span></span>
                <small><span class="old-price">${fmt(subtotal)}</span> ${fmt(visaTotal)} جنيه</small>
            </button>

            <button class="modal-cancel" onclick="closeModal()">إلغاء</button>
        </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
}

function closeModal() {
    const m = document.getElementById('payment-modal');
    if (m) m.remove();
}

// الدفع عند الاستلام
function chooseCash() {
    const modal = document.querySelector('#payment-modal .modal');
    if (!modal) return;
    modal.innerHTML = `
        <h3>بيانات التوصيل</h3>
        <p class="modal-sub">الدفع عند الاستلام - المبلغ المطلوب: <b>${fmt(calcSubtotal())} جنيه</b></p>
        ${deliveryFieldsHTML('cash')}
        <div class="error-msg" id="cash-error"></div>
        <button class="checkout-btn" onclick="confirmCashOrder()">تأكيد الطلب</button>
        <button class="modal-cancel" style="margin-top:10px" onclick="showPaymentModal()">رجوع</button>
    `;
}

// تأكيد طلب الدفع عند الاستلام بعد التحقق من بيانات التوصيل
function confirmCashOrder() {
    const delivery = readDelivery('cash');
    const error = validateDelivery(delivery);
    if (error) { showError('cash-error', error); return; }
    if (!validateCartStock()) { closeModal(); return; }

    const total = calcSubtotal();
    const orderNo = completeOrder({ method: 'cash', delivery, total });

    const modal = document.querySelector('#payment-modal .modal');
    if (!modal) return;
    modal.innerHTML = `
        <div class="success-box">
            ${icon('circle-check')}
            <h3>تم تأكيد طلبك</h3>
            <p>رقم الطلب: <b>${orderNo}</b></p>
            <p>طريقة الدفع: عند الاستلام</p>
            <p>المبلغ المطلوب: <b>${fmt(total)} جنيه</b></p>
            ${deliverySummaryHTML(delivery)}
            <p>سنتواصل معك على الرقم ${esc(delivery.phone)} لتأكيد موعد التوصيل.</p>
            <button class="checkout-btn" onclick="closeModal()">تم</button>
        </div>
    `;
}

// الدفع بالفيزا: الانتقال لصفحة الدفع
function chooseVisa() {
    try { sessionStorage.setItem('visa_checkout', '1'); } catch (e) {}
    window.location.href = 'payment.html';
}

// تنفيذ الطلب: خصم الكميات من المخزون وتفريغ السلة
function completeOrder(info) {
    info = info || {};
    const orderNo = 'CL-' + Date.now().toString().slice(-6);

    // تسجيل الطلب (في متصفح العميل فقط، بدون أي بيانات بطاقة)
    const orders = loadJSON('orders_v1', []);
    orders.push({
        orderNo,
        date: new Date().toISOString(),
        method: info.method || 'cash',
        total: info.total !== undefined ? info.total : calcSubtotal(),
        delivery: info.delivery || null,
        items: cart.map(i => {
            const p = findProduct(i.id);
            return { id: p.id, name: p.name, price: p.price, qty: i.qty };
        })
    });
    saveJSON('orders_v1', orders);

    // خصم الكميات من المخزون وتفريغ السلة
    cart.forEach(i => {
        stockOverrides[i.id] = Math.max(0, getStock(i.id) - i.qty);
    });
    saveJSON('stock_v2', stockOverrides);

    cart = [];
    saveCart();
    updateCart();
    closeCart();
    refreshViews();

    return orderNo;
}

// ------------------------------------------------------------
//  صفحة الدفع بالفيزا (payment.html)
// ------------------------------------------------------------
function loadPaymentPage() {
    const box = document.getElementById('payment-content');
    if (!box) return;

    let started = null;
    try { started = sessionStorage.getItem('visa_checkout'); } catch (e) {}

    if (!started || cart.length === 0) {
        box.innerHTML = `
            <div class="pay-card empty-payment">
                <p>لا توجد عملية دفع جارية.</p>
                <a href="index.html" class="back-btn">${icon('arrow-right')} العودة للرئيسية</a>
            </div>
        `;
        return;
    }
    // حقول التوصيل بتترسم مرة واحدة بس (عشان ما نمسحش اللي العميل كتبه)
    const fields = document.getElementById('delivery-fields');
    if (fields && !fields.innerHTML.trim()) fields.innerHTML = deliveryFieldsHTML('ship');

    renderPaymentSummary();
}

function renderPaymentSummary() {
    const summary = document.getElementById('pay-summary');
    if (!summary) return;

    const subtotal = calcSubtotal();
    const discount = subtotal * VISA_DISCOUNT;
    const total = subtotal - discount;

    const rows = cart.map(i => {
        const p = findProduct(i.id);
        return `<div class="summary-item"><span>${p.name} × ${i.qty}</span><span>${fmt(p.price * i.qty)} جنيه</span></div>`;
    }).join('');

    summary.innerHTML = `
        <h3>${icon('receipt')} ملخص الطلب</h3>
        ${rows}
        <div class="summary-row"><span>المجموع</span><span>${fmt(subtotal)} جنيه</span></div>
        <div class="summary-row discount"><span>خصم الفيزا (2%)</span><span>- ${fmt(discount)} جنيه</span></div>
        <div class="summary-row total"><span>الإجمالي</span><span>${fmt(total)} جنيه</span></div>
    `;

    const payAmount = document.getElementById('pay-amount');
    if (payAmount) payAmount.innerText = `(${fmt(total)} جنيه)`;
}

// تنسيق رقم البطاقة: 0000 0000 0000 0000
function formatCardNumber(input) {
    const digits = input.value.replace(/\D/g, '').slice(0, 16);
    input.value = digits.replace(/(.{4})/g, '$1 ').trim();
}

// تنسيق تاريخ الانتهاء: MM/YY
function formatExpiry(input) {
    const digits = input.value.replace(/\D/g, '').slice(0, 4);
    input.value = digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits;
}

function showCardError(msg) {
    showError('card-error', msg);
}

// تأكيد الدفع (نسخة تجريبية: لا يتم إرسال أو حفظ بيانات البطاقة)
function submitCardPayment(event) {
    event.preventDefault();

    const name = document.getElementById('card-name').value.trim();
    const number = document.getElementById('card-number').value.replace(/\s/g, '');
    const expiry = document.getElementById('card-expiry').value;
    const cvv = document.getElementById('card-cvv').value;

    // بيانات التوصيل الأول
    const delivery = readDelivery('ship');
    const deliveryError = validateDelivery(delivery);
    if (deliveryError) return showCardError(deliveryError), false;

    if (name.length < 3) return showCardError("اكتب اسم حامل البطاقة."), false;
    if (!/^\d{16}$/.test(number)) return showCardError("رقم البطاقة لازم يكون 16 رقم."), false;

    const m = expiry.match(/^(0[1-9]|1[0-2])\/(\d{2})$/);
    if (!m) return showCardError("اكتب تاريخ الانتهاء بالشكل MM/YY."), false;
    const expiresAt = new Date(2000 + parseInt(m[2]), parseInt(m[1]), 1); // أول يوم بعد انتهاء الشهر
    if (expiresAt <= new Date()) return showCardError("البطاقة منتهية الصلاحية."), false;

    if (!/^\d{3,4}$/.test(cvv)) return showCardError("رمز CVV لازم يكون 3 أو 4 أرقام."), false;

    if (!validateCartStock()) return false;
    showCardError("");

    const total = calcSubtotal() * (1 - VISA_DISCOUNT);
    const last4 = number.slice(-4);

    const btn = document.getElementById('pay-btn');
    btn.disabled = true;
    btn.innerText = "جاري تنفيذ الدفع...";

    setTimeout(() => {
        const orderNo = completeOrder({ method: 'visa', delivery, total });
        try { sessionStorage.removeItem('visa_checkout'); } catch (e) {}
        showPaymentSuccess(orderNo, total, last4, delivery);
    }, 1200);

    return false;
}

function showPaymentSuccess(orderNo, total, last4, delivery) {
    const box = document.getElementById('payment-content');
    if (!box) return;
    box.innerHTML = `
        <div class="pay-card success-box">
            ${icon('circle-check')}
            <h3>تم الدفع بنجاح</h3>
            <p>رقم الطلب: <b>${orderNo}</b></p>
            <p>المبلغ المدفوع (بعد خصم 2%): <b>${fmt(total)} جنيه</b></p>
            <p>البطاقة المنتهية بـ ${last4}</p>
            ${delivery ? deliverySummaryHTML(delivery) : ''}
            ${delivery ? `<p>سنتواصل معك على الرقم ${esc(delivery.phone)} لتأكيد موعد التوصيل.</p>` : ''}
            <a href="index.html" class="back-btn">${icon('arrow-right')} العودة للرئيسية</a>
        </div>
    `;
}
