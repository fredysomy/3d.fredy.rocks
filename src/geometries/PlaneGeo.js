import * as THREE from "three";
import GrassT from "../textures/GrassTexture.jpg";
function PlaneGeoMetry() {
  const grassTexture = new THREE.TextureLoader().load(GrassT);
  grassTexture.wrapS = THREE.RepeatWrapping;
  grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(200, 200);
  const plane = new THREE.PlaneGeometry(1000, 1000, 100, 100);
  const materialPlane = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    map: grassTexture,
  });
  const PlanegeoMetry = new THREE.Mesh(plane, materialPlane);

  PlanegeoMetry.rotateX(-Math.PI / 2);

  return PlanegeoMetry;
}
export default PlaneGeoMetry;
