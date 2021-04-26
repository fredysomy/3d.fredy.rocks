import * as THREE from 'three';
import SKbox from '../textures/Sk.jpg';
function SBox(){
skybox=new THREE.TextureLoader().load(SKbox)
return skybox
}
export default SBox