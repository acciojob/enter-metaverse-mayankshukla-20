//your JS code here. If required.

const button = document.getElementById("enterBtn");
button.addEventListener("click", () => {
	const para = document.getElementById("status");
	para.innerText = "Entered Metaverse"
	para.style.fontWeight = "bold";
})
