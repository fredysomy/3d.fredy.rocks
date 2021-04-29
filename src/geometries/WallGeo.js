import * as THREE from "three";
import GroundT from "../textures/ground.jpg";
function WallGeoMetry() {
  const groundTexture = new THREE.TextureLoader().load(GroundT);
  const wall = new THREE.PlaneGeometry(19, 20, 1, 1);
  const materialWall = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: groundTexture,
  });
  const WallgeoMetry = new THREE.Mesh(wall, materialWall);
  return WallgeoMetry;
}
export default WallGeoMetry;
