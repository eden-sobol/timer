class Timer {
	constructor(id, time, finishCode, unit) {
		this.time = time
		this.finishCode = finishCode
		this.id = id
		this.unit = unit
	}
	show() {
		const timer = document.createElement("p")
		const node = document.createTextNode(this.time)
		timer.appendChild(node)
		timer.id = this.id
		
		document.body.appendChild(timer)
	}
	hide() {
		document.getElementById(this.id).remove()
	}
	run() {
		let delay = this.time
		let count = 1000
		const code = this.finishCode
		
		if (this.unit == "s") {}
		if (this.unit == "ms") {
			delay *= 100
			count /= 100
		}
		
		const counter = setInterval(function(){
			const element =  document.getElementById(this.id);
			if (typeof(element) != 'undefined' && element != null)
			{
				document.getElementById(this.id).innerHTML = delay
			}
			console.log(delay)
			delay -= 1
			if (delay < 0) {
				setTimeout(code, 1)
				clearInterval(counter)
			}
		}, count)
	}
}