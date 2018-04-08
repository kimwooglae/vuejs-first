Vue.js
=======

--------

Concept overview
====

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

--------

MVVC
====

![](https://012.vuejs.org/images/mvvm.png)

--------

View Instance(ViewModel)
========================

Every Vue application starts by creating a new Vue instance with the Vue function:

var vm = new Vue({
  // options
})
Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it.

```javascript
var vm = new Vue({ /* options */ })
```
--------

View
====

The actual DOM that is managed by Vue instances.

```javascript
vm.$el // The View
```

--------

Model
=====

A slightly modified plain JavaScript object.

```javascript
vm.$data // The Model
```

![inline](https://012.vuejs.org/images/data.png)

--------

Directive
=========

Prefixed HTML attributes that tell Vue.js to do something about a DOM element.

```javascript
<div v-text="message"></div>
```

--------

Mustache Bindings
=================

You can also use mustache-style bindings, both in text and in attributes. They are translated into v-text and v-attr directives under the hood. For example:

```javascript
<div id="person-{{id}}">Hello {{name}}!</div>
```

--------

Filters
=======

Filters are functions used to process the raw values before updating the View. They are denoted by a “pipe” inside directives or bindings:

```javascript
<div>{{message | capitalize}}</div>
```

Components
----------

![](https://vuejs.org/images/components.png)

Quick example
--------------

```html
<div id="demo">
  <h1>{{title | uppercase}}</h1>
  <ul>
    <li
      v-repeat="todos"
      v-on="click: done = !done"
      class="{{done ? 'done' : ''}}">
      {{content}}
    </li>
  </ul>
</div>
```

```JavaScript
var demo = new Vue({
  el: '#demo',
  data: {
    title: 'todos',
    todos: [
      {
        done: true,
        content: 'Learn JavaScript'
      },
      {
        done: false,
        content: 'Learn Vue.js'
      }
    ]
  }
})
```

-----


View Instance(Option)
=====================

| 속성    | 설명                                   |
|--------|---------------------------------------|
|el      | 화면이 그려지는 DOM 객체                   |
|data    | 화면에서 사용할 데이터를 정의하는 속성         |
|template| HTML, CSS가 포함된 템플릿을 정의하는 속성     |
|method  | 화면 로직 제어와 관계된 메서드를 정의하는 속성   |
|created | View Instance가 생성되자마자 실행할 로직 정의 |

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
});
```

------

View Instance 유효 범위
=====================

View Instance에 정의된 속성은 View Instance가 부착된 DOM 영역에서만 유효.

------

View Instance Lifecycle
=======================



뷰 인스턴스
=========



뷰 컴포넌트
========



뷰 컴포넌트 통신
============
