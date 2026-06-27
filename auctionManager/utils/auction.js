class Auction {

    static conductAuction(players, team1, team2) {

        players.forEach((player, index) => {

            // Age validation
            if (player.age <= 18) {
                console.log(`${player.name} is not eligible for auction.`);
                return;
            }

            // Convert name to uppercase
            player.name = player.name.toUpperCase();

            // Auction price based on role
            switch (player.role) {

                case "Batsman":
                    player.soldPrice = player.basePrice + 40;
                    break;

                case "Bowler":
                    player.soldPrice = player.basePrice + 60;
                    break;

                case "AllRounder":
                    player.soldPrice = player.basePrice + 80;
                    break;

                default:
                    player.soldPrice = player.basePrice;
            }

            // Mark player as sold
            player.isSold = true;

            // Assign team
            if (index < 5) {
                player.teamName = team1.teamName;
                team1.addPlayer(player);
            } else {
                player.teamName = team2.teamName;
                team2.addPlayer(player);
            }
        });
    }

    static printAuction(players) {

        console.log("\n========== AUCTION RESULT ==========\n");

        players.forEach(player => {

            console.log(
                `ID          : ${player.id}
Name        : ${player.name}
Role        : ${player.role}
Age         : ${player.age}
Base Price  : ${player.basePrice}
Sold Price  : ${player.soldPrice}
Sold        : ${player.isSold}
Team        : ${player.teamName}
--------------------------------------`
            );

        });
    }
}

export default Auction;