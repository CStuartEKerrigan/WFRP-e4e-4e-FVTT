/*

Script to facilitate extra traits for Korden's Hammer. Currently a chat card separately appears reminding you about these additional traits if you attack an actor called Daemon.

*/

console.log("Eye for an Eye Script Loaded");

 Hooks.on("wfrp4e:preOpposedTestResult", (attacker, defender) => {
	 
	 if (attacker.testResult.weapon.name == "Korden's Hammer" && isDemon(defender)){
		let chatData = {
			user : game.user._id,
			content : "<img style=\"float: left; padding-right: 5px; border: 0\" src=\"modules/wfrp4e-e4e/assets/images/icons/kordenshammer.png\" alt=\"Hammer\"><p>Korden's hammer is engraved with runes to ward off daemons. Against a foe such as this it also counts as having the <strong><a class=\"item-property\">Damaging</a></strong> and <strong><a class=\"item-property\">Penetrating</a></strong> Qualities</p>"
		};
		ChatMessage.create(chatData,{});
	 }
	 
 })

function isDemon(defender){
	console.log(defender);
	console.log(defender.actor);
	return defender.speaker.alias.includes("Daemon"); // TO DO: Check for daemonic trait.
}