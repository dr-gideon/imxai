document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.skills-track');
  if (!track) return;

  let rafId = null;
  let previousTime = null;
  let x = 0;
  const speed = 36;

  const getResetWidth = () => {
    const firstGroup = track.querySelector('.skills-group');
    return firstGroup ? firstGroup.getBoundingClientRect().width : track.scrollWidth / 2;
  };

  let resetWidth = getResetWidth();

  const step = (time) => {
    if (previousTime == null) previousTime = time;
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;

    x -= speed * delta;

    if (Math.abs(x) >= resetWidth) {
      x += resetWidth;
    }

    track.style.transform = `translate3d(${x}px, 0, 0)`;
    rafId = requestAnimationFrame(step);
  };

  const restart = () => {
    if (rafId) cancelAnimationFrame(rafId);
    resetWidth = getResetWidth();
    x = 0;
    previousTime = null;
    track.style.transform = 'translate3d(0, 0, 0)';
    rafId = requestAnimationFrame(step);
  };

  restart();
  window.addEventListener('resize', restart);

  track.addEventListener('mouseenter', () => {
    if (rafId) cancelAnimationFrame(rafId);
    previousTime = null;
  });

  track.addEventListener('mouseleave', () => {
    previousTime = null;
    rafId = requestAnimationFrame(step);
  });
});
