export const errorImg = {
  inserted: function (dom, options) {
    dom.onerror = function () {
      dom.src = options.value
    }
  }
}
