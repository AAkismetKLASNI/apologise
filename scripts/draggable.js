window.onload = function () {
  document.body.classList.add('loaded');
  setTimeout(function () {
    if (window.matchMedia('(min-width: 992px)').matches) {
      // If not mobile

      Draggable.create('#gallery', {
        bounds: 'body',
        inertia: true,
      });
    }
  }, 500);
};
