
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
  // ye250 isliye sub kiya kyunki ye blur ka dha hai to ab cursor aur blur ka centere ek ho
})

var h4=document.querySelectorAll("#nav h4")
h4.forEach(function(elem) {
  elem.addEventListener("mouseenter",function() {
    crsr.style.scale=3,
    crsr.style.border="1px solid #fff";
    crsr.style.backgroundColor="transparent"
    
  })
  

  elem.addEventListener("mouseleave",function() {
    crsr.style.scale=1,
    crsr.style.border="0px solid #fff";
    crsr.style.backgroundColor="#95C11E"
    
  })
  
})


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    //   jb eat drink wala div 10%gus jaye nav ke andar 
    end: "top -11%",
    scrub: 1,
    // Animation aur scroll ke beech ke time kA DIFF Bata ta hai loop bhi hojayega

  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 55%",
    scrub:2
  }

});
gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:.1, 
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1,

  }

});
gsap.from("#colon1",{
  y:-70,
  x:-70,

    scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      start:"top 50%",
      end:"top 45%",
      scrub:4,
  }
})
gsap.from("#colon2",{
  y:-70,
  x:-70,

    scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      start:"top 50%",
      end:"top 45%",
      scrub:4,
  }
})
gsap.from("#page4 h1",{
  y:50,
  

    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 70%",
      scrub:3,
  }
})