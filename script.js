// ============================================
// مطعم حار بارد | قائمة طعام مع أحجام منسدلة
// تم حل مشكلات JS بالكامل
// ============================================

// بيانات الطعام - سهلة الإضافة والتعديل
const menuData = [
    { name: "شاورما جبن", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 8 },
        { size: "كبير", price: 12 }
    ]},
    { name: "شاورما بدون جبن", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 7 },
        { size: "كبير", price: 11 }
    ]},
    { name: "شاورما عربي", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 14 },
        { size: "كبير", price: 28 }
    ]},
    { name: "شاورما سكود", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 15 },
        { size: "كبير", price: 24 }
    ]},
    { name: "شاورما عربي ونص", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "كبير", price: 22 }
    ]},
    { name: "صحن شاورما فرط", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صحن", price: 25 }
    ]},
    { name: "شورجر", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "سندوتش", price: 9 }
    ]},
     { name: "برجر دجاج", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 8 },
        { size: "كبير", price: 10 }
    ]},
    { name: "صحن بطاطس", category: "شاورما", icon: "fa-utensils", sizes: [
        { size: "صغير", price: 7 },
        { size: "كبير", price: 14 }
    ]},

    { name: "بيتزا خضار", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 14 },
        { size: "وسط", price: 18 },
        { size: "كبير", price: 25 }
    ]},
    { name: "بيتزا مارجيريتا", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 14 },
        { size: "وسط", price: 18 },
        { size: "كبير", price: 25 }
    ]},
    { name: "بيتزا تونة", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 14 },
        { size: "وسط", price: 19 },
        { size: "كبير", price: 28 }
    ]},
    { name: "بيتزا دجاج", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 14 },
        { size: "وسط", price: 19 },
        { size: "كبير", price: 28 }
    ]},
    { name: "بيتزا نقانق", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 16 },
        { size: "وسط", price: 20 },
        { size: "كبير", price: 27 }
    ]},
    { name: "بيتزا بيبروني", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 18 },
        { size: "وسط", price: 25 },
        { size: "كبير", price: 30 }
    ]},
    { name: "بيتزا ايطاليانو", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 18 },
        { size: "وسط", price: 25 },
        { size: "كبير", price: 30 }
    ]},
    { name: "بيتزا شاورما", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 18 },
        { size: "وسط", price: 25 },
        { size: "كبير", price: 30 }
    ]},
    { name: "عش بلبل مكسرات", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 18 },
        { size: "وسط", price: 25 },
        { size: "كبير", price: 30 }
    ]},
    { name: "بيتزا دجاج خضار", category: "بيتزا", icon: "fa-pizza-slice", sizes: [
        { size: "صغير", price: 16 },
        { size: "وسط", price: 20 },
        { size: "كبير", price: 30 }
    ]},
    { name: "بروستد", category: "بروستد", icon: "fa-drumstick-bite", sizes: [
        { size: "عادي", price: 17 },
        { size: "حراق", price: 18 },
    ]},
    { name: "فطائر متنوعة",  category: "فطائر", icon: "fa-bread-slice", sizes: [
        { size: "فطيرة جبن سائل", price: 8 },
        { size: "فطيرة جبن زعتر", price: 8 },
        { size: "فطيرة جبن عسل", price: 8 },
        { size: "فطيرة جبن بيض", price: 8 },
        { size: "فطيرة  ميكس جبن", price: 8 },
        { size: "فطيرة قشطة", price: 8 },
        { size: "فطيرة لبنة", price: 8 },
        { size: "فطيرة لبنة زيتون", price: 8 },
        { size: "فطيرة لبنة زعتر", price: 8 },
        { size: "فطيرة لبنة عسل", price: 8 },
        { size: "فطيرة سبانخ", price: 8 },
        { size: "فطيرة لحم", price: 8 },
        { size: "فطيرة تونة", price: 8 },
        { size: "فطيرة دجاج", price: 12 },
        { size: "فطيرة شاورما", price: 14 },
    ]},

    { name: "مأكولات الفرن", category: "مأكولات الفرن", icon: "fa-oven", sizes: [
        { size: "حميص", price: 32 },
        { size: "مقلقل", price: 32 },
        { size: "اوصال حلم بالفرن", price: 32 },
        { size: "كفتة طحينية", price: 32 },
        { size: "كفتة طماطم", price: 32 },
        { size: "كفتة باذنجان", price: 32 },
        { size: "كباب هندي بالفرن", price: 32 },
        { size: "كباب دجاج هندي بالفرن", price: 32 },
        { size: "مقلقل دجاج", price: 32 },
        { size: "طواية بالفرن", price: 32 },
        
    ]},
    { name: "مشكل حار بارد", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 35 },
        { size: "وسط", price: 72 },
        { size: "كبير", price: 140 }
    ]},
    { name: "مشكل دجاج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 30 },
        { size: "وسط", price: 60 },
        { size: "كبير", price: 120 }
    ]},
    { name: "مشكل لحم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 35 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 135 }
    ]},
    { name: "ريش بلدي طازج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "واجد", price: 40 },
    ]},
    { name: "كباب حلبي", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 130 }
    ]},
    { name: "كباب حلبي دجاج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "كباب باذنجان", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "كباب موصلي", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "كباب لحم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 130 }
    ]},
    { name: "كباب خشخاش", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 130 }
    ]},
    { name: "كباب مغربي", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 130 }
    ]},
    { name: "كباب دجاج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 30 },
        { size: "وسط", price: 60 },
        { size: "كبير", price: 120 }
    ]},
    { name: "كباب عراقي", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 35 },
        { size: "وسط", price: 70 },
        { size: "كبير", price: 135 }
    ]},
    { name: "قلوب غنم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "كلاوي غنم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "أوصال دجاج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "شيش بالعظم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 30 },
        { size: "وسط", price: 60 },
        { size: "كبير", price: 120 }
    ]},
    { name: "كبة حلبية", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "صغير", price: 32 },
        { size: "وسط", price: 64 },
        { size: "كبير", price: 128 }
    ]},
    { name: "ماريا عرايس لحم", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "واحد", price: 32 },
    ]},
    { name: "ماريا عرايس دجاج", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "واحد", price: 30 },
    ]},
    { name: "بطاطس", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "واحد", price: 8 },
    ]},
    { name: "نفر رز", category: "مشويات", icon: "fa-fire", sizes: [
        { size: "واحد", price: 7 },
    ]},
    
    { name: "كباب دجاج", category: "سندويتشات مشويات", icon: "fa-bread-slice", sizes: [
        { size: "صغير", price: 8 },
        { size: "كبير", price: 15 }
    ]},
    { name: "كباب لحم", category: "سندويتشات مشويات", icon: "fa-bread-slice", sizes: [
        { size: "صغير", price: 9 },
        { size: "كبير", price: 16 }
    ]},
    { name: "أوصال لحم", category: "سندويتشات مشويات", icon: "fa-bread-slice", sizes: [
        { size: "صغير", price: 10 },
        { size: "كبير", price: 18 }
    ]},
    { name: "أوصال دجاج", category: "سندويتشات مشويات", icon: "fa-bread-slice", sizes: [
        { size: "صغير", price: 9 },
        { size: "كبير", price: 16 }
    ]},
    { name: "دجاج على الفحم", category: "دجاج فحم", icon: "fa-drumstick-bite", sizes: [
        { size: "نصف دجاجة مع الأرز", price: 20 },
        { size: "دجاجة كاملة مع الأرز", price: 40 },
        { size: "دجاجة كاملة سادة", price: 32 },
        { size: "نصف دجاجة سادة", price: 16 },
    ]},
    { name: "برتقال", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "برتقال كبس", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 10 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "مانجو", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "مانجو بالحليب", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 8 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 25 }
    ]},
    { name: "كوكتيل", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "فرولة", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "جوافة", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "شمام", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "حبحب", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "موز بالحليب", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "ليمون نعناع", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "رمان", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "انانس", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 7 },
        { size: "جركن صغير", price: 15 },
        { size: "جركن كبير", price: 20 }
    ]},
    { name: "ليمون سادة", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 6 },
        { size: "جركن صغير", price: 14 },
        { size: "جركن كبير", price: 18 }
    ]},
    { name: "عرائس", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "عور قلب", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "اصفهاني", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "افوكادو", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "شمندر", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},
    { name: "البسام", category: "عصائر", icon: "fa-glass-water", sizes: [
        { size: "كوب", price: 9 },
        { size: "جركن صغير", price: 20 },
        { size: "جركن كبير", price: 30 }
    ]},

    { name: "مشروبات غازية", category: "مشروبات غازية", icon: "fa-cola", sizes: [
        { size: "ببسي", price: 2.5 },
        { size: "ببسي دايت", price: 2.5 },
        { size: "حمضيات", price: 2.5 },
        { size: "سفن آب", price: 2.5 },
        { size: "سفن آب دايت", price: 2.5 },
        { size: "ديو", price: 2.5 },
        { size: "ببسي عائلة صغير", price: 5 },
        { size: "سفن عائلة صغير", price: 5 },
        { size: "ديو عائلة صغير", price: 5 },
        { size: "حمضيات عائلة صغير", price: 5 },
         { size: "ببسي عائلة كبير", price: 9 },
        { size: "سفن عائلة كبير", price: 9 },
        { size: "ديو عائلة كبير", price: 9 },
        { size: "حمضيات عائلة كبير", price: 9 }
    ]},
    { name: "العصيرات والماء", category: "العصيرات المعلبة والماء", icon: "fa-glass-water", sizes: [
         { size: "عصير نجران", price: 2 },
        { size: "ماء كبير", price: 1 },
        { size: "ماء صغير", price: 0.5 },
        { size: "عصير ربيع", price: 2 }
    ]},

];

// متغيرات السلة
let cart = [];  // كل عنصر: { id, name, size, price, quantity }

// المتغيرات العامة للفلتر والبحث
let currentFilter = "all";
let searchQuery = "";

// دوال السلة
function addToCart(productName, selectedSize, price) {
    const existing = cart.find(item => item.name === productName && item.size === selectedSize);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            name: productName,
            size: selectedSize,
            price: price,
            quantity: 1
        });
    }
    updateCartUI();
    showNotification(`تم إضافة ${productName} (${selectedSize}) إلى السلة`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) {
            removeFromCart(id);
        } else {
            item.quantity = newQty;
            updateCartUI();
        }
    }
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const totalSpan = document.getElementById('cartTotal');
    const countSpan = document.getElementById('cartCount');
    const total = calculateTotal();
    const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart-msg">السلة فارغة</p>';
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-size">${item.size}</div>
                    <div class="cart-item-price">${item.price} ر.س</div>
                </div>
                <div class="cart-item-actions">
                    <button class="decrease-qty" data-id="${item.id}"><i class="fas fa-minus-circle"></i></button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="increase-qty" data-id="${item.id}"><i class="fas fa-plus-circle"></i></button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `).join('');
        
        // إضافة أحداث الأزرار الجديدة
        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                updateQuantity(id, -1);
            });
        });
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                updateQuantity(id, 1);
            });
        });
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                removeFromCart(id);
            });
        });
    }
    totalSpan.textContent = total;
    countSpan.textContent = itemCount;
}

function showNotification(msg) {
    // إشعار بسيط يختفي بعد ثانيتين
    const notif = document.createElement('div');
    notif.className = 'cart-notification';
    notif.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    notif.style.position = 'fixed';
    notif.style.bottom = '100px';
    notif.style.left = '20px';
    notif.style.backgroundColor = '#4caf50';
    notif.style.color = 'white';
    notif.style.padding = '0.8rem 1.2rem';
    notif.style.borderRadius = '50px';
    notif.style.zIndex = '1100';
    notif.style.fontWeight = 'bold';
    notif.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
}

function sendOrderViaWhatsApp() {
    if (cart.length === 0) {
        alert('السلة فارغة، أضف بعض الأصناف أولاً.');
        return;
    }
    let message = 'السلام عليكم، أبغا طلب:\n';
    cart.forEach(item => {
        message += `• ${item.name} (${item.size}) × ${item.quantity} = ${item.price * item.quantity} ر.س\n`;
    });
    message += `\nالمجموع الكلي: ${calculateTotal()} ر.س\nمن مطعم شاورما حار بارد.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/966538757512?text=${encoded}`, '_blank');
}

// دوال عرض القائمة (مع إضافة زر إضافة إلى السلة)
function buildFilterButtons() {
    const categories = [...new Set(menuData.map(item => item.category))];
    const container = document.getElementById("filterButtons");
    if (!container) return;
    container.innerHTML = `
        <button class="filter-btn active" data-filter="all">الكل</button>
        ${categories.map(cat => `<button class="filter-btn" data-filter="${cat}">${cat}</button>`).join('')}
    `;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderMenu();
        });
    });
}

function renderMenu() {
    const filtered = menuData.filter(item => {
        const matchFilter = currentFilter === "all" || item.category === currentFilter;
        const matchSearch = searchQuery === "" || item.name.includes(searchQuery) || item.category.includes(searchQuery);
        return matchFilter && matchSearch;
    });
    const grid = document.getElementById("menuGrid");
    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i> لا توجد نتائج مطابقة</div>';
        return;
    }
    grid.innerHTML = filtered.map((item, idx) => {
        const options = item.sizes.map((s, i) => `<option value="${s.size}" data-price="${s.price}" ${i === 0 ? 'selected' : ''}>${s.size} - ${s.price} ر.س</option>`).join('');
        const defaultPrice = item.sizes[0].price;
        return `
            <div class="card" data-item-name="${item.name}">
                <div class="card-icon"><i class="fas ${item.icon}"></i></div>
                <div class="card-content">
                    <div class="card-title">${item.name}</div>
                    <div class="card-category"><i class="fas fa-tag"></i> ${item.category}</div>
                    <div class="size-selector">
                        <label><i class="fas fa-ruler-combined"></i> اختر نوع طلبك</label>
                        <select class="size-dropdown" data-idx="${idx}">${options}</select>
                    </div>
                    <div class="price-display" data-price-idx="${idx}">${defaultPrice} ر.س</div>
                    <div class="card-buttons">
                        <button class="order-now-btn"><i class="fab fa-whatsapp"></i> طلب مباشر</button>
                        <button class="add-to-cart-btn"><i class="fas fa-cart-plus"></i> أضف للسلة</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // ربط أحداث القوائم المنسدلة (تحديث السعر)
    document.querySelectorAll('.size-dropdown').forEach(select => {
        const card = select.closest('.card');
        const idx = select.getAttribute('data-idx');
        const priceDisplay = card.querySelector(`.price-display[data-price-idx="${idx}"]`);
        const updatePrice = () => {
            const selectedOption = select.options[select.selectedIndex];
            const price = selectedOption.getAttribute('data-price');
            priceDisplay.textContent = `${price} ر.س`;
        };
        select.addEventListener('change', updatePrice);
        updatePrice();
    });
    
    // زر الطلب المباشر (نفس الوظيفة القديمة)
    document.querySelectorAll('.order-now-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.card');
            const productName = card.querySelector('.card-title').innerText;
            const select = card.querySelector('.size-dropdown');
            const selectedOption = select.options[select.selectedIndex];
            const size = selectedOption.value;
            const price = selectedOption.getAttribute('data-price');
            const message = `السلام عليكم، أبغا طلب: ${productName} (${size}) - السعر: ${price} ريال من مطعم شاورما حار بارد.`;
            window.open(`https://wa.me/966538757512?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
    
    // زر إضافة إلى السلة (جديد)
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.card');
            const productName = card.querySelector('.card-title').innerText;
            const select = card.querySelector('.size-dropdown');
            const selectedOption = select.options[select.selectedIndex];
            const size = selectedOption.value;
            const price = parseFloat(selectedOption.getAttribute('data-price'));
            addToCart(productName, size, price);
        });
    });
}

// باقي الدوال (بحث، تمرير، إلخ) كما هي دون تغيير
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderMenu();
        });
    }
}
function setupHeroButton() {
    const heroBtn = document.getElementById('heroOrderBtn');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            window.open('https://wa.me/966538757512?text=السلام عليكم، أبغا طلب وجبات من مطعم شاورما حار بارد', '_blank');
        });
    }
}
function setupGoTop() {
    const goTop = document.getElementById('goTopBtn');
    if (goTop) {
        window.addEventListener('scroll', () => {
            goTop.classList.toggle('show', window.scrollY > 500);
        });
        goTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}
function setupSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else if (targetId === 'map-section') document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
            else document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '0';
            observer.observe(card);
        });
    }, 200);
}

// إظهار وإخفاء السلة
function setupCartSidebar() {
    const cartIcon = document.getElementById('cartIcon');
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('closeCartBtn');
    
    function openCart() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    }
    function closeCart() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
    cartIcon.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
    
    // زر إرسال الطلب في السلة
    const checkoutBtn = document.getElementById('checkoutWhatsappBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', sendOrderViaWhatsApp);
    }
}

// التهيئة العامة
function init() {
    buildFilterButtons();
    renderMenu();
    setupSearch();
    setupHeroButton();
    setupGoTop();
    setupSmoothScroll();
    setupAnimations();
    setupCartSidebar();
    updateCartUI(); // لعرض العداد والمحتوى الأولي
    console.log("✅ تم تحميل الموقع مع سلة الطلبات");
}

document.addEventListener('DOMContentLoaded', init);