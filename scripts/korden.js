/*
preOpposedResult.weapon.properties.qualities.push("Impact")
skunner06/02/2020
would there not need to be a postOpposed as well?
Moo Man06/02/2020
well, there currently is: wfrp4e:opposedResult
<a class="item-property">Damaging</a>


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
	//console.log(defender);
	//console.log(defender.speaker.actor);
	var actor = game.actors.entities.find(i => i._id == defender.speaker.actor);
	//console.log(actor);
	//console.log(actor.prepareItems());
	var traits = actor.prepareItems().traits;
	for (trait of traits) {
		//console.log(trait.name);
		if (trait.name.toLowerCase().includes("daemonic")) return true;
	}

	return false;
//	return defender.speaker.alias.includes("Daemon"); // TO DO: Check for daemonic trait.
}