export default class Vector {
	constructor(public x: number, public y: number) {}

	public static add(a: Vector, b: Vector): Vector {
		return new Vector(a.x + b.x, a.y + b.y);
	}

	public static mulByScalar(a: Vector, s: number): Vector {
		return new Vector(a.x * s, a.y * s);
	}

	public static distance(a: Vector, b: Vector): number {
		return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
	}

	public static angleToVector(degrees: number): Vector {
		const angle = degrees * (Math.PI / 180);
		return new Vector(Math.cos(angle), Math.sin(angle));
	}
}
