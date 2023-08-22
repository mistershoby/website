gsap.utils.toArray(".first_container__logo").forEach((section) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 50%",
      // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)

      scrub: true,
      pin: true,
      anticipatePin: 1,
      end: "bottom 1%",
    },
    defaults: { ease: "none" },
  });
  // animate the container one way...
  tl.fromTo(
    section.querySelector(".first_container__logo--afterImage"),
    { xPercent: 0, x: 0 },
    { xPercent: 0 }
  )
    // ...and the image the opposite way (at the same time)
    .fromTo(
      section.querySelector(".first_container__logo--afterImage img"),
      { xPercent: 300, x: 0 },
      { xPercent: 0 },
      0
    );
});

const platforms = document.querySelector(".second_container--platforms");
console.log(platforms.offsetWidth);

function getScrollAmount() {
  let platformsWidth = platforms.scrollWidth;
  return -(platformsWidth - window.innerWidth);
}

const tween = gsap.to(platforms, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".second__container",
  start: "top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers: false,
});
