var tl = gsap.timeline();
tl.from("nav img, nav a", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.from("h1",{
    y:100,
    opacity:0,
    stagger:0.2
})
tl.from("#main img",{
    scale:0.5,
    opacity:0,
    stagger:0.2
})
tl.from("#main h5",{
    y:10,
    // opacity:0,
    duration:.5,
    repeat:-1,
    yoyo:true
})