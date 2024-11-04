var tl = gsap.timeline({
    scrollTrigger:{
    trigger: ".top-bottom-main-section",
    markers: true,
    start:"50% 50%",
    end:"100% 50%",
    scrub:1,
    pin:true
  }});

  tl
  .to(".top-scrolling",{
    top:"-50%"
  },'a')
  .to(".bottom-scrolling",{
    bottom:"-50%"
  },'a')
  .to(".top-head",{
    top:"80%"
  } ,'a')
  .to(".bottom-head",{
    bottom:"-50%"
  } ,'a')
  