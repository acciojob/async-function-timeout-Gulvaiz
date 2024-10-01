//your JS code here. If required.
let output = document.getElementById("output");
let btn = document.getElementById("btn")

btn.addEventListener("click", delayText)

async function delayText(){
	let delay = document.getElementById("delay").value
let text = document.getElementById("text").value
	
       await new Promise((resolve, reject) => {
               setTimeout( resolve ,delay)
       })

	output.textContent = text
}