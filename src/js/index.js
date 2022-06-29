// window.onload = resolved()



function run() {
  var devImg = document.getElementById('devImg')
  console.log(devImg)
  let myAudio = document.querySelector('#audio')
  myAudio.play()
  devImg.classList.add('roll-out-left')
  var textLog = document.getElementById('text-log')
  console.log(textLog)
  textLog.textContent = 'You runaway from a Interview!'
}

function changeStackFront() {
  const existingElements = document.querySelectorAll('#orbit')
  if (existingElements.length > 2) {
    var devImg = document.getElementById('devImg')
    devImg.classList.add('puff-in-center')
    devImg.src = '/src/img/front-end.jpg'
    console.log(document.getElementsByClassName('remove'))
    // The length of your HTMLCollection changes when you remove an item. A way to do it is to use a while loop
    while (document.getElementsByClassName('remove').length > 0) {
      document.getElementsByClassName('remove')[0].remove()
    }
    document.getElementById('text-log').textContent =
      'You became a Front-End Developer! Try Attack!'
  } else {
    document.getElementById('text-log').textContent =
      'Study more to become a Dev!'
  }
}

function changeStackBack() {
  const existingElements = document.querySelectorAll('#orbit')
  if (existingElements.length > 2) {
    var devImg = document.getElementById('devImg')
    devImg.classList.add('puff-in-center')
    devImg.src = '/src/img/backend.jpg'
    console.log(document.getElementsByClassName('remove'))
    // The length of your HTMLCollection changes when you remove an item. A way to do it is to use a while loop
    while (document.getElementsByClassName('remove').length > 0) {
      document.getElementsByClassName('remove')[0].remove()
    }
    document.getElementById('text-log').textContent =
      'You became a Backend Developer'
  } else {
    document.getElementById('text-log').textContent =
      'Study more to become a Dev!'
  }
}

function changeStackFull() {
  const existingElements = document.querySelectorAll('#orbit')
  if (existingElements.length > 4) {
    var devImg = document.getElementById('devImg')
    devImg.classList.add('puff-in-center')
    devImg.src = '/src/img/full-stack (2).jpg'
    console.log(document.getElementsByClassName('remove'))
    // The length of your HTMLCollection changes when you remove an item. A way to do it is to use a while loop
    while (document.getElementsByClassName('remove').length > 0) {
      document.getElementsByClassName('remove')[0].remove()
    }
    document.getElementById('text-log').textContent =
      'You became a FullStack Developer! Finish him!'
  } else {
    document.getElementById('text-log').textContent =
      'Study more to become a FullStack Dev!'
  }
}

// function start() {
//   var randomN = Math.floor(Math.random() * 10) + 1
//   console.log(randomN)
//   if (randomN <= 3) {
//   }
// }
// start()
