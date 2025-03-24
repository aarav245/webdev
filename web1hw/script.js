//function for the screeen width
window.onresize = screensize;
window.onload = screensize;
function screensize(){
    Width = window.innerWidth;
    document.getElementById("size").innerHTML = "Width:"+Width+"px";
    let textchange=document.getElementById("textchange")
    if (Width < 576){
        textchange.innerHTML= "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria"
    }
    else if (Width >= 576 && Width<768){
        textchange.innerHTML="Natasha Romanoff, known as Black Widow, was a Russian spy trained in the Red Room, a KGB academy, and later became a founding member of the Avengers. ";
    }
    else if (Width >= 768 && Width<992){
        textchange.innerHTML= "Captain America's backstory centers around Steve Rogers, a frail man rejected for military service in WWII, who becomes a super-soldier after receiving the Super-Soldier Serum.";
    }
    else if (Width>=992 && Width<1920){
        textchange.innerHTML= "Bruce Banner, a brilliant nuclear physicist and biochemist, became the Hulk after being exposed to gamma radiation during an experiment.";
    }
}
