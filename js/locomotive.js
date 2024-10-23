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

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".banner-section",
  }
})

tl.to(".banner-section img",{
  x:10,
  repeat: -1,
  yoyo: true,
  duration: 1,  
},"abc")

tl.to(".banner-section .increasing-endurence-text",{
  x:10,
  repeat: -1,
  yoyo: true,
  duration: 1,  
},"abc")


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


































