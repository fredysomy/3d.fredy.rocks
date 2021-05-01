import * as THREE from "three";
const font1=require('../fonts/popins.json')
function TextGeo() {
	var text
	const material = new THREE.MeshNormalMaterial();
	const fontLoader = new THREE.FontLoader();
	fontLoader.load(font1, (font) => {
		const textGeometry = new THREE.TextGeometry(
			"Fredy Somy",
			{
				font,
				size: 0.5,
				height: 0.2,
				curveSegments: 9,
				bevelEnabled: true,
				bevelThickness:0.01,
				bevelSize: 0.014,
				bevelOffset: 0,
				bevelSegments: 12
			}
		)
		text = new THREE.Mesh(
			textGeometry,
			material
		);
	})
	
	return text
}
export default TextGeo
