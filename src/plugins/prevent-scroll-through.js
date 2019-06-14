// 修复滚动穿透的指令 传入.prevent修饰符 则启用preventDefault方式
let preventScrollThroughPlugin = {
  install (Vue) {
    Vue.directive('preventScrollThrough', {
      bind: function (el, binding, vnode) {
        if (binding.modifiers.prevent) {
          el.addEventListener('touchmove', eventPreventDefault)
        } else {
          fixedBody()
        }
      },
      unbind: function (el, binding, vnode) {
        if (binding.modifiers.prevent) {
          el.removeEventListener('touchmove', eventPreventDefault)
        } else {
          looseBody()
        }
      }
    })
  }
}

function eventPreventDefault (e) {
  e.preventDefault()
}

function fixedBody () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
}

function looseBody () {
  var body = document.body
  body.style.position = ''
  var top = body.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
  body.style.top = ''
}

export default preventScrollThroughPlugin
