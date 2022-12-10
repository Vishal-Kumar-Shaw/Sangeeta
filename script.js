console.log("Welcome")

// initialise the variable
let songsongIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = getElementsByClassName('masterSongName');

let songs = [
    {songname: "Salam e ishq 1", filePath: "songs/1.mp3", coverPath:"images/1.jpg" },
    {songname: "Salam e ishq 2", filePath: "songs/2.mp3", coverPath:"images/2.jpg" },
    {songname: "Salam e ishq 3", filePath: "songs/3.mp3", coverPath:"images/3.jpg" },
    {songname: "Salam e ishq 4", filePath: "songs/4.mp3", coverPath:"images/4.jpg" },
    {songname: "Salam e ishq 5", filePath: "songs/5.mp3", coverPath:"images/5.jpg" },
    {songname: "Salam e ishq 6", filePath: "songs/6.mp3", coverPath:"images/6.jpg" },
    {songname: "Salam e ishq 7", filePath: "songs/7.mp3", coverPath:"images/7.jpg" },
    {songname: "Salam e ishq 8", filePath: "songs/8.mp3", coverPath:"images/8.jpg" },
    {songname: "Salam e ishq 9", filePath: "songs/9.mp3", coverPath:"images/9.jpg" },
    {songname: "Salam e ishq 10",filePath: "songs/10.mp3",coverPath:"images/10.jpg"},
];

// songItem.forEach((element, i)=>{
//     // console.log(element,i);
//     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
//     element.getElementsByClassName('songName')[0].innerText = songs[i].songname;
// });

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// update seekbar
audioElement.addEventListener('timeupdate', ()=>{
    console.log('Timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;

        audioElement.currentTime=0
        audioElement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    })    

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;

    audioElement.currentTime=0
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex==9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime=0
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
})
