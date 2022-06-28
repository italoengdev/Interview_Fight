function html() {
  var devImg = document.getElementById('devImg')
  var sphere = document.createElement('div')
  sphere.style.backgroundImage = 'var(--html-bg-image)'
  sphere.setAttribute('id', 'orbit')
  sphere.classList.add('d-flex', 'align-self-center', 'mb-0')
  devImg.parentNode.insertBefore(sphere, devImg)
  // document.body.style.backgroundImage = "url('img_tree.png')"
  devHp = document.getElementById('devHp')
  HP = document.getElementById('devHp').style.width
  console.log(HP)
  const hit = parseFloat(HP) / 5
  console.log(hit)
  window.HPh = parseFloat(HP) - hit
  console.log(HPh)
  devHp.style.width = `${HPh}%`
}

function css() {
  var devImg = document.getElementById('devImg')
  var sphere = document.createElement('div')
  sphere.style.backgroundImage = 'var(--css-bg-image)'
  sphere.setAttribute('id', 'orbit')
  sphere.classList.add('d-flex', 'align-self-center', 'mb-0')
  devImg.parentNode.insertBefore(sphere, devImg)
  // document.body.style.backgroundImage = "url('img_tree.png')"
  devHp = document.getElementById('devHp')
  HP = document.getElementById('devHp').style.width
  console.log(HP)
  const hit = parseFloat(HP) / 5
  console.log(hit)
  window.HPh = parseFloat(HP) - hit
  console.log(HPh)
  devHp.style.width = `${HPh}%`
}

function js() {
  var devImg = document.getElementById('devImg')
  var sphere = document.createElement('div')
  sphere.style.backgroundImage = 'var(--js-bg-image)'
  sphere.setAttribute('id', 'orbit')
  sphere.classList.add('d-flex', 'align-self-center', 'mb-0', 'remove')
  devImg.parentNode.insertBefore(sphere, devImg)
  // document.body.style.backgroundImage = "url('img_tree.png')"
  devHp = document.getElementById('devHp')
  HP = document.getElementById('devHp').style.width
  console.log(HP)
  const hit = parseFloat(HP) / 5
  console.log(hit)
  window.HPh = parseFloat(HP) - hit
  console.log(HPh)
  devHp.style.width = `${HPh}%`
}
