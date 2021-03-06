var messageEle = document.body.querySelector(".message");
var user = 5
var dragonhealth = 10

while(user > 0 && dragonhealth > 0){
var dragon = Number(prompt("How many times do you want to hit the dragon?"));
damage = Math.floor(Math.random() * dragon) + 1;
  
if(damage > 5){
  dragonhealth = dragonhealth - 1;
  }else{
  dragonhealth = dragonhealth - damage;
}

if(dragonhealth > 0){
  dragdamage = Math.floor(Math.random() * 2) + 1;
  user = user - dragdamage;
}

if(user<=0){
  messageEle.innerHTML = "Dragon Damage: 5 <br> User Damage: " +(10-dragonhealth)+ " <br>User Loses!"}

if(dragonhealth<=0){
  messageEle.innerHTML = "Dragon Damage: " +(5-user)+ "<br> User Damage: 10 <br>User Wins!"}
}