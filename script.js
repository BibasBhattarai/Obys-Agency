function loadinganimation(){
    
var tl=gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.25,
    opacity:0,
    duration:0.6,
    delay:0.5
})

tl.from("#linepart-1,.line h2",{
    opacity:0,
    onStart:function(){
        var h5timer= document.querySelector("#linepart-1 h5");
var grow=0;
setInterval(function(){
   if(grow<100){
    h5timer.innerHTML=grow++
   }
   else{
   h5timer.innerHTML=grow
   }
   
    
},35)
    },
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})


tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})


tl.from("#page1",{
    opacity:0,
    y:1600,
    delay:0.2,
    // ease:power34
    duration:0.5
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
   opacity:0
})


tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1 ",{
    y:150,
    stagger:0.2
})

}


function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    
    Shery.makeMagnet("#nav #nav-part2 h4" ,{
    
      });
}


loadinganimation();
cursoranimation();


