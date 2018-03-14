<template>
  <path class="line" ref="line" :style="style"></path>
</template>
<script>
import * as d3 from 'd3';

const props = {
  layout: {
    type: Object
  },
  scale: {
    type: Object
  },
  chartData: {
    type: Array,
    default: () => []
  }
};
export default {
  name: "SnakeLine",
  props,
  mounted() {
    this.drawLine();
    debugger;
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    drawLine() {
      const line = d3.line()
        .x(d => this.scale.x(d.value))
        .y(d => this.scale.y(d.name));

      const $line = d3.select(this.$refs.line);
      debugger;
      $line
        .datum(this.chartData)
        .attr('d', line);
    }
  },
  watch: {
    scale: {
      deep: true,
      handler: function(val, oldVal) {
        this.drawLine();
      }
    }
  }
};
</script>
<style scoped>
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 5;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
