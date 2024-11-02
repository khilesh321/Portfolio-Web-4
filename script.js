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
function restrict(){
  // for disable right click
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function(e) {
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
  document.addEventListener('dragstart', function(e) {
    if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') {
      e.preventDefault();
    }
  });


  // Disable text selection
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });

  // Disable copy event
  document.addEventListener('copy', function(e) {
    e.preventDefault();
  });

  // Disable cut event
  document.addEventListener('cut', function(e) {
    e.preventDefault();
  });

  }

restrict();

// shery

Shery.imageEffect(".highlight-projects", {
  style: 5,
  config: {"a":{"value":1.49,"range": [0,30]}, "b":{"value":-0.98, "range" : [-1,1]}, "aspect": {"value":1.8822947576656774},"gooey": {"value":true}, "infiniteGooey": {"value":true}, "durationOut": {"value":1,"range" : [0.1,5]},"durationIn": {"value":1,"range": [0.1,5]}, "displaceAmount":{"value":0.5}, "masker": {"value":true}, "maskVal": {"value":1.33, "range" : [1,5]},"scrollType":{"value":0},"geoVertex":{"range": [1,64], "value":1}, "noEffectGooey": {"value":false}, "onMouse": {"value":0}, "noise_speed":{"value":1.59, "range" : [0,10]}, "metaball":{"value":0.21, "range" : [0,2]}, "discard_threshold":{"value":0.5,"range" : [0,1]}, "antialias_threshold":{"value": 0, "range" : [0,0.1]}, "noise_height":{"value":0.47,"range" : [0,2]}, "noise_scale":{"value":12.15, "range" : [0,100]}},
  gooey: true,

});

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
}


// for removing the mouse follower
Shery.imageMasker(".find ul li" /* Element to target.*/, {
  mouseFollower: false,
  text: "",
  ease: "ease-in-out",
  duration: 0.1,
});

// for removing the mouse follower
Shery.imageMasker(".highlight-projects img" /* Element to target.*/, {
  mouseFollower: false,
  text: "",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".text-target", {
  style: 2,
  y: 10,
  delay: 0,
  duration: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0,
});