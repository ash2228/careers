//all gsap logic here
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
        trigger: ".benefit-cards",
        start: "top 110%",
    }
})
gsap.from(".benefits>h1", {
    y: 50,
    opacity: 0,
    scrollTrigger : {
        trigger: ".benefits",
    }
})
gsap.from(".jobs>h1", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".jobs>h1",
    }
});

gsap.from(".jobs>span", {
    y:50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".jobs>h1"
    }
})
gsap.from(".jobs>.job-card-container", {
    y:50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".jobs>.job-card-container"
    }
})
gsap.from(".contact", {
    y:50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contact",
        start: "top 110%",
    }
})
//other logic
const jobs = document.getElementsByClassName("jobs")[0];
const ctaClick = () =>{
    const jobsPosition = jobs.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: jobsPosition, behavior: 'smooth' });
}