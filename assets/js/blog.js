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