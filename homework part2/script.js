//function for the screeen width
window.onresize = screensize;
window.onload = screensize;
function screensize(){
    width = window.innerWidth;
    document.getElementById("size").innerHTML = "Width:"+width+"px";
    let textchange=document.getElementById("textchange")
    if (width < 576){
        textchange.innerHTML= "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria"
    }
    else if (width >= 576 && width<768){
        textchange.innerHTML="Natasha Romanoff, known as Black Widow, was a Russian spy trained in the Red Room, a KGB academy, and later became a founding member of the Avengers. ";
    }
    else if (width >= 768 && width<992){
        textchange.innerHTML= "Captain America's backstory centers around Steve Rogers, a frail man rejected for military service in WWII, who becomes a super-soldier after receiving the Super-Soldier Serum.";
    }
    else if (width>=992 && width<1920){
        textchange.innerHTML= "Bruce Banner, a brilliant nuclear physicist and biochemist, became the Hulk after being exposed to gamma radiation during an experiment.";
    }
    image(width);
}
function image(width){
    let existingImg = document.getElementById("marvelImg");
    if(!existingImg){
        existingImg = document.createElement("img");
        existingImg.id = "marvelImg";
        existingImg.alt = "marvelImg";
        existingImg.style.width = "100%";
        existingImg.style.maxWidth = "500px";
        document.querySelector(".container").appendChild(existingImg);

    }
    if(width < 576){
        existingImg.src = "images/ironman.webp";
    }
    else if(width >= 576 && width<768){
        existingImg.src = "images/blackwidow.jpg";
    }
    else if(width >= 768 && width<992){
        existingImg.src = "images/captainamerica.jpg";
    }
    else if(width >= 992 && width<1920){
        existingImg.src = "images/hulk.jpg";

    }
    else{
        existingImg.src = "images/marvel.jpg"
    }
}