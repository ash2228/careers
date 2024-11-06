gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger)
let animComp = false;
gsap.fromTo(".images-1", {
    y: window.innerWidth>900?-50:30,
},{
    y: 30,
    scrollTrigger: {
        trigger: ".images-1",
        start: window.innerWidth>900?"top top":"50% top",
        end: "bottom top",
        scrub: true
    }
})
gsap.fromTo(".images-2", {
    y: 50,
},{
    y: -30,
    scrollTrigger: {
        trigger: ".images-1",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.from(".benefit-cards", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger : {
        trigger: ".benefit-cards"
    }
})
gsap.from(".benefits>h1", {
    y: 50,
    opacity: 0,
    scrollTrigger : {
        trigger: ".benefits>h1"
    }
})