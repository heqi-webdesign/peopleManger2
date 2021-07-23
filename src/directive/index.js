// 自定义指令
export const imgError = {
  inserted: function (dom, options) {
    dom.onerror = function () {
      dom.src = options.value
    }
  }
}
