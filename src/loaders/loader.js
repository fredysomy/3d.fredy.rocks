var moduleconf = require("../modelConfig/modelconfig.json");

import { ReverseSubtractEquation } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
function loadGLTF() {
  var models = {
    tree: { type: "gltf", path: "models/tree/scene.gltf", mesh: null },
    arch: { type: "gltf", path: "models/arch/scene.gltf", mesh: null },
    
  };

  for (var _key in models) {
    (function (key) {
      const loader = new GLTFLoader();
      loader.load(models[key].path, function(gltf)  {
        models[key].mesh = gltf;
      });
    })(_key);
    
  }
 return models
}
export default loadGLTF;
