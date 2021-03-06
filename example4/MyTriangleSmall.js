/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene, Coords) {
		super(scene);
		this.texCoords=Coords;
		this.initBuffers();



	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2
			-1, 0, 0,	//3
			1, 0, 0,	//4
			0, 1, 0,	//5
		];
		
		this.normals =[
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3,
			
		];
		
		

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

}

