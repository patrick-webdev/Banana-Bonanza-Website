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
  let newGreeting = greeting.innerHTML;
  while(newGreeting == greeting.innerHTML){
    newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  }
  greeting.innerHTML = newGreeting;
  greetingClick.currentTime = 0;
  greetingClick.play();
};

let product = document.getElementById("header__product");
let navBlog = document.getElementById("nav__blog");
product.onkeyup = ()=>{
  if(product.innerHTML.includes("blog")){
    navBlog.style.display = "inline-block";
  }
}