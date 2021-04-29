import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function loadGLTF(url) {
  return new Promise((resolve) => {
    new GLTFLoader().load(url, resolve);
  });
}
export default loadGLTF;
