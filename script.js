var typed = new Typed(".typing",{
  strings: ["Website Developer","Mobile Developer","Logo Designer","Graphics Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})

var typed = new Typed(".typing2",{
  strings: ["Website Developer","Mobile Developer","Logo Designer","Graphics Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})

// Mobile nav toggle and active section management

// helper to update active classes on nav links and sections
function setActiveSection(targetId) {
  // update link styling
  var navLinks = document.querySelectorAll('.aside .nav a');
  navLinks.forEach(function(link) {
    if (link.getAttribute('href') === '#' + targetId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  // update section classes
  var sections = document.querySelectorAll('main section');
  sections.forEach(function(sec) {
    if (sec.id === targetId) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var navToggler = document.querySelector('.nav-toggler');
  var aside = document.querySelector('.aside');
  if (navToggler && aside) {
    navToggler.addEventListener('click', function () {
      aside.classList.toggle('open');
    });
    // close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.aside .nav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        aside.classList.remove('open');
        // normal anchor navigation occurs, but we also update active state
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          var id = href.slice(1);
          setActiveSection(id);
        }
      });
    });

    // support buttons/links that reference section index
    var sectionButtons = document.querySelectorAll('[data-section-index]');
    sectionButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var index = parseInt(btn.getAttribute('data-section-index'));
        var sections = document.querySelectorAll('main section');
        if (!isNaN(index) && sections[index]) {
          var target = sections[index];
          target.scrollIntoView({behavior: 'smooth'});
          setActiveSection(target.id);
        }
      });
    });
  }

  // on page load, mark the section matching hash (or home) as active
  var startId = window.location.hash ? window.location.hash.slice(1) : 'home';
  setActiveSection(startId);
});