<template>
  <div class="clone">
    <p>a.name: {{a.name}}</p>
    <p>b.name: {{b.name}}</p>
    <button @click="b.name = 'b'">change b.name to b</button>
    <button @click="b.job.name = 'hehe'">change b.job.name to 'hehe'</button>
  </div>
</template>

<script>
function deepClone (obj) {
  let res = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      res[key] = deepClone(obj[key])
    } else {
      res[key] = obj[key]
    }
  }
  return res
}

let a = {
  name: 'a',
  job: {
    name: '前端',
    where: 'beijing'
  }
}

let b = deepClone(a)

console.log(a, b, a.job === b.job)

export default {
  data () {
    return {
      a,
      b
    }
  }
}
</script>

<style>

</style>
