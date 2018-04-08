Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>sibling : {{ propsdata }}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>child : {{ propsdata }}</p>'
});


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'Hi Vue!'
  }
});
