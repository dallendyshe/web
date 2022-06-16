let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


var i =0;
    var foto=[];
    var koha=3000;

    foto[0]="image/slide.jpg" ;
    foto[1]="image/english.webp" ;
    foto[2]="image/slide.jpg" ; 
    foto[3]="image/html.jpeg" ;
    foto[4]="image/teaching.jpeg" ;
    foto[5]="image/java.png" ;
    foto[6]="image/italian.webp" ;
    foto[7]="image/german.jpg" ;
function slideshow(){
document.getElementById('slide').src=foto[i];
if (i < foto.length - 1) { i++ ;
    
} else { i = 0 ;
    
}
setTimeout("slideshow()" , koha);
 }
window.onload= slideshow;