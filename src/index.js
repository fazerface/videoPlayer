"use strict";

let video = document.querySelector('#video');
let play = document.querySelector('.play');
let prev = document.querySelector('.prev');
let back = document.querySelector('.back');
let time = document.querySelector(".timeline");  
let videoVolume = document.querySelector(".volume");  
let fullScreen = document.querySelector(".fullScreen");  
let download = document.querySelector(".download");
let videoHeight = 0;
let videoTime = 0;
let videoPlay;

function load(){

    videoVolume.value = 1;

    play.addEventListener('click', () => {
        if(video.paused){
            video.play();
            videoPlay = setInterval(() => {
                if(videoTime >= videoHeight) time.value = 0;
                videoTime = Math.round(video.currentTime)
                time.max = Math.round(video.duration);
                time.value = videoTime;
            }, 100)
        }else{
            video.pause();
            clearInterval(videoPlay)
        };
    });

    videoVolume.addEventListener('input', (e) => {
        video.volume = +e.target.value
    })

    time.addEventListener('input', (e) => {
        time.max = Math.round(video.duration);
        video.currentTime = +e.target.value
    })

    download.addEventListener('click', () => {
        download.setAttribute('href', video.children[0].src);
    });

    fullScreen.addEventListener('click', () => {
        video.requestFullscreen();
    });
    
    prev.addEventListener('click', () => {
        video.currentTime += 5;
    });
    
    back.addEventListener('click', () => {
        video.currentTime -= 5;
    });
};

load();

