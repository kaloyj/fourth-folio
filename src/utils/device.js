export const isMobile =
  typeof navigator === "undefined"
    ? true
    : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
