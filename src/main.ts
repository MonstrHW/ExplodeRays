import Ray from "./ray";
import Vector from "./vector";

const canvas = document.getElementById("app") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")!;

const rayCount = 50;
const startAngle = 45;
const rayLength = 400;
const velocityMultiplier = 2;
const rays: Ray[] = [];

function createRayExplosion(x: number, y: number) {
	const start = new Vector(x, y);
	const color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
	const stepAngle = 360 / rayCount;

	for (let i = 0; i < rayCount; i++) {
		const angle = startAngle + i * stepAngle;
		const velocity = Vector.mulByScalar(
			Vector.angleToVector(angle),
			velocityMultiplier
		);
		rays.push(new Ray(start, rayLength, velocity, color));
	}
}

window.addEventListener("click", (e) => {
	createRayExplosion(e.clientX, e.clientY);
});

function drawTick() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (const ray of rays) {
		ray.draw(ctx);
	}

	window.requestAnimationFrame(drawTick);
}

window.requestAnimationFrame(drawTick);
