var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    property1: "data about property1",
    uid : '10',
    flag: true
  },
  methods: {
    clickBtn() {
      console.log("hi");
    },
    clickBtn1() {
      console.log("click btn1");
      this.uid = 'aaaaa';
    }
  }
})
