const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y: 20,
    opacity: 0,
    duration: 1,
    ease: Power2,
})

Shery.textAnimate("#headings h1", "#headings h5", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1,
})

Shery.imageEffect(".flow", {
    style: 3,
    config: {"uFrequencyX":{"value":15.7,"range":[0,100]},"uFrequencyY":{"value":8.26,"range":[0,100]},"uFrequencyZ":
    {"value":22.31,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":
    [-9999999,9999999]},"aspect":{"value":0.6250254571862284},"gooey":{"value":false},"infiniteGooey":{"value":false},
    "growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":
    [0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":
    {"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":
    {"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":
    [0,100]}},
    // debug: true,
})
Shery.imageEffect("#middle img", {
    style: 3,
    config: {"uFrequencyX":{"value":10.74,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":
    {"value":37.19,"range":[0,100]},"geoVertex":{"range":[1,64],"value":16.62},"zindex":{"value":-9996999,"range":
    [-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":
    {"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},
    "displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":
    {"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},
    "metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":
    {"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":
    [0,100]}},
    // debug: true,
})

Shery.imageEffect("#aimg", {
    style: 2,
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},
    "modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":
    {"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor"
    :{"value":1.4,"range":[-3,3]},"color":{"value":10866426},"pixelStrength":{"value":3,"range":[-20,100],"rangep":
    [-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,
    "range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":
    [-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":
    {"value":1.6929285660537612},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range"
    :[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":
    {"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":1},"geoVertex":
    {"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":
    [0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold"
    :{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]
}},
    // debug: true,
})

gsap.from("#middle img",{
    y:"100",
    opacity: 0,
    duration: 2,
    ease: Expo,
})

document.querySelector("#ftext button").addEventListener("mouseleave", function() {
    gsap.to("#future video",{
        opacity: 0,
        duration: 1,
        ease: Power4,
    })
})

document.querySelector("#ftext button").addEventListener("mouseover", function() {
    gsap.to("#future video",{
        opacity: 1,
        duration: 1.5,
        ease: Power4,
    })
})