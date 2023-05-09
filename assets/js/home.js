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

const navBlog = document.getElementById("nav__blog");
const code = "BLOG";
const secretSE = new Audio("assets/audio/secret.wav");
secretSE.volume = 0.4;
let input = [];

window.onkeyup = (e)=>{
  let character;

  if(e.which){
    character = String.fromCharCode(e.which);
    input.push(character);
  }
  else return;

  for(let i=0; i<4; i++){
    if(input[i]!=undefined && input[i]!=code[i]){
      input = [];
      return;
    }
  }
  
  if(JSON.stringify(code.split("")) == JSON.stringify(input)){
    navBlog.style.display = "inline-block";
    secretSE.play();
  }

  if(input.length >= 4) input = [];

}