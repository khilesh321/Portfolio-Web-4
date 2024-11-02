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

// restriction
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

// restrict();

// shery

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
  document.addEventListener("DOMContentLoaded", function () {
    Shery.imageEffect(".listProject .item img", {
      style: 3,
      config: {
        a: { value: 1.05, range: [0, 30] }, // Reduced 'a' for minimal zoom
        b: { value: -0.3, range: [-1, 1] }, // Further adjusted 'b' for subtlety
        aspect: { value: 1.3 }, // Adjusted for a softer effect
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 0.6, range: [0.1, 5] }, // Faster transition out
        durationIn: { value: 0.6, range: [0.1, 5] }, // Faster transition in
        displaceAmount: { value: 0.2 }, // Significantly reduced displacement
        masker: { value: true },
        maskVal: { value: 1.2, range: [1, 5] }, // Reduced mask value for subtler effect
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 0 },
        noise_speed: { value: 0.5, range: [0, 10] }, // Slower noise speed
        metaball: { value: 0.1, range: [0, 2] }, // Very low metaball intensity
        discard_threshold: { value: 0.8, range: [0, 1] }, // Higher discard threshold
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.1, range: [0, 2] }, // Lower noise height
        noise_scale: { value: 5, range: [0, 100] }, // Reduced noise scale
      },
    });
  });

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

  Shery.textAnimate(".text-target", {
    style: 2,
    y: 10,
    delay: 0,
    duration: 0.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0,
  });
}

// cursor effect
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
call1();
function call1() {
  document.querySelector(".blink-border").style.visibility = "visible";
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0em solid gray}";
  document.body.appendChild(css);
}
// // //
