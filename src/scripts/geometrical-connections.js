let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')
canvas.width = window.innerWidth * 2
canvas.height = window.innerHeight * 2
document.body.appendChild(canvas)
ctx.scale(0.5, 0.5)

window.onresize = () => {
  canvas.width = window.innerWidth * 2
  canvas.height = window.innerHeight * 2
  ctx.scale(0.5, 0.5)
}

let points = []
for (let i = 0; i < 75; i++) {
  let min = -3
  let max = 3
  points.push({
    x: 10 + Math.random() * (canvas.width - 10),
    y: 10 + Math.random() * (canvas.height - 10),
    xVel: Math.random() * (max - min) + min, yVel: Math.random() * (max - min) + min
  })
}

function pitagoras (pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))
}

function loop () {
  window.requestAnimationFrame(loop)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  for (let i = 0, p = points; i < p.length; i++) {
    p[i].x += p[i].xVel
    p[i].y += p[i].yVel
    
    if (p[i].x + 6 > canvas.width || p[i].x - 6 < 0) p[i].xVel = -p[i].xVel
    if (p[i].y + 6 > canvas.height || p[i].y - 6 < 0) p[i].yVel = -p[i].yVel
    
    for (let j = 0; j < p.length; j++) {
      let distance = pitagoras(p[i], p[j])
      if (distance < 300) {
        let opacity = 1 - distance / 300
        let trueConnection = j === i - 1        
        ctx.lineWidth = trueConnection ? 3 : 1.5
        ctx.strokeStyle = trueConnection
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(0, 0, 0, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(p[i].x, p[i].y)
        ctx.lineTo(p[j].x, p[j].y)
        ctx.stroke()
      }
    }
    
    ctx.beginPath()
    ctx.arc(p[i].x, p[i].y, 6, 0, Math.PI * 2)
    ctx.fill()
  }
}

loop()
