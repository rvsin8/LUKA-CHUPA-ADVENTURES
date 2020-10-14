function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
  context.save();
  context.translate(atX, atY);
  context.rotate(withAng);
  context.drawImage(
    useBitmap,
    -useBitmap.width / 2,
    -useBitmap.height / 2
  );
  context.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  context.fillStyle = fillColor;
  context.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  context.fillStyle = fillColor;
  context.beginPath();
  context.arc(centerX, centerY, 10, 0, Math.PI * 2, true);
  context.fill();
}

function colorText(showWords, textX, textY, fillColor) {
  context.fillStyle = fillColor;
  context.fillText(showWords, textX, textY);
}
