
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{
    videos:["3.mp4","2.mp4","0.mp4"],
});

gsap.to(".leftElem",{
    scrollTrigger:{
        trigger : ".images",
        pin: true,
        start: "top top",
        end : "bottom bottom",
        endTrigger : ".last",
        scrub: 1
    },
    y:"-300%",
    ease: Power1,
})

let sections = document.querySelectorAll(".leftElem");
Shery.imageEffect(".rightIn", {
  style: 1,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main');
  
    container.addEventListener('mousemove', (e) => {
      createDot(e.pageX, e.pageY);
    });
  
    function createDot(x, y) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.top = `${y}px`;
      dot.style.left = `${x}px`;
      container.appendChild(dot);
  
      setTimeout(() => {
        dot.style.transform = 'scale(0.01)';
        setTimeout(() => {
          container.removeChild(dot);
        }, 400);
      }, 100);
    }
  });
  Shery.mouseFollower();