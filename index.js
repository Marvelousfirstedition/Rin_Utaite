const picArray=[
    {src: 'FOr9VNxVUAA96WB.jpg'}
];

let counter=0;

if(counter>picArray.length){
    document.getElementById('pics').src=picArray[counter].src;
    document.getElementById('pic-title').innerHTML=picArray[counter].title;
    counter++;
}else{
    document.getElementById('pics').src=picArray[0].src;
    document.getElementById('pic-title').innerHTML=picArray[0].title;
    counter=1;
}

let playingID=0;

function slideshow(){
    if(playingID==0){
        document.getElementById('playButton').innerHTML='STOP';
        playingID=setInterval(changePicture, 5000);
    }else{
        document.getElementById('playButton').innerHTML='START';
        clearInterval(playingID);
        playingID=0;
    }
}
