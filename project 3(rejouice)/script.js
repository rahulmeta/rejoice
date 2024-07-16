function pageLoaderAnim() {
    let tl = gsap.timeline()
    tl.from(".pageLoader span", {
        y: -30,
        duration: 1.5,
        opacity: 0,
        delay: 0.5
    })
    tl.to(".pageLoader span", {
        y: -30,
        duration: 1,
        opacity: 0,
        delay: 0.2
    })

    tl.to(".pageLoader", {
        opacity: 0,
        delay: 0.1,
        display: "none"
    })
}
pageLoaderAnim()

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco()


function mouseMoveEffect() {
    let page1Container = document.querySelector(".page1Container")
    let mouseMove = document.querySelector(".mouseMove")


    page1Container.addEventListener("mousemove", (val) => {
        gsap.to(mouseMove, {
            x: val.x + "px",
            y: val.y + "px"
        })
    })
    page1Container.addEventListener("mouseenter", (val) => {
        gsap.to(mouseMove, {
            scale: 1,
            opacity: 1
        })
    })
    page1Container.addEventListener("mouseleave", (val) => {
        gsap.to(mouseMove, {
            scale: 0,
            opacity: 0
        })
    })
}
mouseMoveEffect()


function pageAnim2() {
    gsap.from(".page-2-bottom span", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}
pageAnim2()


function pageAnim3() {
    let tl = gsap.timeline()
    tl.from(".page-3-top h2", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page-3",
            scroller: "#main",
            // markers:true,
            scrub: 2,
            start: "top 60%",
            end: "top 50%"
        }
    })
}
pageAnim3()


function page3BorderAnim() {
    let h2 = document.querySelector(".page-3-top h2")

    h2.addEventListener("mouseover", () => {
        gsap.to(".line", {
            x: 750,
            duration: 0.5,
            srub: 2
        })
    })
    h2.addEventListener("mouseleave", () => {
        gsap.to(".line", {
            x: -10,
            duration: 0.5,
            srub: 2
        })
    })
}
page3BorderAnim()


function pageAnim5() {
    gsap.from(".page-4-bottom", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page-4",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}
pageAnim5()


function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}
swiper()



function menuBar() {
    let menu = document.getElementById("menu")
    let close = document.getElementById("close")
    let tl = gsap.timeline()
    tl.to(".menuBar", {
        top: 0,
        duration: 1.5,
        scrub: 2
    })
    tl.from(".detailsContainer ul li", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        scrub: 2
    })
    tl.pause()
    menu.addEventListener("click", () => [
        tl.play()
    ])
    close.addEventListener("click", () => [
        tl.reverse()
    ])

}
menuBar()



// function loco() {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
// }
// loco()


function page6anim() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page-6 h1",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 0%",
            scrub: 3
        }
    })

    tl.to(".page-6 h1", {
        x: -100,
        duration: 5
    }, "aim")

    tl.to(".page-6 h2", {
        x: 100,
        duration: 5
    }, "aim")

    tl.to(".page-6 video", {
        width: "90%",
        duration: 15
    }, "aim")
}
page6anim()

// function footerAnim() {
//     let tl = gsap.timeline()
//     tl.from(".footer h1 span",{
//         y:200,
//         opacity:0,
//         delay:5,
//         duration:5,
//         stagger:1,
//         scrollTrigger:{
//             trigger:".page-7",
//             scroller:"#main",
//             markers:true,
//             start:"top 10%",
//             end:"top 0%",
//             scrub:3
//         }
//     })
// }
// footerAnim()

