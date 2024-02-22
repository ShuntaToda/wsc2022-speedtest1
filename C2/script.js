const spotlight = document.querySelector(".spotlight")
const img = document.querySelector("img")

let flag = false
let size = 100

img.addEventListener("mouseenter", () => {
  console.log("enter")
  flag = true
  spotlight.style.display = "block"
})
img.addEventListener("mousemove", (e) => {
  if (flag) {
    spotlight.style.top = e.clientY + "px"
    spotlight.style.left = e.clientX + "px"
  }

  spotlight.style.width = size + "px"
  spotlight.style.height = size + "px"
})
img.addEventListener("mouseleave", () => {

  console.log("leave")
  flag = false
  spotlight.style.display = "none"
})

img.addEventListener("wheel", (e) => {
  console.log(e)
  if (e.deltaY > 0 && size >= 10) {
    size -= 10
  } else if (e.deltaY < 0) {
    size += 10
  }
  spotlight.style.width = size + "px"
  spotlight.style.height = size + "px"

})