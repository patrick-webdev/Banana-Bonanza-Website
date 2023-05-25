window.onload = ()=>{
  codeHandler();
  removeFileExtensionsFromNav();
  changeGreeting();
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