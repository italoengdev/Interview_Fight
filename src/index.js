// window.onload= functionName();

function effects() {
  var imgBoss = document.getElementById()
}

// function FindIt(image, id){
//   var t = setTimeout('sound()',10);
//   var b = setTimeout('bigger(' + image + ')',30);
//   var h = setTimeout('hide(' + image + ')',1500);
//   }

//   function FindIt(image, id){
//     sound();
//     bigger(image);
//     hide(image);
//     }

//     function sound(){
//     document.getElementById("sound_element").innerHTML= "<embed src='chime.wav' hidden=true    autostart=true loop=false>";
//     }

//     function bigger(image){
//     var img = document.getElementById(image);
//     img.style.width = 112;
//     img.style.height = 112;
//     }

//     function hide(id){
//     var ms = 2000;
//     ms += new Date().getTime();
//     while (new Date() < ms){} //Create a 2 second delay
//     var img = document.getElementById(id);
//     img.style.visibility='hidden';
//     }

function clickStudy() {
  var textLog = document.getElementById('text-log')
  console.log(textLog)
  textLog.textContent = "You missed the turn, You don't have time to study!"
}

function move() {
  var element = document.getElementById('myBar')
  element.classList.remove('w-100')
  var a = '100%'
  myBar.style.width = '60%'
  if (myBar.style.width <= '50%') {
    element.classList.add('bg-warning')
  }
}

function run() {
  var devImg = document.getElementById('devImg')
  console.log(devImg)
  let myAudio = document.querySelector('#audio')
  myAudio.play()
  devImg.classList.add('roll-out-left')
  var textLog = document.getElementById('text-log')
  console.log(textLog)
  textLog.textContent = "You runaway from a Interview!"
}
