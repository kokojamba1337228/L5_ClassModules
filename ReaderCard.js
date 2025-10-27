export class ReaderCard {
    #cardNumber;
    #holdersName;
    #isActive;

    constructor(cardNumber, holdersName, isActive) {
        this.#cardNumber = cardNumber;
        this.#holdersName = holdersName;
        this.#isActive = isActive;
    }

    get cardNumber() { return this.#cardNumber; }
    set cardNumber(value) { this.#cardNumber = value; }

    get holdersName() { return this.#holdersName; }
    set holdersName(value) { this.#holdersName = value; }

    get isActive() { return this.#isActive; }
    set isActive(value) { this.#isActive = value; }

    #deactivateCard() {
        this.#isActive = false;
    }

    show() {
        console.log(`Билет №${this.#cardNumber}, владелец: ${this.#holdersName}, активен: ${this.#isActive ? 'Да' : 'Нет'}`);
    }

    delete() {
        for (let key of Object.getOwnPropertyNames(this)) {
            delete this[key];
        }
        Object.setPrototypeOf(this, null);
    }

    copy() {
        return this;
    }

    static clone(instance) {
        return new ReaderCard(instance.cardNumber, instance.holdersName, instance.isActive);
    }
}
