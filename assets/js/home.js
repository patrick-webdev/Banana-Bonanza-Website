const greeting = document.getElementById("header__greeting");
const greetings = [
  "Hello",
  "Hey",
  "Greetings",
  "Salutations",
  "Howdy",
  "Yo",
  "What's up",
  "How's it going",
  "Enjoy your stay",
  "Welcome",
  "Hey there"
];
const greetingSE = new Audio("assets/audio/button.wav");

greeting.onclick = ()=>{
  let newGreeting = greeting.innerHTML;
  while(newGreeting == greeting.innerHTML){
    newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  }
  greeting.innerHTML = newGreeting;
  greetingSE.currentTime = 0;
  greetingSE.play();
};