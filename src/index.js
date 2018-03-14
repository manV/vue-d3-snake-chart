import SnakeChart from "./components/SnakeChart";

const LibraryModule = {
  SnakeChart,

  install(Vue) {
    // Register components with vue
    Vue.component("snake-chart", SnakeChart);
  }
};

// Export library
export default LibraryModule;

// Export components
export { SnakeChart };
