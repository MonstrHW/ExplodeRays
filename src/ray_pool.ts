import Ray from "./ray";
import Vector from "./vector";
import Config from "./config";

export default class RayPool {
	protected pool: Ray[] = [];

	public addRayExplosion(x: number, y: number) {
		const start = new Vector(x, y);
		const color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
		const stepAngle = 360 / Config.rayCount;

		for (let i = 0; i < Config.rayCount; i++) {
			const angle = Config.startAngle + i * stepAngle;
			const velocity = Vector.mulByScalar(
				Vector.angleToVector(angle),
				Config.velocityMultiplier
			);
			this.pool.push(new Ray(start, Config.rayLength, velocity, color));
		}
	}

	public drawRays(ctx: CanvasRenderingContext2D) {
		for (const ray of this.pool) {
			ray.draw(ctx);
		}
	}
}
