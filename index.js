import { StudentCard } from "./StudentCard.js";

const card1 = new StudentCard(1234, "Иванов Иван Иванович", true, 2);
const card2 = new StudentCard(1235, "Петрова Мария Сергеевна", true, 3);
const card3 = new StudentCard(1236, "Сидоров Петр Александрович", true, 1);
const card4 = new StudentCard(1237, "Кузнецова Анна Дмитриевна", false, 4);
const card5 = new StudentCard(1238, "Смирнов Алексей Викторович", true, 2);

const cards = [card1, card2, card3, card4, card5];

const container = document.createElement('div');
container.id = 'cards-container';
document.body.appendChild(container);

cards.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-item';
    cardDiv.style.cssText = 'margin: 20px; padding: 15px; border: 2px solid #007bff; border-radius: 8px; background-color: #f0f8ff;';
    
    cardDiv.innerHTML = `
        <h3 style="color: #007bff; margin-top: 0;">Студенческий билет #${index + 1}</h3>
        <p><strong>Владелец:</strong> ${card.holdersName}</p>
        <p><strong>Номер билета:</strong> ${card.cardNumber}</p>
        <p><strong>Год обучения:</strong> ${card.yearOfStudy}</p>
        <p><strong>Активен:</strong> ${card.isActive ? 'Да' : 'Нет'}</p>
    `;
    
    container.appendChild(cardDiv);
    
    card.show();
});
