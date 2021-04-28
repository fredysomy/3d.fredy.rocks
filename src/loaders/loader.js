import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
function loadGLTF(path){
  return new Promise(resolve=>{
    new GLTFLoader().load(path, resolve);
  })
}
export default loadGLTF