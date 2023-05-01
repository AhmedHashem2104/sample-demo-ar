import "aframe";
const App = () => {
  return (
    <a-scene>
      <a-entity
        gltf-model="/models/SM_RX350_V2.gltf"
        position="0 0 0"
        scale="0.05 0.05 0.05"
      ></a-entity>
    </a-scene>
  );
};

export default App;
