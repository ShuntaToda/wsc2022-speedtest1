const colorButtons = document.querySelectorAll(".color-palet > div")
const colors = ["black", "red", "yellow", "green", "blue"]

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let flag = false

const resizeRightBtn = document.querySelector(".resize-right")
const resizeBottomBtn = document.querySelector(".resize-bottom")
const resizeBottomRightBtn = document.querySelector(".resize-bottom-right")

let resizeRightFlag = false
let resizeBottomFlag = false
let resizeBottomRightFlag = false

let selectedColor = "black"
colorButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    selectedColor = colors[index]
  })
})

canvas.addEventListener("mousedown", (e) => {
  flag = true
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)

})
canvas.addEventListener("mouseup", () => {
  flag = false
  ctx.closePath()
})
canvas.addEventListener("mousemove", (e) => {
  if (flag) {
    ctx.strokeStyle = selectedColor
    console.log(ctx)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
  }
})

const saveJpg = () => {
  const a = document.createElement("a")
  const imgData = canvas.toDataURL("image.jpg")
  a.href = imgData
  a.download = imgData
  a.click()
}
const savePng = () => {
  const a = document.createElement("a")
  const imgData = canvas.toDataURL("image.png")
  a.href = imgData
  a.download = imgData
  a.click()
}



resizeRightBtn.addEventListener("mousedown", () => {
  resizeRightFlag = true

})
resizeBottomBtn.addEventListener("mousedown", () => {
  resizeBottomFlag = true

})
resizeBottomRightBtn.addEventListener("mousedown", () => {
  resizeBottomRightFlag = true

})
resizeRightBtn.addEventListener("mouseup", () => {
  resizeRightFlag = false

})
resizeBottomBtn.addEventListener("mouseup", () => {
  resizeBottomFlag = false

})
resizeBottomRightBtn.addEventListener("mouseup", () => {
  resizeBottomRightFlag = false

})

document.addEventListener("mousemove", (e) => {
  if (resizeRightFlag) {
    // 分からなかった
  }
})