gsap.from("#main,#nav",{
opacity:"0",
filter:"blur(10px)",
 y:20,
    duration:2
})

function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there'sw1 a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco()
  
gsap.to("#cent", {
    scrollTrigger: {
        trigger: "#page1",
        scrub: 5,
scroller:"#main",

        start: "top top"

    },
    top: "0%",
    duration: 2,
    ease: Expo.ease
})
function pg2() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top top",
            pin: true,
scroller:"#main",
            scrub: 2
        }
    })
    tl
        .to("#sec1", {
            x: "-35vw"
        }, "a")
        .to("#sec2", {
            x: "35vw"
        }, "a")
        .to("#cent", {
            width: "100%"
        }, "a")
        .to("#page2>h1", {
            top: "40%",
            opacity:"0",
            filter:"blur(5px)",
            // duration: 1
        }, "a")
        .from("#center", {
            top: "120%"
        }, "b")
        .from("#center h1,#play", {
            opacity: 0
        }, "b")
    document.querySelector("#play").addEventListener("mousemove", function (dets) {
        document.querySelector("#play").style.clipPath = `translateX(${dets.clientX * 0.8}px ) translateY(${dets.clientY * 0.8}px )`
        // gsap.to("#play",{
        //     transform:`translateX(${dets.clientX*0.8}px ) translateY(${dets.clientY*0.8}px )`
        // })




    })
    document.querySelector("#play").addEventListener("mousemove", function () {

        gsap.to("#play", {
            transform: `translateX(0px ) translateY(0px )`
        })




    })

}
pg2()
function pg3() {

    function canva2() {
        const canvas = document.querySelector("#page3>canvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        })

        function files(index) {
            var data = `
        ./images/van00001.png
        ./images/van00002.png
        ./images/van00003.png
        ./images/van00004.png
        ./images/van00005.png
        ./images/van00006.png
        ./images/van00007.png
        ./images/van00008.png
        ./images/van00009.png
        ./images/van00010.png
        ./images/van00011.png
        ./images/van00012.png
        ./images/van00013.png
        ./images/van00014.png
        ./images/van00015.png
        ./images/van00016.png
        ./images/van00017.png
        ./images/van00018.png
        ./images/van00019.png
        ./images/van00020.png
        ./images/van00021.png
        ./images/van00022.png
        ./images/van00023.png
        ./images/van00024.png
        ./images/van00025.png
        ./images/van00026.png
        ./images/van00027.png
        ./images/van00028.png
        ./images/van00029.png
        ./images/van00030.png
        ./images/van00031.png
        ./images/van00032.png
        ./images/van00033.png
        ./images/van00034.png
        ./images/van00035.png
        ./images/van00036.png
        ./images/van00037.png
        ./images/van00038.png
        ./images/van00039.png
        ./images/van00040.png
        ./images/van00041.png
        ./images/van00042.png
        ./images/van00043.png
        ./images/van00044.png
        ./images/van00045.png
        ./images/van00046.png
        ./images/van00047.png
        ./images/van00048.png
        ./images/van00049.png
        ./images/van00050.png
        ./images/van00051.png
        ./images/van00052.png
        ./images/van00053.png
        ./images/van00054.png
        ./images/van00055.png
        ./images/van00056.png
        ./images/van00057.png
        ./images/van00058.png
        ./images/van00059.png
        ./images/van00060.png
        ./images/van00061.png
        ./images/van00062.png
        ./images/van00063.png
        ./images/van00064.png
        ./images/van00065.png
        ./images/van00066.png
        ./images/van00067.png
        ./images/van00068.png
        ./images/van00069.png
        ./images/van00070.png
        ./images/van00071.png
        ./images/van00072.png
        ./images/van00073.png
        ./images/van00074.png
        ./images/van00075.png
        ./images/van00076.png
        ./images/van00077.png
        ./images/van00078.png
        ./images/van00079.png
        ./images/van00080.png
        ./images/van00081.png
        ./images/van00082.png
        ./images/van00083.png
        ./images/van00084.png
        ./images/van00085.png
        ./images/van00086.png
        ./images/van00087.png
        ./images/van00088.png
        ./images/van00089.png
        ./images/van00090.png
        ./images/van00091.png
        ./images/van00092.png
        ./images/van00093.png
        ./images/van00094.png
        ./images/van00095.png
        ./images/van00096.png
        ./images/van00097.png
        ./images/van00098.png
        ./images/van00099.png
        ./images/van00100.png
        ./images/van00101.png
        ./images/van00102.png
        ./images/van00103.png
        ./images/van00104.png
        ./images/van00105.png
        ./images/van00106.png
        ./images/van00107.png
        ./images/van00108.png
        ./images/van00109.png
        ./images/van00110.png
        ./images/van00111.png
        ./images/van00112.png
        ./images/van00113.png
        ./images/van00114.png
        ./images/van00115.png
        ./images/van00116.png
        ./images/van00117.png
        ./images/van00118.png
        ./images/van00119.png
        ./images/van00120.png
        ./images/van00121.png
        ./images/van00122.png
        ./images/van00123.png
        ./images/van00124.png
        ./images/van00125.png
        ./images/van00126.png
        ./images/van00127.png
        ./images/van00128.png
        ./images/van00129.png
        ./images/van00130.png
        ./images/van00131.png
        ./images/van00132.png
        ./images/van00133.png
        ./images/van00134.png
        ./images/van00135.png
        ./images/van00136.png
        ./images/van00137.png
        ./images/van00138.png
        ./images/van00139.png
        ./images/van00140.png
        ./images/van00141.png
        ./images/van00142.png
        ./images/van00143.png
        ./images/van00144.png
        ./images/van00145.png
        ./images/van00146.png
        ./images/van00147.png
        ./images/van00148.png
        ./images/van00149.png
        ./images/van00150.png
        ./images/van00151.png
        ./images/van00152.png
        ./images/van00153.png
        ./images/van00154.png
        ./images/van00155.png
        ./images/van00156.png
        ./images/van00157.png
        ./images/van00158.png
        ./images/van00159.png
        ./images/van00160.png
        ./images/van00161.png
        ./images/van00162.png
        ./images/van00163.png
        ./images/van00164.png
        ./images/van00165.png
        ./images/van00166.png
        ./images/van00167.png
        ./images/van00168.png
        ./images/van00169.png
        ./images/van00170.png
        ./images/van00171.png
        ./images/van00172.png
        ./images/van00173.png
        ./images/van00174.png
        ./images/van00175.png
        ./images/van00176.png
        ./images/van00177.png
        ./images/van00178.png
        ./images/van00179.png
        ./images/van00180.png
        ./images/van00181.png`;
            return data.split("\n")[index];
        }

        const frameCount = 181;

        const images = [];
        const imageSeq = {
            frame: 0
        };

        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page3",
                start: "top top",
                pin: true,
                scroller:"#main",
                // markers:true,
                scrub: 3,
                end: "300% 0%"
            }
        })
        tl
            .to("#page3 img", {
                height: "100%",
                width: "100%",
                duration: 4

            })
            .to("#page3 canvas", {
                clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
                duration: 10
            })
            .to(imageSeq, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                duration: 30,
                onUpdate: render
            })


        images[0].onload = render;

        function render() {
            scaleImage(images[imageSeq.frame], context)
        }

        function scaleImage(img, ctx) {
            // var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

        }



    }
    canva2()
    gsap.from("#h1", {
        scrollTrigger: {
            trigger: "#page3 canvas",
            start: "75% 0%",
scroller:"#main",
            scrub: 2
        },
        opacity: 0,
        filter: "blur(5px)"
    })
    var h2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3 canvas",
            start: "170% 0%",
            scroller:"#main",

            scrub: 2
        }
    })
    h2
        .to("#h1", {

            opacity: 0,
            filter: "blur(5px)"
        })
        .from("#h2", {
            opacity: 0,
            filter: "blur(5px)"
        })
    function h3() {
        var h3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page3 canvas",
                start: "230% 0%",
                scroller:"#main",

                scrub: 2
            }
        })
        h3
            .to("#h2", {
                opacity: 0,
                filter: "blur(5px)"
            })
            .from("#h3", {
                opacity: 0,
                filter: "blur(5px)"
            })
    }
    h3()

    gsap.to("#h3", {
        scrollTrigger: {
            trigger: "#page3 canvas",
            start: "290% 0%",
            scroller:"#main",

            scrub: 2
        },
        opacity: 0,
        filter: "blur(5px)"
    })
}
pg3()

function pg6() {
    var clutter = "";
    document.querySelector(".l2 h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector(".l2 h1").innerHTML = clutter

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
scroller:"#main",

            // pin:true,
            // markers:true,
            scrub: 2,
            start: "0% top",
            end: "200% 0%",
            // markers:true
        }
    })
    tl
        .to("#li", {
            y: "0vw"
        }, "a")
        .to(".l1", {
            width: "100%"
        }, "a")
        .to(".l2 h1 span", {

            y: "0vw"
        }, "a")
}


pg6()

function inp() {
    var flag = 0;
    document.querySelector("#input").addEventListener("click", function () {
        if (flag === 0) {
            gsap.to("#input>h3", {
                fontSize: "0.8vw",
                top: "10%",
                ease: Expo.ease
            })
            gsap.to("#input input", {
                opacity: "1"
            })
            flag = 1
        }
        else {
            gsap.to("#input>h3", {
                fontSize: "1.2vw",
                top: "30%"
            })
            gsap.to("#input input", {
                opacity: "0"
            })
            flag = 0
        }
    })
} inp()

function nav() {
    var clutter = "";
    document.querySelector("#nav h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    document.querySelector("#nav h1").innerHTML = clutter

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "50% top",
scroller:"#main",

            scrub: 1,
            // markers: true,
            end:"160% 0%"
        }
        // y:"3vw"

    })

    tl
        .to("#nav h1 span:nth-child(5)", {
            y: "3vw"
        })
        .to("#nav h1 span:nth-child(4),#nav h1 span:nth-child(6)", {
            y: "3vw",
            delay: "-0.45"
        })
        .to("#nav h1 span:nth-child(3),#nav h1 span:nth-child(7)", {
            y: "3vw",
            delay: "-0.45"
        })
        .to("#nav h1 span:nth-child(2),#nav h1 span:nth-child(8),#nav h1 span:nth-child(9)", {
            y: "3vw",
            delay: "-0.45"
        })
        .to("#nav h1 span:nth-child(1),#nav h1 span:nth-child(10)", {
            y: "3vw",
            delay: "-0.45"
        })
        .to(".wstr",{
            width:"20%",
            top:"50%",
            transform:"translate(-50%,-50%)",
            gap:"20px",
            delay:"-.5"
        },"a")
        .to("#bl img",{
            rotate:"90deg",
            height:"2vw",
            width:"2vw"

        },"a")
}
nav()
function menu(){
    var flag = 0;
    document.querySelector("#menu").addEventListener("click",function(){
        if(flag === 0){
        var tl = gsap.timeline()
        tl
        .to(".line",{
            position:"absolute",
            duration:1
        })
        .to("#l1",{
            position:"relative",
            transform:" rotate(45deg)  translateY(0px) translateX(4px)",
            marginLeft: "-5px"
        },"a")
        .to("#l3",{
            position:"relative",
            transform:" rotate(-45deg)  translateX(2px)",
            marginLeft: "-5px"
        },"a")
        .to("#l2",{
            opacity:0
        },"a")
        .to("#navigation",{
            top:"-80%",
            ease:Expo.easeInOut,
            duration:2
        },"a")
        .to("#navigation",{
            top:"0%"
        })
        flag =1 
    }
    else{
        var tl = gsap.timeline()

        tl
        .to("#l1",{
            position:"relative",
            transform:" rotate(0deg)  translateY(0px) translateX(0px)",
            marginLeft: "0px"
        },"a")
        .to("#l3",{
            position:"relative",
            transform:" rotate(0deg)  translateX(0px)",
            marginLeft: "0px"
        },"a")
        .to("#l2",{
            opacity:1,
            position:"relative"
        },"a")
        .to("#navigation",{
            top:"-110%",
            ease:Expo.easeInOut,
            duration:2
        },"a")
        .to("#navigation",{
            top:"-120%",
            ease:Expo.easeInOut,
            duration:2,
            delay:.5
        },"a")
        flag = 0
    }

})
}
menu()
function pg7(){
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        pin:true,
scroller:"#main",

        scrub:4,
        // markers:true
    }
})
tl
.to("#p1",{
    top:"10%",
    duration:1.5
})
.to("#p2",{
    top:"18%",
    duration:1.5

})
.to("#p3",{
    top:"26%",
    duration:1.5

})
.to("#p4",{
    top:"34%",
    duration:1.5

})
.to("#p5",{
    top:"42%",
    duration:1.5

})
}
pg7()