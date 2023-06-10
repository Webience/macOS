export function isDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function isFullScreen() {
  return document.fullscreenElement !== null;
}

export function goFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}