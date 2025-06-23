let show = ()=>{
    let name = document.getElementById("name").value;
    document.getElementById("display").innerHTML = "Wish you a very happy diwali " + name + "!";
    document.getElementById("img").src="./images/final.gif";
    document.getElementById("content").innerHTML = "The light of lights, the self-luminous inner light of the Self is ever shining steadily in the chamber of your heart. Enjoy the real Deepavali, by attaining illumination of the soul.";
    document.getElementById("dis").style.color = "white";

}
document.getElementById("btn").addEventListener("click",show);