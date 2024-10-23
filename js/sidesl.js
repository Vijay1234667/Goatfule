
document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    gsap.registerPlugin(ScrollTrigger);
    const lennis = new Lenis({
        duration: 1.2,
        smooth: true
    });
    function raf(time) {
        lennis.raf(time)
        requestAnimationFrame(raf)
    };
    lennis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
        lennis.raf(time * 1000)
    });
    let workInfoItems = document.querySelectorAll('.side-parallax-wrapper');
    workInfoItems.forEach(function (item, index) {
        item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".side-parallax-wrapper", {
        clipPath: function () {
            return "inset(0px 0px 0px 0px)"
        }
    });
    const animation = gsap.to('.side-parallax-wrapper:not(:last-child)', {
        clipPath: function () {
            return "inset(0px 100% 0px 0px)"
        },
        stagger:1,
        ease: "none"
    });
    ScrollTrigger.create({
        trigger: '.side-parallax-section',
        start: 'top top',
        end: 'bottom bottom',
        animation: animation,
        scrub: 1,
        markers:false
    });

});

