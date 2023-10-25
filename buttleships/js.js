var location1 =3;
var location2 =4;
var location3 =5;

var guess;
var hits = 0;
var guesses =0;

var isSunk =false;

while (isSunk == false){
  guess = prompt("Are u ready to shoot?(enter a number from 0-6):");
  if(guess < 0 || guess > 6){
  	alert ("HEY!You have to enter a number from 0-6!");
}else{
	guesses = guesses + 1;
	if(guess == location1 || guess == location2 || guess == location3){
		hits = hits + 1;
		if(hits == 3){
			isSunk = true;
			alert("You win!");


		}

	}else{
		alert(" You missed :D");

	}
}

}
var status = "You shot" + guesses + "To get hit on the ship," + 
"It shows your level of accuracy:" + (3/guesses);
alert(status);


