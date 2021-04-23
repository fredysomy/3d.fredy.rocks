import * as THREE from "three";

import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'

  var scene = new THREE.Scene()
  
  const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )

  const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
	light.position.set( 0.5, 1, 0.75 );
	scene.add( light );

	const controls = new PointerLockControls( camera,  document.getElementsByTagName('body')[0] );
    controls.lock()
  


  camera.position.set(0,10,180)
  const renderer=new THREE.WebGLRenderer({ alpha:true,antialias:true ,canvas:document.querySelector("canvas.webgl")})
  renderer.setSize(window.innerWidth,window.innerHeight)
  
  const plane=new THREE.PlaneGeometry(2000,2000,100,100)
  const materialPlane=new THREE.MeshBasicMaterial({side:THREE.DoubleSide,color:"red"})
 const PlanegeoMetry=new THREE.Mesh(plane,materialPlane)
 scene.add(PlanegeoMetry)
 PlanegeoMetry.rotateX( - Math.PI / 2 );

 const box=new THREE.BoxGeometry(5,5,5)
 const materialBox=new THREE.MeshNormalMaterial()
const BoxgeoMetry=new THREE.Mesh(box,materialBox)
scene.add(BoxgeoMetry)
BoxgeoMetry.position.set(0,0,0)



scene.add(controls.getObject());

controls.moveRight(0)

  const animate = function () {
    requestAnimationFrame( animate );
   
 
    renderer.render( scene, camera );
  };

  animate();

