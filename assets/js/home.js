let greeting = document.getElementById("header__greeting");
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
let greetingClick = new Audio("assets/audio/button.wav");


greeting.onclick = ()=>{
    let newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.innerHTML = newGreeting;
    greetingClick.currentTime = 0;
    greetingClick.play();
};
