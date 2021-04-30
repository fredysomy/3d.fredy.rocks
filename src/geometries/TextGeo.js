import * as THREE from "three";
function TextGeo(text) {
	const fontLoader = new THREE.FontLoader();
	fontLoader.load('../fonts/popins.json', (font) => {
		const textGeometry = new THREE.TextBufferGeometry(
			text,
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
		const text = new THREE.Mesh(
			textGeometry,
			material
		);
	})
	
	return text
}
export default TextGeo
