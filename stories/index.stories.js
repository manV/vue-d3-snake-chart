import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("SnakeChart", module).add("Snake Chart using D3", () => ({
  data() {
    return {
      chartData: [
        {
          name: "test 1",
          value: 10
        },
        {
          name: "test2",
          value: 20
        },
        {
          name: "test 3",
          value: 54
        },
        {
          name: "test 4",
          value: 32
        },
        {
          name: "test 5",
          value: 22
        },
        {
          name: "test 6",
          value: 48
        }
      ],
      axes: ["left", "top"],
      layout: {
        width: 500,
        height: 1000,
        marginTop: 45,
        marginRight: 35,
        marginBottom: 50,
        marginLeft: 50
      }
    };
  },
  template: `<snake-chart :chart-data="chartData" :layout="layout" :axes="axes"></snake-chart>`
}));
