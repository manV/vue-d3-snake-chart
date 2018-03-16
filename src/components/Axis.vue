<template>
  <g :class="[classList]" ref="axis" :style="style"></g>
</template>
<script>
import { axisTop, axisBottom, axisRight, axisLeft } from "d3-axis";
import { select } from "d3-selection";

const props = {
  layout: {
    type: Object
  },
  scale: {
    type: Object
  },
  axis: {
    type: String,
    default() {
      return "top";
    }
  }
};
export default {
  name: "Axis",
  props,
  data() {
    return {
      classList: ["axis"].concat(this.getAxisClasses())
    };
  },
  mounted() {
    this.drawAxis();
  },
  computed: {
    style() {
      return {
        transform: this.getAxisTransform()
      };
    }
  },
  methods: {
    getAxisTransform() {
      const axisOffset = {
        top: { x: 0, y: 0 },
        right: { x: this.layout.width, y: 0 },
        bottom: {
          x: 0,
          y: this.scale.y.range()[this.scale.y.range().length - 1]
        },
        left: { x: 0, y: 0 }
      };
      return `translate(${axisOffset[this.axis].x}px, ${
        axisOffset[this.axis].y
      }px)`;
    },
    getAxisClasses() {
      const axis = {
        top: "x",
        bottom: "x",
        left: "y",
        right: "y"
      };
      return [this.axis, axis[this.axis]];
    },
    drawAxis() {
      const $axis = select(this.$refs.axis);
      const scale = this.scale;
      const axisGenerator = {
        top: axisTop(scale.x),
        right: axisRight(scale.y),
        bottom: axisBottom(scale.x),
        left: axisLeft(scale.y)
      };
      $axis.call(axisGenerator[this.axis]);
    }
  },
  watch: {
    scale: {
      deep: true,
      handler: function(val, oldVal) {
        this.drawAxis();
      }
    }
  }
};
</script>
<style scoped>

</style>
