// this if for mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// note: you don't put . in class nav-open
// note: the class nav-open wala sa html kundi naa sya sa css (queriessnew.css)
//        pwede ra dili e butang sa html basta naka set na sya sa css
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ............................................................................................................
// for sticky navigation appear after hero section
// note: the class sticky is wala sa html kundi naa sya sa css,
// pwede ra dili e butang sa html basta naka set na sya sa css.
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },

  {
    // this is for the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // why 80px? because of the height of sticky navigation
    // need to set 80px because mo overlap sya once nga naa nay stick navigation
  }
);
obs.observe(sectionHeroEl);
