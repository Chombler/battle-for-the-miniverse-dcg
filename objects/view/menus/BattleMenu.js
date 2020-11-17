
/*
 * Main Menu Class
 * Has Hierarchal structure as shown below
 * 
 * Main menu
 * -Battle
 * --Waiting Room
 * ---Game (returns to Battle on completion)
 * -Choose deck
 * --Edit Deck
 */

const Button = require('../buttons/Button.js');

const back_request = {
	type : "Menu",
	destination : "Main",
	queue_side : null
}

const alien_battle_request = {
	type : "Queue",
	destination : "Queue",
	queue_side : "Alien"
}

const bug_battle_request = {
	type : "Queue",
	destination : "Queue",
	queue_side : "Bug"
}

const Back = new Button('Black', 0, 0, 100, 100, 'White', 'Back', 45, 45, back_request);
const BattleAsAlien = new Button('Purple', 150, 400, 200, 200, 'Black', 'Battle As Alien', 200, 500, alien_battle_request);
const BattleAsBug = new Button('Blue', 550, 400, 200, 200, 'Black', 'Battle As Bug', 600, 500, bug_battle_request);

class BattleMenu{
	constructor(){
		this.buttons = [Back, BattleAsAlien, BattleAsBug];
	}

	checkClick(cursor){
		for(let button of this.buttons){
			if(cursor.isWithin(button)){
				return(button.onClick());
			}
		}
		return(null);
	}

}

module.exports = BattleMenu;