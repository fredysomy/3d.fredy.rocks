import * as THREE from "three";

function TextGeo() {
  let mesh
	var loader = new THREE.FontLoader();
    loader.load( "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json", function ( font ) {
       let geometry = new THREE.TextBufferGeometry( 'FREDY SOMY', {
        font: font,
        size: 10,
        height: 0.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
    
     let material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh( geometry, material );
	})
  return mesh

}
export default TextGeo
