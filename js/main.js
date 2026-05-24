/**
 * Open Door — Quick Exit & Keyboard Safety Script
 * Zero-tracker. No cookies. No storage.
 */
(function () {
  'use strict';

  var ESCAPE_URL = 'https://www.google.com';

  function quickExit() {
    // Replace history so back-button doesn't return to this site
    window.location.replace(ESCAPE_URL);
  }

  // Expose globally so onclick="quickExit()" in HTML works
  window.quickExit = quickExit;

  // Single press of Escape triggers quick exit
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      quickExit();
    }
  });

  // Mobile: show sticky bottom exit bar when scrolled past header
  document.addEventListener('DOMContentLoaded', function () {
    var bar = document.getElementById('mobile-exit-bar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      bar.style.display = window.scrollY > 90 ? 'block' : 'none';
    }, { passive: true });
  });
})();
