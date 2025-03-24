//function for the screeen width
window.onresize = screensize;
window.onload = screensize;
function screensize(){
    Width = window.innerWidth;
    document.getElementById("size").innerHTML = "Width:"+Width+"px";
}