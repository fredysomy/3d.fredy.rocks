var moduleconf = require("../modelConfig/modelconfig.json");

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function loadGLTF() {
  let scenes = {};
  const loader = new GLTFLoader();
  moduleconf.forEach((element) => {
    loader.load(element.path, function (gltf) {
      console.log(gltf);
    });
  });
  return scenes;
}
export default loadGLTF;
