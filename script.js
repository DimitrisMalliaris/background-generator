const css = document.querySelector(".css");
const colors = document.querySelectorAll(".color");
const degree = document.querySelector(".degree");
const body = document.getElementById("gradient");
const button = document.querySelector("button");
const container = document.querySelector(".colors");
const random = document.querySelector(".random");
const numOfColors = 2;


colors[0].addEventListener("input", setGradient)
colors[1].addEventListener("input", setGradient)
degree.addEventListener("input", setGradient)

button.addEventListener("click", function(){
	numOfColors++;

	let label = document.createElement("label");
	label.setAttribute("for", "color" + numOfColors);
	label.textContent = "Color " 
	+ numOfColors 
	+ ":";
	if(numOfColors < 10){
		label.textContent += " ";
	}
	container.appendChild(label);

	let newColor =  document.createElement("input");
	newColor.setAttribute("type", "color");
	newColor.setAttribute("name", "color" + numOfColors);
	newColor.setAttribute("class", "color");
	newColor.addEventListener("input", setGradient);
	container.appendChild(newColor);
	colors = document.querySelectorAll(".color");

	container.appendChild(document.createElement("br"));

	setGradient();
})

random.addEventListener("click", function(){
	colors.forEach(color => {
		color.value = getRandomColor();
	})
	degree.value = Math.floor(Math.random() * Math.floor(365));
	setGradient();
})

function getRandomColor(){
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setGradient(){
	if( degree.value === undefined || degree.value === "") { 
		degree.value = 0; 
	}
	let backgroundStyle = "linear-gradient("
	+ degree.value 
	+"deg, "  

	colors.forEach(color => {
		backgroundStyle += color.value;
		backgroundStyle += ", "
	})

	backgroundStyle = backgroundStyle.slice(0,-2);

	backgroundStyle += ") no-repeat";

	body.style.background = backgroundStyle;
	css.textContent = body.style.background + ";";
}

setGradient();