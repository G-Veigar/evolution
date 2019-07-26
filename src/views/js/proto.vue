<template>
  <div class="proto"></div>
</template>

<script>
function A (name) {
  this.name = name
}

function B (name) {
  // eslint-disable-next-line no-proto
  this.sayName = function () {
    console.log('name', this.name)
  }
}

B.prototype = new A('hehe')

let hehe = new B()

console.log(hehe instanceof A, hehe instanceof B)

hehe.sayName()

export default {

}
</script>
