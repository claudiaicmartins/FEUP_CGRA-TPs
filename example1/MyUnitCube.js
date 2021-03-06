/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			-0.5, 0.5, -0.5,	//1
			-0.5, 0.5, 0.5,	//2
			-0.5, -0.5, 0.5,	//3
			0.5, -0.5, -0.5,	//4
			0.5, 0.5, 0.5,	//5
			0.5, -0.5, 0.5,	//6
			0.5, 0.5, -0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//face 1
			0, 2, 1,
			3,2,0,

			//face 2
			0,4,6,
			0,6,3,

			//face 3
			0,1,7,
			7,4,0,

			//face 4
			3,5,2,
			5,3,6,

			//face 5
			6,7,5,
			7,6,4,

			//face 6
			2,5,7,
			7,1,2,


			
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

