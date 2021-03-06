<template>
  <svg :view-box.camel="viewBox" preserveAspectRatio="xMidYMid meet">
    <g :style="stageStyle">
      <axis
        v-for="axis in axes"
        :key="axis"
        :axis="axis"
        :layout="layout"
        :scale="scale"
        >
      </axis>
      <g>
        <snake-line
          :chart-data="chartData"
          :layout="layout"
          :scale="scale">
        </snake-line>
      </g>
    </g>
  </svg>
</template>

<script>
import { min, max } from "d3-array";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import Axis from "./Axis";
import SnakeLine from "./SnakeLine";

const props = {
  layout: {
    type: Object,
    default: () => ({
      width: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 50,
      marginLeft: 50
    })
  },
  chartData: {
    type: Array,
    default: () => []
  },
  axes: {
    type: Array
  }
};

export default {
  name: "SnakeChart",
  props,
  components: { Axis, SnakeLine },
  data() {
    return {
      scale: {
        x: this.getScaleX(),
        y: this.getScaleY()
      }
    };
  },
  computed: {
    viewBox() {
      const outerWidth =
        this.layout.width + this.layout.marginLeft + this.layout.marginRight;
      const outerHeight =
        this.layout.height + this.layout.marginTop + this.layout.marginBottom;

      return `0 0 ${outerWidth} ${outerHeight}`;
    },
    stageStyle() {
      return {
        transform: `translate(${this.layout.marginLeft}px, ${
          this.layout.marginTop
        }px)`
      };
    }
  },
  methods: {
    getScaleX() {
      return scaleLinear()
        .domain([
          min(this.chartData, d => d.value),
          max(this.chartData, d => d.value)
        ])
        .range([0, this.layout.width]);
    },
    getScaleY() {
      return scaleOrdinal()
        .domain(this.chartData.map(d => d.name))
        .range(this.getUniformRangeForY());
    },
    getUniformRangeForY() {
      const unitHeight = this.layout.height / this.chartData.length;
      const rangeArr = [];
      this.chartData.forEach((d, i) => {
        rangeArr.push(unitHeight * i);
      });
      return rangeArr;
    }
  },
  watch: {
    layout: {
      deep: true,
      handler: function(val, oldVal) {
        this.scale.x = this.getScaleX();
        this.scale.y = this.getScaleY();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
