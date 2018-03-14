# vue-d3-snake-chart

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vue-d3-snake-chart.svg)

> A Vue.js component for Snake Chart(90deg rotated line chart basically)

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install vue-d3-snake-chart
```
vue-d3-snake-chart can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-d3-snake-chart will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { SnakeChart } from 'vue-d3-snake-chart';

export default {
  ...
  components: {
    SnakeChart
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'vue-d3-snake-chart';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('vue-d3-snake-chart');

var YourComponent = Vue.extend({
  ...
  components: {
    'snake-chart': ModuleLibrary.SnakeChart
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('vue-d3-snake-chart');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-d3-snake-chart/dist/vue-d3-snake-chart.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<snake-chart></snake-chart>
```

## Changelog

See the GitHub [release history](https://github.com/manv/vue-d3-snake-chart/releases).
