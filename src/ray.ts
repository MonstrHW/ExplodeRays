import Vector from "./vector";

export default class Ray {
	protected end: Vector;

	constructor(
		protected start: Vector,
		protected length: number,
		protected velocity: Vector,
		protected color: string
	) {
		this.end = start;
	}

	protected calculateMove() {
		if (Vector.distance(this.start, this.end) > this.length) {
			this.start = Vector.add(this.start, this.velocity);
		}

		this.end = Vector.add(this.end, this.velocity);
	}

	public draw(ctx: CanvasRenderingContext2D) {
		this.calculateMove();

		ctx.strokeStyle = this.color;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(this.start.x, this.start.y);
		ctx.lineTo(this.end.x, this.end.y);
		ctx.stroke();
	}
}
