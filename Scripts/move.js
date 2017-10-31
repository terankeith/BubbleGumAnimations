function move(){
	drawCircle(startX,startY);
	startX += velocityX;
	startY += velocityY;

	if(startX != endX || startY != endY){
		requestAnimationFrame(move)
	}
}

move();