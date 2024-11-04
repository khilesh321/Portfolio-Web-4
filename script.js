function lenisScroll() {
  // Initialize Lenis
  const lenis = new Lenis({
    syncTouch: true,
    // other configurations
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

lenisScroll();

function hidePreloader() {
  window.addEventListener('load', () => {
    // After 2.9 seconds, call cursorEffect() and gsapAnim()
    setTimeout(() => {
      cursorEffect();
      gsapAnim();
      const nameHeadings = document.querySelectorAll('.pname h1');
          nameHeadings.forEach(heading => {
            heading.classList.add('focus-in-expand');
          });
    }, 1000); // 2.9 seconds after window load

    // After 3 seconds, fade out the preloader
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');

      // Use GSAP to animate the opacity to 0
      gsap.to(preloader, {
        opacity: 0,
        duration: 1, // Duration of the fade-out animation
        ease: "power2.out",
        onComplete: () => {
          preloader.style.display = 'none';

        },
      });
    }, 1000); // 3 seconds after window load
  });
}
hidePreloader();


function nameAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class when the element is in view
        entry.target.classList.add('name-animation');
      } else {
        // Remove the animation class when the element goes out of view
        entry.target.classList.remove('name-animation');
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  // Select elements with class .pname
  const animatedElements = document.querySelectorAll('.pname');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}
nameAnimation();

function cardsRedirect() {
  const links = [
    { selector: "#college-card", url: 'https://geca.ac.in' },
    { selector: "#whatsapp-card", url: 'https://www.whatsapp.com/channel/0029VafMvZxCnA7qAQpsh83N' },
    { selector: "#telegram-card", url: 'https://telegram.me/Khilesh_jawale' },
    { selector: "#email-card", url: 'mailto:khilujawale321@gmail.com' },
  ];

  links.forEach(link => {
    const element = document.querySelector(link.selector);
    if (element) {
      element.addEventListener('click', () => {
        window.open(link.url, '_blank');
      });
    }
  });
}
cardsRedirect();

function restrict() {
  // for disable right click
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  document.onkeydown = function (e) {
    // Disable F12 key
    if (e.keyCode == 123) {
      return false;
    }
    // Disable Ctrl+Shift+I (for DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
    }
    // Disable Ctrl+Shift+J (for console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      return false;
    }
    // Disable Ctrl+U (to prevent view page source)
    if (e.ctrlKey && e.keyCode == 85) {
      return false;
    }
  };

  // Disable dragging for images and videos
  document.addEventListener("dragstart", function (e) {
    if (e.target.nodeName === "IMG" || e.target.nodeName === "VIDEO") {
      e.preventDefault();
    }
  });

  // Disable text selection
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  // Disable copy event
  document.addEventListener("copy", function (e) {
    e.preventDefault();
  });

  // Disable cut event
  document.addEventListener("cut", function (e) {
    e.preventDefault();
  });
}
restrict();

// Function to detect if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Apply mouse follower only if the user is not on a mobile device
if (!isMobileDevice()) {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  // const userWantsAnimation = confirm("Do you want to enable Image animations?");
  if (true) {
    console.log("User chose to enable animations.");

    // Array of class names for your images
    const imageClasses = ["p1", "p2", "p3", "p4"];

    // Collect all images into an array
    const images = imageClasses
      .map(className => document.querySelector(`.listProject .item .${className}`))
      .filter(Boolean); // Filter out any null elements in case some images are missing

    // Function to apply Shery.js effect once all images are loaded
    function applySheryEffect() {
      imageClasses.forEach((className) => {
        Shery.imageEffect(`.listProject .item .${className}`, {
          style: 3,
          config: {
            a: { value: 1.05, range: [0, 30] }, // Initial subtle zoom effect
            b: { value: -0.3, range: [-1, 1] }, // Subtle distortion
            aspect: { value: 1.3 }, // Softer aspect ratio
            gooey: { value: true },
            infiniteGooey: { value: true },
            durationOut: { value: 0.6, range: [0.1, 5] }, // Quick transition out
            durationIn: { value: 0.6, range: [0.1, 5] }, // Quick transition in
            displaceAmount: { value: 0.2 }, // Subtle initial displacement
            masker: { value: true },
            maskVal: { value: 1.2, range: [1, 5] }, // Subtle masking effect
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: false },
            onMouse: { value: 0 }, // Activate effect on mouse hover
            noise_speed: { value: 0.5, range: [0, 10] }, // Moderate noise speed
            metaball: { value: 0.1, range: [0, 2] }, // Subtle metaball effect
            discard_threshold: { value: 0.8, range: [0, 1] }, // Higher discard threshold
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.1, range: [0, 2] }, // Minimal noise height
            noise_scale: { value: 5, range: [0, 100] }, // Reduced noise scale for subtlety
            zoomFactor: { value: 1.1 }, // Added custom zoom factor for hover effect
          },
        });
      });
    }

    // Counter to track loaded images
    let loadedImagesCount = 0;

    // Wait for all images to load
    images.forEach(image => {
      if (image.complete) {
        // If image is already loaded (from cache), increment the count
        loadedImagesCount++;
      } else {
        // Add load event listener for images that are still loading
        image.addEventListener("load", () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            applySheryEffect();
          }
        });
      }
    });

    // If all images were already loaded from cache, apply the effect immediately
    if (loadedImagesCount === images.length) {
      applySheryEffect();
    }

    Shery.imageEffect(".page4 .container div", {
      style: 5,
      config: {
        a: { value: 1.49, range: [0, 30] },
        b: { value: -0.98, range: [-1, 1] },
        aspect: { value: 1.8822947576656774 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 1.0 }, // Increased displacement
        masker: { value: true },
        maskVal: { value: 2.0, range: [1, 5] }, // Increased mask value
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 0 },
        noise_speed: { value: 1.59, range: [0, 10] },
        metaball: { value: 0.5, range: [0, 2] }, // Increased metaball intensity
        discard_threshold: { value: 0.5, range: [0, 1] }, // Lowered discard threshold
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.47, range: [0, 2] },
        noise_scale: { value: 12.15, range: [0, 100] },
      },
      gooey: true,
    });

    // for removing the mouse follower
    Shery.imageMasker(".find ul li" /* Element to target.*/, {
      mouseFollower: false,
      text: "",
      ease: "ease-in-out",
      duration: 0.1,
    });
    Shery.imageMasker(".page4 .container div" /* Element to target.*/, {
      mouseFollower: false,
      text: "",
      ease: "ease-in-out",
      duration: 0.1,
    });

    Shery.imageEffect(".eagle-img", {
      style: 1,
      config: { onMouse: { value: 1 } },
    });

    Shery.imageEffect(".app-block .logo-img-wrapper .logo-img", {
      style: 1,
      config: { onMouse: { value: 1 } },
    });
  }
}

// Cursor effect animation
function cursorEffect() {
  class TxtType {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    }

    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 200 - Math.random() * 100;
      delta = this.isDeleting ? delta / 2 : delta;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => this.tick(), delta);
    }
  }

  function initTypingEffect() {
    document.querySelector(".blink-border").style.visibility = "visible";
    const elements = document.getElementsByClassName("typewrite");
    Array.from(elements).forEach(element => {
      const toRotate = element.getAttribute("data-type");
      const period = element.getAttribute("data-period");
      if (toRotate) {
        new TxtType(element, JSON.parse(toRotate), period);
      }
    });
    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0em solid gray}";
    document.body.appendChild(css);
  }

  initTypingEffect();
}

// Hard code animation
function hardCodeAnim() {
  const animationClasses = ['.t-t-b', '.b-t-t', '.focus-in-expand'];
  const elements = document.querySelectorAll(animationClasses.join(','));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  elements.forEach(element => observer.observe(element));
}
hardCodeAnim();

// GSAP Animations
function gsapAnim() {
  // hello everyone my name is,
  Shery.textAnimate(".text-target", {
    style: 2,
    y: 10,
    delay: 0,
    duration: 0.1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  // b-t-t
  gsap.utils.toArray(['.page2 .title', '.page3 .title', '.page4 .title', '.page5 .title','.app-block h1']).forEach(element => {
    gsap.from(element, {
      y: 40,
      opacity: 0,
      duration: .9,
      delay : -.1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: element,
        // start: "top 50%",
        toggleActions: "play none none reset",
      },
    });
  });

  // zoom in
  gsap.from('.zoom-in', {
    scale: 0.9,
    ease: "expo.inOut",
    duration: 1.5,
  });

  // fade in
  gsap.from('.fade-in', {
    opacity: 0,
    scale: 1.1,
    duration: 2,
    ease: "power2.out"
  });

  // skills progress bar
  gsap.from('.evaluate', {
    width: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.evaluate',
      toggleActions: "play none none reset",
    }

  });
  // text animation l-t-r
  // gsap.from()
}