<template>
  <div class="class"></div>
</template>

<script>
/* eslint-disable no-proto */

class Father {
  constructor (name) {
    this.name = name
  }
}

class Son extends Father {
  constructor (name) {
    super(name)
    this.age = 27
  }

  sayHi () {
    console.log(`my name is ${this.name}, ${this.age}`)
    console.log(super.name === Father.prototype.constructor.name)
  }
}

let fa = new Father('hehe')
let son = new Son('haha')

console.log(son.__proto__ === Son.prototype)
console.log(fa.__proto__ === Father.prototype)
// console.log(Son.prototype.__proto__ === Father.prototype)

// console.log(Son.__proto__)
// console.log(Array.__proto__)

// a.sayHi()

// let ming = new Person('小明')

export default {

}
</script>

<style lang="postcss" scoped>

</style>
