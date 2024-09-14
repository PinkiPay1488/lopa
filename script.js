// script.js
// Пример простого скрипта для проверки загрузки
document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт успешно загружен!");
});

// Функция для добавления товаров в таблицу
document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let item = document.getElementById('item').value;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let seller = document.getElementById('seller').value;

    let table = document.querySelector('table');
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${item}</td>
        <td>${category}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${seller}</td>
    `;

    // Очищаем форму после добавления товара
    document.getElementById('add-item-form').reset();
});

// Функция для фильтрации товаров
function filterItems() {
    let categoryFilter = document.getElementById('category-filter').value.toLowerCase();
    let priceMin = document.getElementById('price-min').value;
    let priceMax = document.getElementById('price-max').value;

    let table = document.querySelector('table');
    let rows = table.rows;

    for (let i = 1; i < rows.length; i++) {
        let category = rows[i].cells[1].textContent.toLowerCase();
        let price = parseFloat(rows[i].cells[3].textContent);

        if ((category.includes(categoryFilter) || categoryFilter === '') &&
            (price >= priceMin || priceMin === '') &&
            (price <= priceMax || priceMax === '')) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
