
Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hovervideo", { videos: ["./video/box2video.mp4", "./video/box3video.mp4"] });


gsap.to(".featured-left-elem ", {
    scrollTrigger: {
        trigger: ".featured-image-section",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".featuredlast",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})


let sections = document.querySelectorAll(".featured-left-elem");
shery.imageEffect(".featered-allimages", {
    style: 5,
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index)
                },
            });
        });

    },
});


