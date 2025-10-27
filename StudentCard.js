import { ReaderCard } from "./ReaderCard.js";

export class StudentCard extends ReaderCard {
    #yearOfStudy;

    constructor(cardNumber, holdersName, isActive, yearOfStudy) {
        super(cardNumber, holdersName, isActive);
        this.#yearOfStudy = yearOfStudy;
    }

    get yearOfStudy() { return this.#yearOfStudy; }
    set yearOfStudy(value) { this.#yearOfStudy = value; }

    show() {
        console.log(`Студенческий билет №${this.cardNumber}, владелец: ${this.holdersName}, год обучения: ${this.#yearOfStudy}, активен: ${this.isActive ? 'Да' : 'Нет'}`);
    }

    static clone(instance) {
        return new StudentCard(instance.cardNumber, instance.holdersName, instance.isActive, instance.yearOfStudy);
    }

    copy() {
        return this;
    }

    delete() {
        for (let key of Object.getOwnPropertyNames(this)) {
            delete this[key];
        }
        Object.setPrototypeOf(this, null);
    }
}

