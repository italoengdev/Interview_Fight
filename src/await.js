// anatomia de uma promise

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(
      document.getElementById('enemyImg').src = '/src/img/businessman-profession-cartoon-by-Vexels.png',
      document.getElementById('enemyImg').classList.add('slide-in-left')
    );
	}, 1000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(
      document.getElementById('text-log').textContent="CTO choose a random Tech Recuiter"
    );
	}, 4000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(
      document.getElementById('enemyImg').classList.add('fade-out')
    );
	}, 5000);
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(
      document.getElementById('enemyImg').classList.remove('fade-out'),
      document.getElementById('enemyImg').classList.remove('slide-in-left'),
      document.getElementById('enemyImg').classList.add('scale-in-center'),
      document.getElementById('enemyImg').src = 'src/img/tech-recruiter.jpg'
    );
	}, 5500);
});

const promise5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(
      document.getElementById('text-log').textContent="Find out which Stack he wants..."
    );
	}, 6000);
});

async function logPromise1() {
	const result1 = await promise1;
	return result1
}

async function logPromise2() {
	const result2 = await promise2;
	console.log(result2);
}

async function logPromise3() {
	const result3 = await promise3;
	console.log(result3);
}

async function logPromise4() {
	const result4 = await promise4;
	console.log(result4);
}

async function logPromise5() {
	const result5 = await promise5;
	console.log(result5);
}
logPromise1();
logPromise2();
logPromise3();
logPromise4();
logPromise5();