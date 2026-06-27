import fs from "fs";

import Batsman from "./models/batsman.js";
import Bowler from "./models/bowler.js";
import AllRounder from "./models/allrounder.js";
import Team from "./models/team.js";
import Auction from "./utils/auction.js";

const data = JSON.parse(fs.readFileSync("./testdata.json"));

const players = [];

data.forEach(player => {

    switch(player.role){

        case "Batsman":
            players.push(new Batsman(player));
            break;

        case "Bowler":
            players.push(new Bowler(player));
            break;

        case "AllRounder":
            players.push(new AllRounder(player));
            break;
    }

});

const team1 = new Team("CSK");
const team2 = new Team("MI");

Auction.conductAuction(players, team1, team2);

Auction.printAuction(players);