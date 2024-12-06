import RayPool from "./ray_pool";

const canvas = document.getElementById("app") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")!;

const rayPool = new RayPool();

window.addEventListener("click", (e) => {
	rayPool.addRayExplosion(e.clientX, e.clientY);
});

function drawTick() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	rayPool.drawRays(ctx);

	window.requestAnimationFrame(drawTick);
}

window.requestAnimationFrame(drawTick);
