/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			1, 1, 0,	//2
			3, 1, 0,	//3
			0, 0, 0,	//4
			2, 0, 0,	//5
			1, 1, 0,	//6 
			3, 1, 0		//7
		];

		this.normals =[
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 3,
			6, 5, 4,
			7, 5, 6
		];

		this.texCoords=[
			1,1,
			0.5,1,
			0.75,0.75,
			0.25,0.75,
			1,1,
			0.5,1,
			0.75,0.75,
			0.25,0.75,
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}