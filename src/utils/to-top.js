// export default {
//   getScrollPosition: (el = window) => ({
//     x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
//     y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
//   }),
//   scrollToTop: scrollToTop
// }

const scrollToTop = (Immediately = false) => {
  if (Immediately) {
    window.scrollTo(0, 0)
    return
  }
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(() => {
      scrollToTop(Immediately)
    })
    window.scrollTo(0, c - c / 8)
  }
}

export { scrollToTop }
