window.onload = ()=>{
  console.log("This may be the only game developer website with a %cblog%c.", "font-weight: bold", "font-weight: normal;");  
  checkTypedWord();
  removeFileExtensionsFromNav();
  changeGreeting();

  let video = "";
  song404(video);
  if(document.getElementById("shuffle--404")) document.getElementById("shuffle--404").addEventListener("click", song404);
}

function checkTypedWord() {
  const encryptedCodes = ["QkxPRw==", "NDA0"];
  const codes = encryptedCodes.map(code => atob(code));
  let typedWord = "";

  document.addEventListener("keydown", function(event) {
    const keyPressed = event.key.toUpperCase();
    typedWord += keyPressed;

    const matchingCode = codes.find(code => code.startsWith(typedWord));

    if (!matchingCode) {
      typedWord = ""; // Reset typedWord if the typed characters do not match any code
    } else if (typedWord === matchingCode) {
       switch(typedWord){
        case codes[0]:
          playSound("zelda");
          console.log("Oh, there it is!\n ▲\n▲ ▲");
          const navBlog = document.getElementById("nav__blog");
          navBlog.style.display = "inline-block";
          break;
        case codes[1]:
          if(!window.location.host) location.href = "404.html";
          else location.href = "404";
          break;
      }

      typedWord = ""; // Reset typedWord after successfully typing a word
    }
  });
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
  
  greeting.onclick = ()=>{
    let newGreeting = greeting.innerHTML;
    while(newGreeting == greeting.innerHTML){
      newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    }
    greeting.innerHTML = newGreeting;
    playSound("beep");
  }
}

function playSound(sound){
  let SE = '';
  switch(sound){
    case "beep":
      SE = new Audio("assets/audio/button.wav");
      break;
    case "zelda":
      SE = new Audio("assets/audio/secret.wav");
      SE.volume = 0.4;
      break;
  }
  SE.currentTime = 0;
  SE.play();
  
}

function song404(video){
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
  playSound("beep");
}