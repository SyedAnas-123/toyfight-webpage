// LOCOMOTIVE JS CODE ASW COPIED 
function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  loco();
  

//   FOR IMAGE MOVING HELP 
var main = document.querySelector("#main");
var image = document.querySelector("#page>img");

// on mymain aikevent losten krwaoo

main.addEventListener("mousemove",function(dets){
    // image.style.top = dets.x + "px" sets the CSS top property of the image element to the x coordinate of the mouse pointer, and it appends "px" to convert it into a pixel value. This makes the image element move vertically (up and down) as you move the mouse. abh image boht tyezz move kr rrhii thi to hmne *0.05 se kr diya ,, now now we want arrow left pr lekr jane to i9mage right side jaee or agr arrow right side le kr jaeen to image left side jaen to -1
    

    image.style.top = 1- dets.y * 0.05+ "px"
    image.style.left = 1- dets.x * 0.05 + "px"


})




