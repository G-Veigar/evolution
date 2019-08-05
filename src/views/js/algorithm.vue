<template>
  <div class="algorithm">
    <div class="item">
      <div class="title">1. 反转字符串</div>
      <input class="item-input" type="text" v-model="reverseText">
      <div>结果：{{reverseTextRes}}</div>
    </div>
    <div class="item">
      <div class="title">2. 反转数字</div>
      <input class="item-input" type="number" v-model.number="reverseNum">
      <div>结果：{{reverseNumRes}}</div>
    </div>
    <div class="item">
      <div class="title">3. 回文验证</div>
      <div>level: {{huiwen('level')}}</div>
      <div>dwretd: {{huiwen('dwretd')}}</div>
    </div>
    <div class="item">
      <div class="title">4. Fizz Buzz</div>
      <div class="tips">给定一个 数字 作为输入值, 打印出从 1 到给定数字的所有整数。 但是，当整数可以被 2 整除时，打印出“Fizz”; 当它可以被3整除时，打印出“Buzz”; 当它可以同时被2和3整除时，打印出“Fizz Buzz”。</div>
      <input class="item-input" type="number" v-model.number="fizzBuzz">
      <div>结果：</div>
      <div class="res-div">{{fizzBuzzRes}}</div>
    </div>
    <div class="item">
      <div class="title">5. 找出字符串中出现最多次字符</div>
      <input class="item-input" type="text" v-model="mostLetter">
      <div>结果：{{mostLetterRes}}</div>
    </div>
    <div class="item">
      <div class="title">6. 检查是否包含相同单词</div>
      <input class="item-input" type="text" v-model="sameWord.pre">
      <input class="item-input" type="text" v-model="sameWord.next">
      <div>结果：{{hasSameWord}}</div>
    </div>
    <div class="item">
      <div class="title">7. 二分查找</div>
      <input class="item-input" type="text" v-model="findBy2.arr">
      <input class="item-input" type="text" v-model="findBy2.val">
      <div>结果：{{hasSameWord}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// 反转字符串
function reverseText (text) {
  return Array.from(text).reverse().join('')
}

function reverseText2 (text) {
  let res = []
  for (let letter of text) {
    res.unshift(letter)
  }
  return res.join('')
}

// 反转数字
function reverseNum (num) {
  return +Array.from(String(num)).reverse().join('')
}

function reverseNum2 (num) {
  return +Array.from(String(num)).reverse().join('')
}

// 回文验证
function huiwen (text) {
  let textLength = text.length
  let textArr = Array.from(text)
  for (let i = 0; i < textLength / 2; i++) {
    if (textArr[i] !== textArr[textLength - 1 - i]) {
      return false
    }
  }
  return true
}

// Fizz Buzz
function fizzBuzz (num) {
  let res = []
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      res.push('Fizz Buzz')
    } else if (i % 2 === 0) {
      res.push('Fizz')
    } else if (i % 3 === 0) {
      res.push('Buzz')
    } else {
      res.push(i)
    }
  }
  return res.join(',')
}

// find mostLetter
function findMostLetter (text) {
  let textArr = Array.from(text)
  let letterKey = {}
  let maxCount = 1
  let maxLetter = textArr[0]
  textArr.forEach(letter => {
    if (letterKey[letter]) {
      let count = letterKey[letter] += 1
      if (count > maxCount) {
        maxLetter = letter
        maxCount = count
      }
    } else {
      letterKey[letter] = 1
    }
  })
  return maxLetter
}

// 检查是否包含相同单词
function hasSameWord (text1, text2) {
  let text1Arr = text1.split(' ')
  let text2Arr = text2.split(' ')
  let hasSame = text1Arr.some(word1 => {
    return text2Arr.find(word2 => {
      return word2 === word1
    })
  })
  return hasSame
}

export default {
  data () {
    return {
      reverseText: 'abcd',
      reverseNum: 12345,
      fizzBuzz: 8,
      mostLetter: 'abcbaccacc',
      sameWord: {
        pre: 'hello world',
        next: 'world'
      },
      findBy2: {
        arr: '1, 3, 5, 6, 11, 22, 36, 77, 97',
        val: 36
      }
    }
  },
  methods: {
    huiwen (text) {
      return String(huiwen(text))
    }
  },
  computed: {
    reverseTextRes () {
      return reverseText2(this.reverseText)
    },
    reverseNumRes () {
      return reverseNum(this.reverseNum)
    },
    fizzBuzzRes () {
      return fizzBuzz(this.fizzBuzz)
    },
    mostLetterRes () {
      return findMostLetter(this.mostLetter)
    },
    hasSameWord () {
      return String(hasSameWord(this.sameWord.pre, this.sameWord.next))
    }
  }
}
</script>

<style lang="postcss" scoped>
.algorithm {
  background-color: #cccccc;
  padding-left: 15px;
  padding-right: 15px;
  min-height: 100vh;
  overflow: auto;
}
.item-input {
  border: 1px solid #aaa;
}
.tips {
  font-size: 24px;
}
.item {
  margin-top: 30px;
  background-color: #ffffff;
  padding: 10px;
}
</style>
