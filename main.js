var app = new Vue({
  el: '#app',
  data: {
    question: "この人は誰？",
    selections: [
      "マギー",
      "カイリ",
      "とーや"
    ],
    feedbacks: [
      "正解！この人はマギーです！",
      "残念！この人はカイリじゃないよ",
      "残念！この人はとーやじゃないよ"
    ],
    text: [],
    feedback: false
  },
  methods: {
    showfeedback(key) {
      this.feedback = true
      this.text = this.feedbacks[key]
    },
  }
})