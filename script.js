b=1

function sidebar(){
  ul=document.getElementById("ul")
  if(b%2!=0){
  ul.style.top="0vh";
  b=b+1;
  }
  else{
    ul.style.top="-40vh";
    b=b+1;
  }
}





// Get the parent element (in this case, a div)
let parentDiv = document.getElementById('main2');

// Create a new <p> element
let newParagraph = document.createElement('div');
let newParagraph2 = document.createElement('div');


newParagraph.innerHTML = '<h3 id="c2">OFF-ROAD parts</h3> <p id="d2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit cumque praesentium nesciunt officiis, obcaecati cum vel adipisci dolor, nihil ipsa perspiciatis? Numquam ex sint quo placeat voluptates quae! Accusantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero nihil animi, odit nostrum laboriosam harum dolores iure hic repudiandae possimus? Nesciunt assumenda et ipsum, perferendis harum asperiores placeat explicabo? </p> <button class="b11">Get it!</button> <button class="b22">Learn More</button>';


newParagraph.classList.add('content');
newParagraph2.classList.add('contenti');
newParagraph2.classList.add('c2');

c=document.getElementById("c2")

d=document.getElementById("d2")

// Append the new paragraph inside the div
// parentDiv.appendChild(newParagraph);
// parentDiv.appendChild(newParagraph2);


function runBasedOnScreenSize() {
    if (window.innerWidth < 600) {
        parentDiv.appendChild(newParagraph2);
        parentDiv.appendChild(newParagraph);
        
     
    } else {
        parentDiv.appendChild(newParagraph);
        parentDiv.appendChild(newParagraph2);
        
    }
  }
  
  // Run on page load
  runBasedOnScreenSize();
  
  // Run on window resize
  window.addEventListener('resize', runBasedOnScreenSize);
  





  b1=document.getElementById("b1")
b2=document.getElementById("b2")
b3=document.getElementById("b3")

b1.style.left=200+"%";
b2.style.left=100+"%";
b3.style.left=0+"%";
 

b=1;
function left(){
console.log(parseFloat(b3.style.left))
if(parseFloat(b1.style.left)>=200  ){
    // b3.style.left=200+"%";
    // b2.style.left=100+"%";
    // b1.style.left=0+"%";
    return;
}

    // console.log(parseFloat(b3.style.left))
b3.style.left=parseFloat(b3.style.left)+100+"%";
b2.style.left=parseFloat(b2.style.left)+100+"%";
b1.style.left=parseFloat(b1.style.left)+100+"%";


}

function right(){
    console.log(parseFloat(b3.style.left))
    if(parseFloat(b3.style.left)<=-200  ){
        b3.style.left=0+"%";
        b2.style.left=100+"%";
        b1.style.left=200+"%";
        return;
    }
    
        // console.log(parseFloat(b3.style.left))
    b3.style.left=parseFloat(b3.style.left)-100+"%";
    b2.style.left=parseFloat(b2.style.left)-100+"%";
    b1.style.left=parseFloat(b1.style.left)-100+"%";
    
    
}


setInterval(function() {
    // console.log("This runs infinitely after 2 seconds");
    right()
}, 5000);
    



