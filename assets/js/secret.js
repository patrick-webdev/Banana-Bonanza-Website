const navBlog = document.getElementById("nav__blog");
const code = "BLOG";
const secretSE = new Audio("assets/audio/secret.wav");
secretSE.volume = 0.4;
let input = [];

console.log("This may be the only game developer website with a %cblog%c.", "font-weight: bold; text-decoration: underline;", "font-weight: normal;");

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