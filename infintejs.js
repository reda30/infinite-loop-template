var nav = document.querySelectorAll("header  .first ul li"),
    header = document.querySelector("header .first "),
    headerli=document.querySelectorAll("header .first ul li"),
    arrow = document.querySelector("header .container .arrow img "),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2");
    

nav[0].onclick =function(){
    
    var y = window.scrollY, 
        animation = setInterval(function(){
            if( y > 0) {
                y-=10;
                window.scrollTo(0,y);
            }
            else {
                clearInterval(animation);
            }
            
        },2);
    
}

nav[1].onclick = function () {
    
    
    var y = window.scrollY,
        animation = setInterval(function(){
                           
                                 
    if(y < 900) {
        y += 10; 
        window.scrollTo(0,y);
        if(y > 900) {
            
            clearInterval(animation);
        }    
        }
        else {
                y -= 10; 
                 window.scrollTo(0,y);
              if(y <= 900) {
            
            clearInterval(animation);
        }    
                
            }
                                },2); 
   
    
    
}

nav[2].onclick = function () {
    
    "use strict"; 
    
    var y = window.scrollY,
        animation = setInterval(function(){
                           
                                 
    if(y < 1859) {
        y += 10; 
        window.scrollTo(0,y);
        if(y > 1859) {
            
            clearInterval(animation);
        }    
        }
        else {
             y -= 10; 
             window.scrollTo(0,y);
            if(y <=1859) {
            
                clearInterval(animation);
            }
        }
                                },2); 
   
        
    
}

nav[3].onclick = function () {
    
    "use strict"; 
    
    var y = window.scrollY,
        animation = setInterval(function(){
                           
                                 
    if(y < 2693) {
        y += 10; 
        window.scrollTo(0,y);
        if(y > 2693) {
            
            clearInterval(animation);
        }    
        }
        else{
            
            y -= 10; 
        window.scrollTo(0,y);
        if(y <=2693) {
            
            clearInterval(animation);
        } 
        }
                                },2);   
            
}


nav[4].onclick = function () {
    
    "use strict"; 
    
    var y = window.scrollY,
        animation = setInterval(function(){
                           
                                 
    if(y < 3503) {
        y += 10; 
        window.scrollTo(0,y);
        if(y > 3503) {
            
            clearInterval(animation);
        }    
        }
            
        else {
               y -= 10; 
               window.scrollTo(0,y);
            if(y <=3503) {
            
                clearInterval(animation);
        }      
            }
                                },2); 
   
    
    
}

/* the part of arrow */

arrow.onclick = function() {
    "use strict"; 
    var y = scrollY,
        animation=setInterval(function(){
            
            if(y<893){
                y+=7; 
                window.scrollTo(0,y);
                if(y>893){
                    clearInterval(animation);
                }
            }
        },4)
}
/* button to scroll */
btn1.onclick = function(){
    
    var y = scrollY,
        animation=setInterval(function(){
            
            if(y<1859){
                y+=7; 
                window.scrollTo(0,y);
                if(y>1859){
                    clearInterval(animation);
                }
            }
        },4)
}

btn2.onclick = function(){
    
    var y = scrollY,
        animation=setInterval(function(){
            
            if(y<1859){
                y+=7; 
                window.scrollTo(0,y);
                if(y>1859){
                    clearInterval(animation);
                }
            }
        },4)
}

//* second images */ 

var images2 = document.querySelectorAll(".fourth .container .images img");



var area = document.querySelector(".fourth");
// create an element with js  to put the image in it when i click on the image

var preview = document.createElement("img"); 
area.appendChild(preview);
preview.setAttribute("src","img/gallery-img-03.jpg");
preview.style.width="500px"; 
preview.style.height="650px";
preview.style.marginTop="-780px";
preview.style.marginLeft="35%";
preview.style.zIndex=2;
preview.style.transform="translateZ(150px)";
preview.style.display="none	";

//////

//  create variable to close the image 
var close = document.createElement("span");
close.innerHTML="x";
area.appendChild(close);
close.style.transform="translateZ(100px)";
close.style.display="none";

    // for loop to put any image i click on on the div above that i created by js
  for (var i = 0 ; i<images2.length;i++ ){
      
            images2[i].onclick = function () {
            preview.src=this.src;
            preview.style.display="block";
            close.style.display="block";
            close.style.position="relative";
            close.style.top="-600px";
            close.style.left="1000px";
            close.style.fontSize="30px";
            close.style.cursor="pointer";
            close.style.color="#FFF";
            document.body.style.backgroundColor="#AD9DAD";
            window.scrollTo(0,2618);
           

           
       }
  }
// to close the images in fourth section 
close.onclick = function(){
    
     preview.style.display="none";
      close.style.display="none";
     document.body.style.background="none";

}
// create a navbar 

window.onscroll = function(){
    
    "use strict"; 
    var y= window.scrollY;
    
    if ( y > 100) {
        header.style.position="fixed"; 
        header.style.top="0";
        header.style.width="100%";
        header.style.backgroundColor="#FFF"; 
        header.style.height="70px";
        header.style.color="#325831";
        header.style.zIndex="5";
        
  
    }
    else {
        
        
        header.style.position="static"; 
        header.style.width="100%";
        header.style.background="none"; 
        header.style.height="0px";
        header.style.color="#fff";
    }
}

////
var move =document.querySelectorAll(".third .container .points span"),
    imgs = document.querySelectorAll(".third .container .image img"),
    content = document.querySelectorAll(".third .container .content"),
       box= document.querySelectorAll(".third .container .image");

move[0].onclick = function(){
    
    box[0].style.display="inline-block";
    box[1].style.display="inline-block";
    box[2].style.display="inline-block";

    box[3].style.display="none"; 
    box[4].style.display="none"; 
    this.style.backgroundColor="#FFF";
    move[1].style.backgroundColor="#bbb";    
    move[2].style.backgroundColor="#bbb";    




    
    
}   
move[0].onclick=function() {
    

    box[0].style.animation="animate4 0.5s 1 ease-in-out forwards";
    box[1].style.animation="animate4 0.5s 1 ease-in-out forwards";
    box[2].style.animation="animate4 0.5s 1 ease-in-out forwards";
    box[3].style.animation="animate4 0.5s 1 ease-in-out forwards";
    box[4].style.animation="animate4 0.5s 1 ease-in-out forwards";



    
    
    
this.style.backgroundColor="#FFF";
move[1].style.backgroundColor="#BBB";
move[2].style.backgroundColor="#BBB";
}


move[1].onclick=function() {
    
box[0].style.animation="animate 0.5s 1 ease-in-out forwards";
box[1].style.animation="animate2 0.5s 1 ease-in-out forwards";
box[2].style.animation="animate2 0.5s 1 ease-in-out forwards";
box[3].style.animation="animate2 0.5s 1 ease-in-out forwards";
box[4].style.animation="animate2 0.5s 1 ease-in-out forwards";

    
box[3].style.display="inline-block";
this.style.backgroundColor="#FFF";
move[0].style.backgroundColor="#BBB";
move[2].style.backgroundColor="#BBB";


 

}

    
move[2].onclick=function() {
    
box[0].style.animation="animate 0.5s  1 ease-in-out forwards";
box[1].style.animation="animate 0.5s  1 ease-in-out forwards";
box[2].style.animation="animate3 0.5s 1 ease-in-out forwards";
box[3].style.animation="animate3 0.5s 1 ease-in-out forwards";
box[4].style.animation="animate3 0.5s 1 ease-in-out forwards";
    
box[4].style.display="inline-block";
this.style.backgroundColor="#FFF";
move[0].style.backgroundColor="#BBB";
move[1].style.backgroundColor="#BBB";


}






