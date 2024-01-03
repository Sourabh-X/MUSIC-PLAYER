let Progress = document.getElementById("Progress");
let Song = document.getElementById("Song");
let Ctrlicon = document.getElementById("Ctrlicon");

Song.onloadmetadata = function(){
    Progress.max = Song.duration;
    Progress.value = Song.currentTime;
}

function playPause(){
    if(Ctrlicon.classList.contains("fa-pause")){
        Song.pause();
        Ctrlicon.classList.remove("fa-pause");
        Ctrlicon.classList.add("fa-play");
    }
    else{
        Song.play();
        Ctrlicon.classList.add("fa-pause");
        Ctrlicon.classList.remove("fa-play");
    }
}

if(Song.play()){
    setInterval(()=>{
        Progress.value = Song.currentTime;
    },500);
}

Progress.onchange = function(){
    Song.play();
    Song.currentTime = Progress.value; 
    Ctrlicon.classList.add("fa-pause");
    Ctrlicon.classList.remove("fa-play");
}
