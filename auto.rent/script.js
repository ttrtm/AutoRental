// Мапа сітки: (номер плитки → позиція та розмір у grid)
const gridMap = [
    [1, 1, 4, 3],  // Машина №1 займає 4 колонки і 3 рядки
    [5, 1, 2, 3],  // Машина №2 займає 2x3
    [1, 4, 3, 3],  // Машина №3 займає 3x3
    [4, 4, 3, 3],  // Машина №4 займає 3x3
    [1, 7, 6, 4]   // Машина №5 (збільшена) займає всю ширину
];

// Дані про машини + характеристики
const cars = [
    {
        img: "photos/mercedes.jpg",
        name: "Mercedes-Benz E-Class",
        price: "99€/Tag",
        specs: `
            <div class="car-specs">
                <div><i class="fas fa-cogs"></i> <b>Мотор:</b> 2.0L 4-циліндровий турбодвигун</div>
                <div><i class="fas fa-bolt"></i> <b>Потужність:</b> 255 к.с.</div>
                <div><i class="fas fa-tachometer-alt"></i> <b>Макс. швидкість:</b> 250 км/год</div>
                <div><i class="fas fa-stopwatch"></i> <b>Розгін 0-100:</b> 6.0 сек</div>
                <div><i class="fas fa-exchange-alt"></i> <b>Трансмісія:</b> Автомат, 9-ступ.</div>
                <div><i class="fas fa-gas-pump"></i> <b>Споживання:</b> 7.2 л/100 км</div>
                <div><i class="fas fa-weight-hanging"></i> <b>Вага:</b> 1745 кг</div>
                <div><i class="fas fa-star"></i> <b>Особливості:</b> Вишуканий інтер'єр, передові системи безпеки</div>
            </div>
        `
    },
    {
        img: "photos/bmw.jpg",
        name: "BMW 5 Series",
        price: "89€/Tag",
        specs: `
            <div class="car-specs">
                <div><i class="fas fa-cogs"></i> <b>Мотор:</b> 3.0L 6-циліндровий турбодвигун</div>
                <div><i class="fas fa-bolt"></i> <b>Потужність:</b> 335 к.с.</div>
                <div><i class="fas fa-tachometer-alt"></i> <b>Макс. швидкість:</b> 250 км/год</div>
                <div><i class="fas fa-stopwatch"></i> <b>Розгін 0-100:</b> 5.3 сек</div>
                <div><i class="fas fa-exchange-alt"></i> <b>Трансмісія:</b> Автомат, 8-ступ.</div>
                <div><i class="fas fa-gas-pump"></i> <b>Споживання:</b> 6.5 л/100 км</div>
                <div><i class="fas fa-weight-hanging"></i> <b>Вага:</b> 1850 кг</div>
                <div><i class="fas fa-star"></i> <b>Особливості:</b> Спортивний дизайн, точна керованість</div>
            </div>
        `
    },
    {
        img: "photos/audi.jpg",
        name: "Audi A6",
        price: "95€/Tag",
        specs: `
            <div class="car-specs">
                <div><i class="fas fa-cogs"></i> <b>Мотор:</b> 2.0L 4-циліндровий турбодвигун</div>
                <div><i class="fas fa-bolt"></i> <b>Потужність:</b> 190 к.с.</div>
                <div><i class="fas fa-tachometer-alt"></i> <b>Макс. швидкість:</b> 240 км/год</div>
                <div><i class="fas fa-stopwatch"></i> <b>Розгін 0-100:</b> 7.1 сек</div>
                <div><i class="fas fa-exchange-alt"></i> <b>Трансмісія:</b> Автомат, 7-ступ.</div>
                <div><i class="fas fa-gas-pump"></i> <b>Споживання:</b> 6.2 л/100 км</div>
                <div><i class="fas fa-weight-hanging"></i> <b>Вага:</b> 1780 кг</div>
                <div><i class="fas fa-star"></i> <b>Особливості:</b> Динамічний дизайн, передові технології асистентів водія</div>
            </div>
        `
    },
    {
        img: "photos/porsche.jpg",
        name: "Porsche 911",
        price: "150€/Tag",
        specs: `
            <div class="car-specs">
                <div><i class="fas fa-cogs"></i> <b>Мотор:</b> 3.0L 6-циліндровий турбодвигун</div>
                <div><i class="fas fa-bolt"></i> <b>Потужність:</b> 450 к.с.</div>
                <div><i class="fas fa-tachometer-alt"></i> <b>Макс. швидкість:</b> 320 км/год</div>
                <div><i class="fas fa-stopwatch"></i> <b>Розгін 0-100:</b> 3.5 сек</div>
                <div><i class="fas fa-exchange-alt"></i> <b>Трансмісія:</b> Автомат, 7-ступ.</div>
                <div><i class="fas fa-gas-pump"></i> <b>Споживання:</b> 9.4 л/100 км</div>
                <div><i class="fas fa-weight-hanging"></i> <b>Вага:</b> 1450 кг</div>
                <div><i class="fas fa-star"></i> <b>Особливості:</b> Легендарний спортивний автомобіль, найвищий рівень комфорту</div>
            </div>
        `
    },
    {
        img: "photos/tesla.jpg",
        name: "Tesla Model S",
        price: "130€/Tag",
        specs: `
            <div class="car-specs">
                <div><i class="fas fa-cogs"></i> <b>Мотор:</b> Електродвигун</div>
                <div><i class="fas fa-bolt"></i> <b>Потужність:</b> 762 к.с.</div>
                <div><i class="fas fa-tachometer-alt"></i> <b>Макс. швидкість:</b> 250 км/год</div>
                <div><i class="fas fa-stopwatch"></i> <b>Розгін 0-100:</b> 2.5 сек</div>
                <div><i class="fas fa-exchange-alt"></i> <b>Трансмісія:</b> Одноступенева трансмісія</div>
                <div><i class="fas fa-gas-pump"></i> <b>Запас ходу:</b> 600 км</div>
                <div><i class="fas fa-weight-hanging"></i> <b>Вага:</b> 2100 кг</div>
                <div><i class="fas fa-star"></i> <b>Особливості:</b> Інноваційний дизайн, автоматичне керування</div>
            </div>
        `
    }
];



// Додаємо машини в сітку
const carGrid = document.getElementById("car-grid");
cars.forEach((car, index) => {
    const [colStart, rowStart, colSpan, rowSpan] = gridMap[index];

    let carDiv = document.createElement("div");
    carDiv.classList.add("car");
    carDiv.style.gridColumn = `${colStart} / span ${colSpan}`;
    carDiv.style.gridRow = `${rowStart} / span ${rowSpan}`;

    // Контейнер фото + перевертання
    carDiv.innerHTML = `
        <div class="car-image-container">
            <div class="car-image-wrapper">
                <img src="${car.img}" alt="${car.name}" class="car-image car-image-front">
                <div class="car-image car-image-back">${car.specs}</div>
            </div>
        </div>
        <h3>${car.name}</h3>
        <p>${car.price}</p>
        <button>Jetzt buchen</button>
    `;

    // Додаємо функцію перевертання
    carDiv.querySelector(".car-image-container").addEventListener("click", () => {
        carDiv.querySelector(".car-image-container").classList.toggle("flip");
    });

    carGrid.appendChild(carDiv);
});
