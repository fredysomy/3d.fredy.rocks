import * as THREE from "three";

import { PointerLockControls } from "./scripts/PointerLockMobile.js";

var scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
light.position.set(0.5, 1, 0.75);
scene.add(light);

const controls = new PointerLockControls(camera, document.body);
const blocker = document.getElementById('blocker');
const instructions = document.getElementById('instructions');
const btns = document.getElementById('btn');
btns.addEventListener('click',function(){
  controls.lock()
})
controls.addEventListener('lock', function () {

  instructions.style.display = 'none';
  blocker.style.display = 'none';

});

controls.addEventListener('unlock', function () {

  blocker.style.display = 'block';
  instructions.style.display = '';

});
scene.add(controls.getObject())
camera.position.set(0, 10, 180);
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const plane = new THREE.PlaneGeometry(2000, 2000, 100, 100);
const materialPlane = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  color: "red",
});
const PlanegeoMetry = new THREE.Mesh(plane, materialPlane);
scene.add(PlanegeoMetry);
PlanegeoMetry.rotateX(-Math.PI / 2);

const box = new THREE.BoxGeometry(5, 5, 5);
const materialBox = new THREE.MeshNormalMaterial();
const BoxgeoMetry = new THREE.Mesh(box, materialBox);
scene.add(BoxgeoMetry);
BoxgeoMetry.position.set(0, 0, 0);

scene.add(controls.getObject());

controls.moveRight(0);

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
