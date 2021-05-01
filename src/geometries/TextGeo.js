import * as THREE from "three";
const font1=require('../fonts/popins.json')
function TextGeo() {
	var mesh
	var material
	var geometry
	var loader = new THREE.FontLoader();
    loader.load( font1, function ( font ) {
      geometry = new THREE.TextBufferGeometry( 'Hello three.js!', {
        font: font,
        size: 1,
        height: 0.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
    
      material = new THREE.MeshNormalMaterial();
     
	})
	mesh = new THREE.Mesh( geometry, material );
	return mesh
}
export default TextGeo
