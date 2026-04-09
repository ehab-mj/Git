class Wizard {
    #health;
    #mana;

    constructor(name, startingHealth, startingMana) {
        this.name = name;
        this.#health = startingHealth;
        this.#mana = startingMana;
        this.maxHealth = startingHealth;
        this.maxMana = startingMana;
    }

    isAlive() {
        return this.#health > 0;
    }

    getStatus() {
        return {
            name: this.name,
            health: this.#health,
            mana: this.#mana
        };
    }

    receiveDamage(amount) {
        if (amount <= 0) return;
        this.#health -= amount;
        if (this.#health < 0) this.#health = 0;
    }

    spendMana(cost) {
        if (cost <= 0) return false;
        if (this.#mana < cost) return false;
        this.#mana -= cost;
        return true;
    }

    castSpell(opponent) {
        console.log("Generic wizard spell");
    }
}

class FireWizard extends Wizard {
    castSpell(opponent) {
        if (!this.isAlive()) {
            console.log(this.name + " cannot act");
            return;
        }

        const manaCost = 20;
        const damage = 30;

        if (!this.spendMana(manaCost)) {
            console.log(this.name + " not enough mana 🔥");
            return;
        }

        opponent.receiveDamage(damage);

        console.log(
            this.name + " casts FIRE spell on " +
            opponent.name + " for " + damage + " damage 🔥"
        );
    }
}

class IceWizard extends Wizard {
    castSpell(opponent) {
        if (!this.isAlive()) {
            console.log(this.name + " cannot act");
            return;
        }

        const manaCost = 15;
        const damage = 20;
        const extraManaDrain = 5;

        if (!this.spendMana(manaCost)) {
            console.log(this.name + " not enough mana ❄");
            return;
        }

        opponent.receiveDamage(damage);

        // تأثير إضافي بسيط
        opponent.spendMana(extraManaDrain);

        console.log(
            this.name + " casts ICE spell on " +
            opponent.name + " for " + damage +
            " damage and drains mana ❄"
        );
    }
}


class Duel {
    constructor(wizardA, wizardB) {
        this.wizardA = wizardA;
        this.wizardB = wizardB;
        this.roundNumber = 1;
    }

    printRoundStatus() {
        console.log(this.wizardA.getStatus());
        console.log(this.wizardB.getStatus());
    }

    run() {
        console.log("⚔ Duel begins!");
        this.printRoundStatus();

        while (this.wizardA.isAlive() && this.wizardB.isAlive()) {
            console.log("Round " + this.roundNumber);

            // Option A: A then B
            this.wizardA.castSpell(this.wizardB);

            if (!this.wizardB.isAlive()) break;

            this.wizardB.castSpell(this.wizardA);

            this.printRoundStatus();
            this.roundNumber++;
            console.log("----------------");
        }

        if (this.wizardA.isAlive()) {
            console.log("🏆 Winner: " + this.wizardA.name);
        } else {
            console.log("🏆 Winner: " + this.wizardB.name);
        }
    }
}


const wizard1 = new FireWizard("Azar", 100, 100);
const wizard2 = new IceWizard("Frost", 100, 100);

const duel = new Duel(wizard1, wizard2);
duel.run();
