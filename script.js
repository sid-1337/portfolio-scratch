const sliderDiv = document.querySelector("#back");
const tl = gsap.timeline({ paused: true , onComplete: () => sliderDiv.remove() });
tl.to(".page-main", {
    clipPath: "circle(0%)",
    backgroundColor: "#fff",
    duration: 1
  })
  .to(
    ".page-main",
    {
      clipPath: "circle(100%)",
      duration: 1
    },
    "-=0.1")
  // ).to(".page-main", {
  //   scale: 200,
  //   translateX: "-140%",
  //   translateY: "-40%",
  //   duration: 1
  // })
  .to("body",{opacity: 0})
  .to("body",{
  opacity: 1,
  duration: 1
});

// tl.pace(1);
// tl.reverse();
window.addEventListener("load", function () {
  tl.play();
/*   TweenLite.to('#content' , 3, {autoAlpha: 1, display:'block'}); */
  setTimeout(()=>{console.log("yoyo")
  const a = document.querySelector('#content');
  const b = document.querySelector('footer');

  a.style = "display:block";
  b.style = "display:block";
  },3000);
  
});









