export const isMobile = () =>
  typeof window === "undefined"
    ? false
    : /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
