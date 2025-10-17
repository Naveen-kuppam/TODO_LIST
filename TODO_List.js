let input=document.getElementById("input")
let btn=document.getElementById("btn")
let ul=document.getElementById("ul")

btn.addEventListener("click",function(){
	let li=document.createElement("li")
	let btn1=document.createElement("button")
	let btn2=document.createElement("button")
	ul.appendChild(li)

	li.innerText=input.value

	li.appendChild(btn1)
	li.appendChild(btn2)
	btn1.innerText="Accept"
	btn2.innerText="Delete"
	btn1.addEventListener("click",function(){
		li.style.color="red"
	})
	btn2.addEventListener("click",function() {
		li.style.display="none"
	})

	input.value="  "

})