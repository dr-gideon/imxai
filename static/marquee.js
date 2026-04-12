document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.skills-track');
  if (!track) return;

  let rafId = null;
  let x = 0;
  let speed = 0.8;

  const getResetWidth = () => track.scrollWidth / 2;
  let resetWidth = getResetWidth();

  const step = () => {
    x -= speed;

    if (Math.abs(x) >= resetWidth) {
      x = 0;
    }

    track.style.transform = `translate3d(${x}px, 0, 0)`;
    rafId = requestAnimationFrame(step);
  };

  const restart = () => {
    if (rafId) cancelAnimationFrame(rafId);
    resetWidth = getResetWidth();
    x = 0;
    track.style.transform = 'translate3d(0, 0, 0)';
    rafId = requestAnimationFrame(step);
  };

  restart();
  window.addEventListener('resize', restart);

  track.addEventListener('mouseenter', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });

  track.addEventListener('mouseleave', () => {
    rafId = requestAnimationFrame(step);
  });
});
