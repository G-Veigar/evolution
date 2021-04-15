function singletonCreater (Fun) {
  let instance = null
  return function (...args) {
    if (instance) {
      return instance
    } else {
      instance = new Fun(...args)
      return instance
    }
  }
}

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

const SingletonPerson = singletonCreater(Person)

const faker = new SingletonPerson('李相赫', 20)
const uzi = new SingletonPerson('李相赫', 20)

console.log(faker === uzi)
// console.log(uzi instanceof Person)

// export default singletonCreater
