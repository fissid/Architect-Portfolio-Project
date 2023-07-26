const sections = document.querySelectorAll("section");
console.log(sections);

const revealSection = function (enteries, obsereve) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("sec-hidden");
  obsereve.unobserve(entry.target);
};

const sectionObserve = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach((sec) => {
  sectionObserve.observe(sec);
  sec.classList.add("sec-hidden");
});
