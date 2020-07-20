export const isMobile =
  typeof navigator === "undefined"
    ? false
    : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
