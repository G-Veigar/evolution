<template>
  <div class="ajax">ajax</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let ajax = ({
  url,
  method,
  data
}) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.send()
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.responseText)
        }
      }
    }
  })
}
export default {

}
</script>

<style lang="postcss" scoped>

</style>
