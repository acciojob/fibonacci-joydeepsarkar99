function fibonacci(num) {
	let a = 0
	let b = 1
	let c = 1
	if(num == 1){
		return 0
	}
	else if(num == 2 || num == 3){
		return 1
	}
	let i = 4
	while(i != num+1){
		let temp = c
		a = b
		b = temp
		c = a + b
		i++
	}
	return c
}

module.exports = fibonacci;
