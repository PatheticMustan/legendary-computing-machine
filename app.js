const primes = [2n, 3n]
const possiblePrimesIncrement = 30n
let cycles = prompt("Cycles.")

/*for (let i=0; i<100; i++) {
	possible
}*/

let possiblePrimes = [5n, 7n, 11n, 13n, 17n, 19n, 23n, 25n, 29n, 31n]

while (cycles-- != 0) {
	for (let num of possiblePrimes) {
		let primeBool = true
		for (let checkPrimeNum of primes) {
			if (num % checkPrimeNum === 0) {
				primeBool = false
				break
			}
		}
		if (primeBool) {
			primes.push(num)
	    }
	}
	
	possiblePrimes = possiblePrimes.map(i => i + possiblePrimesIncrement)
	console.log(possiblePrimes)
}
console.log(primes)
