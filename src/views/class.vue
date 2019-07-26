<template>
  <div>class</div>
</template>

<script>

class A {
  constructor (name) {
    this.name = name
  }

  sayName () {
    console.log(this.name)
  }
}

function B () {
  this.name = name
}

B.prototype.sayName = function () {
  console.log(this.name)
}

console.log(A)

export default {

}
</script>
