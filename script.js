//your JS code here. If required.
const para = document.getElementById("status");
const button = document.getElementById("enterBtn");
button.addEventListener("click", () => {
	para.innertext = "Entered Metaverse"
	para.style.fontWeight = "bold";
})
