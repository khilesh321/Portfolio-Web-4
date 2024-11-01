// Initialize Lenis
const lenis = new Lenis();


// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

raf();

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