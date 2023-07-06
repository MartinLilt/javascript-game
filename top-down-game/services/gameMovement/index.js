function gameMovementManager() {

    const handleMouseClick = (e) => {
        console.log(e.clientX, e.clientY)

        ctx.fillStyle = 'black';
        ctx.fill();
    }

    canvas.addEventListener('click', handleMouseClick);
}

gameMovementManager()