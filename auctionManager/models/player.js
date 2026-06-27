class Player {

    constructor(id, name, age, role, basePrice, soldPrice = 0, isSold = false) {

        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = soldPrice;
        this.isSold = isSold;
        this.teamName = "";

    }

}

export default Player;