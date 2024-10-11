//perlin line plotting
function drawLine(
  ctx: CanvasRenderingContext2D,
  coords: number[],
  rangeHeight: number,
) {
  for (var i = 0; i < coords.length; i++) {
    ctx.lineTo(i, rangeHeight + coords[i])
  }
  ctx.stroke()
}

export function drawMountains(
  ctx: CanvasRenderingContext2D,
  coords: number[],
  rangeHeight: number,
  w: number,
  h: number,
) {
  ctx.moveTo(0, h)
  ctx.beginPath()

  drawLine(ctx, coords, rangeHeight)

  ctx.lineTo(w, h)
  ctx.lineTo(0, h)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export function setBackground(
  ctx: CanvasRenderingContext2D,
  c1: string,
  c2: string,
  w: number,
  h: number,
) {
  let grd = ctx.createLinearGradient(0, h, 0, 0)
  grd.addColorStop(0, c1)
  grd.addColorStop(1, c2)
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, w, h)
}
