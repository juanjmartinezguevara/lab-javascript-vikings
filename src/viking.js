// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    // attack() {
    //     return this.strength
    // }
        //Q: Is it best practice to write these again or no?
        //A: Nope, it's inherited so you can just leave it without.

    receiveDamage(damage) {
        // this.health -= damage //Not necessary since included in parent
        super.receiveDamage(damage)
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }  
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }

    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }

    vikingAttack() {
        let luckySoldier = getRandomInt(this.vikingArmy.length)
        let unluckySoldier = getRandomInt(this.saxonArmy.length)
        this.saxonArmy[unluckySoldier].receiveDamage(this.vikingArmy[luckySoldier].strength)

        if (this.saxonArmy[unluckySoldier].health<=0) {
            this.saxonArmy.splice(unluckySoldier, 1)
            return 'A Saxon has died in combat'
        } else {
            return `A Saxon has received ${this.vikingArmy[luckySoldier].strength} of damage!`
        }
    }

    saxonAttack() {
        let luckySoldier = getRandomInt(this.saxonArmy.length)
        let unluckySoldier = getRandomInt(this.vikingArmy.length)
        this.vikingArmy[unluckySoldier].receiveDamage(this.saxonArmy[luckySoldier].strength)

        if (this.vikingArmy[unluckySoldier].health<=0) {
            this.vikingArmy.splice(unluckySoldier, 1)
            return 'A Viking has fallen'
        } else {
            return `${this.vikingArmy[unluckySoldier].name} has received ${this.saxonArmy[luckySoldier].strength} points of damage`
        }
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

function getRandomInt (max) {
    return Math.floor(Math.random()*Math.floor(max))
}
