window.onload = ()=>{  
  codeHandler();
  removeFileExtensionsFromNav();
  changeGreeting();

  let video = "";
  song404(video);
  document.getElementById("shuffle--404").addEventListener("click", song404);
}

function codeHandler(){
  const navBlog = document.getElementById("nav__blog");
  const code = "BLOG";
  const secretSE = new Audio("assets/audio/secret.wav");
  secretSE.volume = 0.4;
  let input = [];

  console.log("This may be the only game developer website with a %cblog%c.", "font-weight: bold", "font-weight: normal;");

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
    
    if(JSON.stringify(code.split("")) == JSON.stringify(input) && navBlog.style.display != "inline-block"){
      navBlog.style.display = "inline-block";
      secretSE.play();
      console.log("Oh, there it is!\n ▲\n▲ ▲");
    }

    if(input.length >= 4) input = [];

  }
}

function removeFileExtensionsFromNav(){
  if(!window.location.host) return;

  const nav = document.getElementsByTagName("nav")[0];

  for(child of nav.children){
    let link = child.getAttribute("href");
    let destination = link.substring(0, link.length-5);
    child.setAttribute("href", destination);
  }
}

function changeGreeting(){
  const greeting = document.getElementById("header__greeting");
  if(!greeting) return;
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
  }
}

function song404(video){
  console.log("song");
  const iframe = document.getElementById("video--404");
  if(!iframe) return;

  const songs = [
    "_pKg0395nTE", //Yume Nikki - Snow World
    "h1wSPmlZV-w", //Undertale - Determination
    "LsAsJUTsYxs", //To the Moon - Main Theme
    "wKKX5phpRo4", //A Short Hike - Hello?
    "8NH0wfHHmvU", //VVVVVV - Predestined Fate
    "HDIVH5Go9-Y", //Owlboy - Mesos
    "8w7Jql2a-eE", //OneShot - Children of the Ruins
    "n_Dxix0lvDM", //OMORI - Trees...
    "jTw8T3ksSUQ", //Momodora Reverie Under the Moonlight - Overture
    "f9TpaJKZIPI", //Momodora II - Title
    "WGHLk334_Zo", //Momodora III - Ending
    "XWVONhQ9JwM", //Lieat - Lamp
    "w3bQzPWD1_w", //Iconoclast - Perished
    "Zb9gZ-5z3kU", //Dweller's Empty Path - Leaves Fill The Path
    "QIHUK68L9qQ", //Doki Doki Literature Club - I Still Love You
    "uivFFnCI8tM", //DELTARUNE - BIG SHOT
    "mK4v0XkNrVE", //Cave Story - Pulse
    "VNUGl6DqRWc", //A Bird Story - Yesterday (Reversing)
    "KmC9ehs53EU" //The Beginner's Guide - Be in This Place
  ];
  const src = "https://www.youtube-nocookie.com/embed/";
  
  let oldVideo = "";
  if (video) oldVideo = video;

  do{
    video = songs[Math.floor(Math.random() * songs.length)];
  } while(video == oldVideo);
  
  iframe.setAttribute("src", src + video);
}