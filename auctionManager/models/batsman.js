import Player from "./player.js";

class Batsman extends Player {

    constructor(player) {

        super(
            player.id,
            player.name,
            player.age,
            player.role,
            player.basePrice,
            player.soldPrice,
            player.isSold
        );

    }

}

export default Batsman;