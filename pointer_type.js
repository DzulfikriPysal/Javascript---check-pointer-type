var context = canvas.getContext("2d");
if (window.PointerEvent) {
	canvas.addEventListener("pointermove", pointer_type, false);
}
else {
	canvas.addEventListener("mousemove", pointer_type, false);
}

function pointer_type(event) {
	var squaresize = 10;
	if (event.pointerType) {
		switch (event.pointerType) {
			case "touch":
				context.fillStyle = "rgba(255, 0, 0, 1)";
				break;
			case "pen":
				context.fillStyle = "rgba(0, 255, 0, 1)";
				break;
			case "mouse":
				context.fillStyle = "rgba(0, 0, 255, 1)";
				break;
		}
	}

	context.fillRect(event.clientX, event.clientY, squaresize, squaresize);
}
