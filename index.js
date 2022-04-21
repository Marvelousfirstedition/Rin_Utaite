var imgList=[
    "S__60014602_0.jpg",
    "S__60014604_0.jpg",
    ""
];

for(var i=0; i<imgList.length; i++){
    var slide=document.createElement("li");
    slide.innerHTML="<img src='"+imgList[i]+"'>";
    document.getElementsByClassName("slider-inner")[0].appendChild(slide);
    var nav =document.createElement("li");
    nav.setAttribute("data-nav-index", i);
    document.getElementsByClassName("nav")[0].appendChild(nav);
}

var length=imgList.length -1;
var imageSlide=document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
var dotNavigation=document.getElementsByClassName("nav")[0].getElementsByTagName("li");
var nowIndex=0;
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");
