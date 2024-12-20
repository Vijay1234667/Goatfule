var element = document.querySelector(".main-section");
var cursor = document.querySelector(".hover-body-cursor");

element.addEventListener("mousemove", function(elem) {
  gsap.to(cursor, {
    x: elem.clientX,
    y: elem.clientY,
    duration: 0.1,  
    ease: "power2.out"
  });
});

// gsap.to(".banner-main-section .fuel-bottle", {
//   top: "220%",           
//   left: "-2%",  
//   width:"10%" , 
//   scale: 1,          
//   scrollTrigger: {
//     trigger: ".banner-section",      
//     scrub: true,    
//     start: "40% 95%",   
//     onLeave: () => gsap.set(".banner-main-section .fuel-bottle", { 
//       position: "fixed",
//       zIndex: 10, 
  
               
//     }),
//     onEnterBack: () => gsap.set(".banner-main-section .fuel-bottle", { 
//       position: "absolute", 
//       scale: 1, 
//       zIndex: 1          
  
//     })
//   }
// });



gsap.to(".banner-main-section .fuel-bottle", {
  top: "204%",           
  left: "0%",  
  width: "13%", 
  scale: 1.2,          
  scrollTrigger: {
    trigger: ".banner-section",      
    scrub: 1,    
    start: "70% 95%",
    end: "80% 50%",
  }
});


gsap.registerPlugin(ScrollTrigger);
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".zoom-img-section",
    scrub: 1,
    pin: true,
    start: "50% 50%",
  }
})

.from(".sm-to-lg-zoom-img", {
  scale: 0.5, 
  ease: "none"
})




gsap.to(".tropical-slider-body img", {
  transform: "translateX(-150%)",
  scrollTrigger: {
      trigger: ".tropical-section",
      scrub: 1,
      pin: true,
      stagger:1, 
  }
})

gsap.to(".text-moving-animated-text h2", {
  transform: "translateX(-150%)",
  scrollTrigger: {
      trigger: ".text-moving-animated-section",
      scrub: 1,
      stagger:1,
  }
})

gsap.to(".why-choose-body span", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".why-choose-us-section",
    markers: false,
    scrub: 1,
    start: "top center",
    end: "bottom center",
    color:"#caf587",
  }
});







































