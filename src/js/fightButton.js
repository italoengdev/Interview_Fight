function fight() {
  devImg = document.getElementById('devImg')
  srcImg = devImg.getAttribute('src')

  if (srcImg === '/src/img/front-end.jpg') {
    console.log('deu certo')
    var element = document.getElementById('myBar')
    element.classList.remove('w-100')
    myBar.style.width = '40%'
    if (myBar.style.width <= '50%') {
      element.classList.add('bg-warning')
    }
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'It was super effective!')
        )
      }, 0)
    })

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'However you did not get the Job yet')
        )
      }, 1500)
    })

    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'Study to become a FullStack Developer')
        )
      }, 3500)
    })

    async function logPromise1() {
      const result1 = await promise1
      return result1
    }

    async function logPromise2() {
      const result2 = await promise2
      console.log(result2)
    }

    async function logPromise3() {
      const result3 = await promise3
      console.log(result3)
    }
    logPromise1()
    logPromise2()
    logPromise3()
  } else if (srcImg === '/src/img/backend.jpg') {
    console.log('deu certo')
    var element = document.getElementById('myBar')
    element.classList.remove('w-100')
    myBar.style.width = '40%'
    if (myBar.style.width <= '50%') {
      element.classList.add('bg-warning')
    }
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'It was super effective!')
        )
      }, 0)
    })

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'However you did not get the Job yet')
        )
      }, 1500)
    })

    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'Study to become a FullStack Developer')
        )
      }, 3500)
    })

    async function logPromise1() {
      const result1 = await promise1
      return result1
    }

    async function logPromise2() {
      const result2 = await promise2
      console.log(result2)
    }

    async function logPromise3() {
      const result3 = await promise3
      console.log(result3)
    }
    logPromise1()
    logPromise2()
    logPromise3()
  } else if (srcImg === '/src/img/full-stack (2).jpg') {
    console.log('deu certo')
    var element = document.getElementById('myBar')
    element.classList.remove('w-100')
    myBar.style.width = '0%'
    if (myBar.style.width <= '50%') {
      element.classList.add('bg-warning')
    }
    if (myBar.style.width <= '25%') {
      element.classList.add('bg-danger')
    }
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent = 'Critical Hit!')
        )
      }, 0)
    })

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'The Job is yours!'),
          document.getElementById('enemyImg').classList.add('fade-out'),
          (document.getElementById('textDev').textContent =
            'FullStack Developer')
        )
      }, 2000)
    })

    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('enemyImg').src = 'src/img/handshaking.png'),
          document.getElementById('enemyImg').classList.add('shake-lr'),
          (document.getElementById('text-log').textContent =
            'Please come to human resources tomorrow!')
        )
      }, 4000)
    })

    const promise4 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          (document.getElementById('text-log').textContent =
            'Game-over! To play again, refresh the browser!')
        )
      }, 6000)
    })

    async function logPromise1() {
      const result1 = await promise1
      return result1
    }

    async function logPromise2() {
      const result2 = await promise2
      console.log(result2)
    }

    async function logPromise3() {
      const result3 = await promise3
      console.log(result3)
    }

    async function logPromise4() {
      const result4 = await promise4
      console.log(result4)
    }
    logPromise1()
    logPromise2()
    logPromise3()
    logPromise4()
  } else {
    document.getElementById('text-log').textContent =
      'You need to choose a stack before Attack!'
  }
}
